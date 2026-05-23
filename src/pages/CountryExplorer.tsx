import RegionMap from "@/components/RegionMap";
import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { ChartCard } from '@/components/charts/ChartCard';
import { AreaTrendChart } from '@/components/charts/AreaTrendChart';
import { DonutChart, DonutLegend } from '@/components/charts/DonutChart';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import {
  useCountries,
  useLossTrend,
  useEmissions,
  useDrivers,
  useCountryIntelligence
} from '@/hooks/useForestData';
import { api } from '@/lib/api';
import { TreePine, Flame, Search, Globe, Brain, TrendingUp } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { StatCard } from '@/components/ui/stat-card';

export default function CountryExplorer() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [selectedCountry, setSelectedCountry] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [landmarkData, setLandmarkData] = useState([]);
  const [showFullData, setShowFullData] = useState(false);

  // Handle country parameter from URL
  useEffect(() => {
    const countryParam = searchParams.get('country');
    if (countryParam) {
      setSelectedCountry(decodeURIComponent(countryParam));
    }
  }, [searchParams]);

  //Handle Landmark parameter from URL
  useEffect(() => {
  const fetchLandmark = async () => {
    try {
      const data = await api.getLandmarkSummary();
      setLandmarkData(data);
    } catch (error) {
      console.error('Error fetching LANDMARK data:', error);
    }
  };

  fetchLandmark();
}, []);

  const { data: countries } = useCountries();
  const {
    data: intelligenceData,
    error: intelligenceError,
    isLoading: intelligenceLoading,
  } = useCountryIntelligence();

  const selectedIntelligence = intelligenceData?.find(
    (d: any) => {
      const intelligenceCountry =
        d.country?.toLowerCase().trim();

      const selected =
        selectedCountry?.toLowerCase().trim();

      return (
        intelligenceCountry === selected ||
        intelligenceCountry?.includes(selected) ||
        selected?.includes(intelligenceCountry)
      );
    }
  );

  const { data: lossTrend, isLoading: trendLoading } = useLossTrend(selectedCountry);
  const { data: emissions, isLoading: emissionsLoading } = useEmissions(selectedCountry);
  const { data: drivers, isLoading: driversLoading } = useDrivers(selectedCountry);
  const [primaryLossTrend, setPrimaryLossTrend] = useState([]);
  const [primaryLoading, setPrimaryLoading] = useState(false);

  // Fetch primary forest loss data when country changes
  useEffect(() => {
    if (selectedCountry) {
      const fetchPrimaryLoss = async () => {
        setPrimaryLoading(true);
        try {
          const data = await api.getPrimaryLossTrend(selectedCountry);
          const formattedData = data.map(d => ({ year: d.year, value: d.primary_forest_loss_ha }));
          setPrimaryLossTrend(formattedData);
        } catch (error) {
          console.error('Error fetching primary loss data:', error);
          setPrimaryLossTrend([]);
        } finally {
          setPrimaryLoading(false);
        }
      };
      fetchPrimaryLoss();
    } else {
      setPrimaryLossTrend([]);
    }
  }, [selectedCountry]);

  const displayCountries = countries || [];
  const filteredCountries = displayCountries.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayTrend = lossTrend?.map(d => ({ year: d.year, value: d.tree_cover_loss_ha })) || [];
  const displayEmissions = emissions?.map(d => ({ year: d.year, value: d.carbon_gross_emissions_MgCO2e })) || [];
  const displayDrivers = drivers?.map(d => ({ name: d.driver, value: Math.round((d.hectares / drivers.reduce((sum, item) => sum + item.hectares, 0)) * 100) })) || [];

  const selectedCountryName = displayCountries.find(c => c.name === selectedCountry)?.name || 'Select Country';

  const selectedLandmark = selectedCountry
  ? landmarkData.find((d: any) => {
      const selected = selectedCountry.toLowerCase().trim();
      const country = d.country?.toLowerCase().trim();

      return (
        country === selected ||
        country.includes(selected) ||
        selected.includes(country)
      );
    })
  : null;

  const totalLoss = displayTrend.reduce((sum, d) => sum + d.value, 0);
  const avgLoss = displayTrend.length > 0 ? totalLoss / displayTrend.length : 0;

  const formatHectares = (value: number) => {
    if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M ha`;
    if (value >= 1000) return `${(value / 1000).toFixed(0)}K ha`;
    return `${value} ha`;
  };

  const formatEmissions = (value: number) => {
    if (value >= 1000000000) return `${(value / 1000000000).toFixed(2)}B`;
    if (value >= 1000000) return `${(value / 1000000).toFixed(0)}M`;
    return value.toLocaleString();
  };
  // 🌍 Indigenous recognition percentage
  const recognitionRatio =
    selectedLandmark && selectedLandmark.territories > 0
      ? (selectedLandmark.recognized / selectedLandmark.territories) * 100
      : 0;

  // ✅ Prepare sorted data (latest first)
  const sortedTrend = [...displayTrend].sort(
    (a, b) => Number(b.year) - Number(a.year)
  );

  // ✅ Show only last 5 unless expanded
  const visibleTrend = showFullData
    ? sortedTrend
    : sortedTrend.slice(0, 5);
  return (
    <PageLayout>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Country Explorers
            </h1>
            <p className="text-muted-foreground text-lg">
              Explore detailed deforestation data by country
            </p>

          </div>

        </div>
      </div>

      {/* Country Selector */}
      <div className="mb-8">
        <div className="glass-card rounded-xl p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="flex-1 w-full sm:w-auto">
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              Select Country
            </label>
            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger className="w-full sm:w-[280px]">
                <SelectValue placeholder="Choose a country" />
              </SelectTrigger>
              <SelectContent>
                <div className="p-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search countries..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                {filteredCountries.map((country) => (
                  <SelectItem key={country.name} value={country.name}>
                    {country.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">{formatHectares(avgLoss)}</p>
              <p className="text-xs text-muted-foreground">Avg. Annual Loss</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">{displayTrend.length}</p>
              <p className="text-xs text-muted-foreground">Years of Data</p>
            </div>
          </div>
        </div>
      </div>

      {/* 🤖 AI ACTIONS */}
      {selectedCountry && (
        <div className="flex flex-wrap gap-3 mb-8">

          <button
            onClick={() =>
              navigate(`/predictions?country=${encodeURIComponent(selectedCountry)}`)
            }
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <TrendingUp className="h-4 w-4" />
            AI Predictions for {selectedCountry}
          </button>

          <button
            onClick={() =>
              navigate(`/recommendations?country=${encodeURIComponent(selectedCountry)}`)
            }
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Brain className="h-4 w-4" />
            AI Recommendations for {selectedCountry}
          </button>

        </div>
      )}

        {/* 🌍 INTELLIGENCE OVERVIEW */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-10">

          {/* 🌿 ENVIRONMENTAL PRESSURE */}
          <div>

            <div className="mb-3">
              <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                Environmental Pressure Indicators
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

              <StatCard
                title="Total Tree Cover Loss"
                value={formatHectares(totalLoss)}
                subtitle={`${selectedCountryName} - All years`}
                icon={TreePine}
                variant="forest"
              />

              <StatCard
                title="Total Carbon Emissions"
                value={formatEmissions(displayEmissions.reduce((sum, d) => sum + d.value, 0))}
                subtitle="MgCO₂e released"
                icon={Flame}
                variant="amber"
              />

              <StatCard
                title="Restoration Pressure"
                value={
                  selectedIntelligence?.restoration_pressure_score != null
                    ? selectedIntelligence.restoration_pressure_score.toFixed(2)
                    : "No Data"
                }
                subtitle={
                  selectedIntelligence?.restoration_pressure_score != null
                    ? "Composite restoration urgency"
                    : "No restoration intelligence available"
                }
                icon={TrendingUp}
                variant={
                  selectedIntelligence?.restoration_pressure_score != null
                    ? "amber"
                    : "muted"
                }
              />

            </div>
            {selectedIntelligence?.restoration_pressure_score != null && (

              <div className="mt-5 relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-[#07140f] via-[#0b1f17] to-[#13261d] p-6 shadow-2xl">

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_35%)]" />

                <div className="relative z-10">

                  <div className="flex items-center justify-between mb-5">

                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-emerald-400/70 font-semibold">
                        Environmental Intelligence Profile
                      </p>

                      <h3 className="text-2xl font-bold text-white mt-1">
                        Restoration Classification
                      </h3>
                    </div>

                    <div
                      className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide shadow-lg ${
                        selectedIntelligence.restoration_pressure_score >= 8
                          ? "bg-red-500/20 text-red-300 border border-red-500/30"
                          : selectedIntelligence.restoration_pressure_score >= 3
                          ? "bg-amber-500/20 text-amber-200 border border-amber-500/30"
                          : "bg-emerald-500/20 text-emerald-200 border border-emerald-500/30"
                      }`}
                    >
                      {selectedIntelligence.restoration_pressure_score >= 8
                        ? "HIGH RESTORATION PRESSURE"
                        : selectedIntelligence.restoration_pressure_score >= 3
                        ? "GOVERNANCE-INTENSIVE SYSTEM"
                        : "LOWER PRESSURE SYSTEM"}
                    </div>

                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div>

                      <p className="text-sm uppercase tracking-wide text-emerald-400/60 mb-2">
                        Intelligence Interpretation
                      </p>

                      <p className="text-sm leading-relaxed text-gray-300">

                        {selectedIntelligence.restoration_pressure_score >= 8
                          ? "Elevated forest loss and carbon emissions suggest stronger restoration urgency and environmental pressure across large-scale forest systems."
                          : selectedIntelligence.restoration_pressure_score >= 3
                          ? "Moderate environmental pressure combined with governance-related territorial structures and institutional recognition patterns."
                          : "Relatively lower environmental degradation pressure compared to higher-intensity restoration systems."}

                      </p>

                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">

                      <p className="text-xs uppercase tracking-wide text-emerald-400/60 mb-2">
                        Restoration Pressure Score
                      </p>

                      <div className="flex items-end gap-2">

                        <span className="text-5xl font-black text-white">
                          {selectedIntelligence.restoration_pressure_score.toFixed(2)}
                        </span>

                        <span className="text-sm text-gray-400 mb-1">
                          composite index
                        </span>

                      </div>

                      <div className="mt-4 h-2 w-full rounded-full bg-white/10 overflow-hidden">

                        <div
                          className={`h-full rounded-full ${
                            selectedIntelligence.restoration_pressure_score >= 8
                              ? "bg-gradient-to-r from-red-400 to-red-600"
                              : selectedIntelligence.restoration_pressure_score >= 3
                              ? "bg-gradient-to-r from-amber-300 to-amber-500"
                              : "bg-gradient-to-r from-emerald-300 to-emerald-500"
                          }`}
                          style={{
                            width: `${Math.min(
                              selectedIntelligence.restoration_pressure_score * 5,
                              100
                            )}%`
                          }}
                        />

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            )}

          </div>

          {/* 🌍 GOVERNANCE */}
          <div className="pt-1">

            <div className="mb-3">
              <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                Territorial & Indigenous Governance
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">

              {selectedLandmark && (
                <>
                  <StatCard
                    title="Indigenous Territories"
                    value={selectedLandmark.territories}
                    subtitle="LANDMARK dataset"
                    icon={Globe}
                    variant="ocean"
                  />

                  <StatCard
                    title="Recognized Territories"
                    value={selectedLandmark.recognized}
                    subtitle="Acknowledged by government"
                    icon={TreePine}
                    variant="ocean"
                  />

                  <StatCard
                    title="Unrecognized Territories"
                    value={selectedLandmark.not_recognized}
                    subtitle="Not acknowledged"
                    icon={Flame}
                    variant="amber"
                  />

                  <StatCard
                    title="Recognition Ratio"
                    value={`${recognitionRatio.toFixed(1)}%`}
                    subtitle="Recognized indigenous territories"
                    icon={Globe}
                    variant="ocean"
                  />
                </>
              )}

            </div>

          </div>

        </div>

        {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <ChartCard
          title={`Tree Cover Loss Trend - ${selectedCountryName || 'Select Country'}`}
          subtitle="Annual hectares lost"
        >
          {trendLoading ? (
            <Skeleton className="h-[300px] w-full" />
          ) : (
            <>
              <AreaTrendChart
                data={displayTrend}
                color="forest"
                formatValue={formatHectares}
              />

              <p className="text-sm text-gray-600 mt-5">
                Forest loss patterns in {selectedCountryName} reveal persistent
                environmental pressure associated with land-use activity,
                extraction, and ecosystem transformation.
              </p>
            </>
          )}
        </ChartCard>

        {primaryLossTrend && primaryLossTrend.some(d => d.value > 0) && (
          <ChartCard
            title={`Primary Forest Loss Trend - ${selectedCountryName || 'Select Country'}`}
            subtitle="Primary forest hectares lost"
          >
            {primaryLoading ? (
              <Skeleton className="h-[300px] w-full" />
            ) : (
              <>
                <AreaTrendChart
                  data={primaryLossTrend}
                  color="terracotta"
                  formatValue={formatHectares}
                />

                <p className="text-sm text-gray-600 mt-5">
                  Primary forest ecosystems in {selectedCountryName} continue to face
                  degradation pressure, particularly in ecologically sensitive and
                  biodiversity-rich regions.
                </p>
              </>
            )}
          </ChartCard>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <ChartCard
          title="Deforestation Drivers"
          subtitle="Estimated contribution to forest degradation"
        >
          {driversLoading ? (
            <Skeleton className="h-[250px] w-full" />
          ) : (
            <>
              <DonutChart
                data={displayDrivers}
                centerValue={`${displayDrivers[0]?.value || 0}%`}
                centerLabel={displayDrivers[0]?.name || ''}
              />
              <DonutLegend data={displayDrivers} />
              <p className="text-sm text-gray-600 mt-5">
                Dominant deforestation drivers in {selectedCountryName} indicate the
                primary environmental pressures contributing to ecosystem degradation
                and territorial transformation.
              </p>
            </>
          )}
        </ChartCard>

        <ChartCard
          title={`Carbon Emissions - ${selectedCountryName}`}
          subtitle="Annual MgCO₂e released"
        >
          {emissionsLoading ? (
            <Skeleton className="h-[250px] w-full" />
          ) : (
            <AreaTrendChart
              data={displayEmissions}
              color="terracotta"
              height={250}
              formatValue={(v) => `${formatEmissions(v)} MgCO₂e`}
            />
          )}
        </ChartCard>
      </div>

      {/* Data Table */}
      <ChartCard title="Yearly Data" subtitle="Detailed breakdown by year">
        <div className="flex justify-between items-center mb-3">
          <p className="text-sm text-muted-foreground">
            Showing {showFullData ? "all years" : "last 5 years"}
          </p>

          <button
            onClick={() => setShowFullData(!showFullData)}
            className="text-sm text-primary font-medium hover:underline"
          >
            {showFullData ? "Show less" : "View full history"}
          </button>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Year</TableHead>
                <TableHead>Tree Cover Loss</TableHead>
                <TableHead>Carbon Emissions</TableHead>
                <TableHead>Primary Driver</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {visibleTrend.map((row, index) => {
                const yearData = displayEmissions.find(e => e.year === row.year);
                const primaryDriver = displayDrivers.find(d => d.name === (drivers?.find(dr => dr.hectares === Math.max(...drivers.map(dr => dr.hectares)))?.driver || ''))?.name || '';
                return (
                  <TableRow key={row.year}>
                    <TableCell className="font-medium">{row.year}</TableCell>
                    <TableCell>{formatHectares(row.value)}</TableCell>
                    <TableCell>{yearData ? formatEmissions(yearData.value) : 'N/A'} MgCO₂e</TableCell>
                    <TableCell>{primaryDriver}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </ChartCard>

      {/* 🌍 REGION MAP SECTION*/}
      <div className="mt-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-2xl font-bold mb-4">Explore Regions</h2>
        <p className="text-sm text-gray-600 mb-4 max-w-3xl">
          Explore subnational restoration intelligence, environmental indicators,
          and territorial monitoring layers across regions within {selectedCountryName}.
        </p>
        <RegionMap selectedCountry={selectedCountry} />
        <p className="text-xs text-gray-400 mt-4">
          Regional layers combine Global Forest Watch datasets,
          territorial indicators, and experimental restoration intelligence.
        </p>
      </div>
    </PageLayout>
  );
}
