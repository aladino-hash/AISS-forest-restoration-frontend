import { getSubnationalKPI } from "@/lib/api";
import { PageLayout } from '@/components/layout/PageLayout';
import { StatCard } from '@/components/ui/stat-card';
import { ChartCard } from '@/components/charts/ChartCard';
import { AreaTrendChart } from '@/components/charts/AreaTrendChart';
import { BarChartHorizontal } from '@/components/charts/BarChartHorizontal';
import { BarChartVertical } from '@/components/charts/BarChartVertical';
import { TreePine, Globe, Flame, Calendar, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSummary } from '@/hooks/useForestData';
import { useGlobalLossTrend, useGlobalDrivers } from '@/hooks/useGlobalData';
import { Skeleton } from '@/components/ui/skeleton';
import { useNavigate } from 'react-router-dom';
import { useMapData } from '@/hooks/useForestData';
import { api } from '@/lib/api';
import CurimanaMap from '@/components/CurimanaMap';

export default function GlobalOverview() {
  const navigate = useNavigate();
const { data: summary, isLoading: summaryLoading } = useSummary();
  const { data: globalLossTrend, isLoading: globalTrendLoading } = useGlobalLossTrend();
  const { data: globalDrivers, isLoading: globalDriversLoading } = useGlobalDrivers();
  const { data: mapData, isLoading: mapLoading } = useMapData();
  const [primaryLossTrend, setPrimaryLossTrend] = useState([]);
  const [primaryLoading, setPrimaryLoading] = useState(false);
  const [topCountries, setTopCountries] = useState([]);
  const [topPrimaryCountries, setTopPrimaryCountries] = useState([]);
  const [topCountriesLoading, setTopCountriesLoading] = useState(false);

  // Then define the constant
  const normalizedSummary = summary
    ? {
      total_countries: summary.countries,
      total_loss_hectares: summary.total_loss,
      total_emissions: summary.total_emissions,
      latest_year: summary.latest_year,
      earliest_year: 2001,
    }
    : null;

  const displayTrend = globalLossTrend?.map(d => ({ year: d.year, value: d.tree_cover_loss_ha }));
  const displayDrivers = globalDrivers?.map(d => ({ name: d.driver, value: d.percentage }));

  // Fetch primary forest loss data
  useEffect(() => {
    const fetchPrimaryLoss = async () => {
      setPrimaryLoading(true);
      try {
        // For now, we'll use a placeholder since global primary loss API might not exist
        // In a real implementation, you'd have an API endpoint for global primary forest loss
        const data = await api.getPrimaryLossTrend('Brazil'); // Using Brazil as example
        const formattedData = data.map(d => ({ year: d.year, value: d.primary_forest_loss_ha }));
        setPrimaryLossTrend(formattedData);
      } catch (error) {
        console.error('Error fetching primary loss data:', error);
        // Set empty data if API fails
        setPrimaryLossTrend([]);
      } finally {
        setPrimaryLoading(false);
      }
    };
    fetchPrimaryLoss();
  }, []);

// useEffect(() => {
//   getSubnationalKPI()
//     .then(data => {
//       console.log("SUBNATIONAL DATA:", data);
//     })
//     .catch(err => {
//       console.error("ERROR:", err);
//     });
// }, []);

  // Fetch top countries data
  useEffect(() => {
    const fetchTopCountries = async () => {
      setTopCountriesLoading(true);
      try {
        // Use map data to calculate top countries by total loss
        if (mapData && mapData.length > 0) {
          // Group by country and sum total loss
          const countryLoss = {};
          
          mapData.forEach(item => {
            if (item.tree_cover_loss_ha > 0) {
              if (!countryLoss[item.country]) {
                countryLoss[item.country] = 0;
              }
              countryLoss[item.country] += item.tree_cover_loss_ha;
            }
          });
          
          // Sort and get top 10 for tree cover loss
          const sortedTreeLoss = Object.entries(countryLoss)
            .sort(([,a], [,b]) => (b as number) - (a as number))
            .slice(0, 10)
            .map(([country, loss]) => ({ 
              name: formatCountryName(country), 
              value: loss as number,
              fullName: country
            }));
          
          setTopCountries(sortedTreeLoss);
          
          // Fetch primary forest data for all countries in one call
          try {
            const primaryData = await api.getPrimaryLossAllCountries(2001, 2024);
            
            // Process primary forest data
            const sortedPrimaryLoss = primaryData
              .filter(item => item.primary_forest_loss_ha > 0)
              .map(item => ({
                name: formatCountryName(item.country),
                value: item.primary_forest_loss_ha,
                fullName: item.country
              }))
              .sort((a, b) => b.value - a.value)
              .slice(0, 10);
            
            setTopPrimaryCountries(sortedPrimaryLoss);
          } catch (primaryError) {
            console.error('Error fetching primary forest data:', primaryError);
            setTopPrimaryCountries([]);
          }
        }
      } catch (error) {
        console.error('Error fetching top countries:', error);
        setTopCountries([]);
        setTopPrimaryCountries([]);
      } finally {
        setTopCountriesLoading(false);
      }
    };
    
    if (mapData) {
      fetchTopCountries();
    }
  }, [mapData]);

  const formatHectares = (value: number) => {
    if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M ha`;
    if (value >= 1000) return `${(value / 1000).toFixed(0)}K ha`;
    return `${value} ha`;
  };

  const formatCountryName = (name: string) => {
    // Only abbreviate if name is longer than 12 characters
    if (name.length <= 12) {
      return name;
    }
    
    // Smart abbreviations for long country names
    const abbreviations = {
      'Democratic Republic Of The Congo': 'DRC',
      'Central African Republic': 'CAR',
      'United States': 'USA',
      'United Kingdom': 'UK',
      'United Arab Emirates': 'UAE',
      'South Africa': 'SA',
      'New Zealand': 'NZ',
      'Papua New Guinea': 'PNG',
      'Saudi Arabia': 'KSA',
      'Sri Lanka': 'SL',
      'Costa Rica': 'CR',
      'El Salvador': 'SV',
      'Dominican Republic': 'DR',
      'Czech Republic': 'CZ',
      'North Macedonia': 'NM',
      'Bosnia and Herzegovina': 'BiH',
      'Trinidad and Tobago': 'TT',
      'Antigua and Barbuda': 'AB',
      'Saint Kitts and Nevis': 'SKN',
      'Saint Vincent and the Grenadines': 'SVG',
      'Saint Lucia': 'SLU',
      'Equatorial Guinea': 'EQG',
      'Guinea-Bissau': 'GB',
      'Sierra Leone': 'SL',
      'Western Sahara': 'WS',
      'South Sudan': 'SS',
      'North Korea': 'KP',
      'South Korea': 'KR',
      'East Timor': 'TL',
      'Myanmar': 'MMR',
      'Burkina Faso': 'BF',
      'Côte d\'Ivoire': 'CI',
      'Eswatini': 'SZ',
      'Lesotho': 'LS',
      'Moldova': 'MD',
      'Montenegro': 'ME',
      'Serbia': 'RS',
      'Kosovo': 'XK',
      'Vatican City': 'VA',
      'San Marino': 'SM',
      'Monaco': 'MC',
      'Liechtenstein': 'LI',
      'Andorra': 'AD',
      'Malta': 'MT',
      'Cyprus': 'CY',
      'Iceland': 'IS',
      'Ireland': 'IE',
      'Albania': 'AL',
      'Slovakia': 'SK',
      'Slovenia': 'SI',
      'Hungary': 'HU',
      'Romania': 'RO',
      'Bulgaria': 'BG',
      'Belarus': 'BY',
      'Ukraine': 'UA',
      'Russia': 'RU',
      'Estonia': 'EE',
      'Latvia': 'LV',
      'Lithuania': 'LT',
      'Poland': 'PL',
      'Germany': 'DE',
      'Austria': 'AT',
      'Switzerland': 'CH',
      'Netherlands': 'NL',
      'Belgium': 'BE',
      'Luxembourg': 'LU',
      'France': 'FR',
      'Spain': 'ES',
      'Portugal': 'PT',
      'Italy': 'IT',
      'Greece': 'GR',
      'Turkey': 'TR',
      'Israel': 'IL',
      'Jordan': 'JO',
      'Lebanon': 'LB',
      'Syria': 'SY',
      'Iraq': 'IQ',
      'Iran': 'IR',
      'Afghanistan': 'AF',
      'Pakistan': 'PK',
      'India': 'IN',
      'Bangladesh': 'BD',
      'Nepal': 'NP',
      'Bhutan': 'BT',
      'Thailand': 'TH',
      'Laos': 'LA',
      'Vietnam': 'VN',
      'Cambodia': 'KH',
      'Malaysia': 'MY',
      'Singapore': 'SG',
      'Indonesia': 'ID',
      'Philippines': 'PH',
      'Brunei': 'BN',
      'Australia': 'AU',
      'Fiji': 'FJ',
      'Solomon Islands': 'SB',
      'Vanuatu': 'VU',
      'Samoa': 'WS',
      'Tonga': 'TO',
      'Kiribati': 'KI',
      'Marshall Islands': 'MH',
      'Micronesia': 'FM',
      'Palau': 'PW',
      'Nauru': 'NR',
      'Tuvalu': 'TV'
    };
    
    return abbreviations[name] || name;
  };

  const formatEmissions = (value: number) => {
    if (value >= 1000000000) return `${(value / 1000000000).toFixed(1)}B`;
    if (value >= 1000000) return `${(value / 1000000).toFixed(0)}M`;
    return value.toLocaleString();
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Global Forest Overview
            </h1>
            <p className="text-muted-foreground text-lg">
              Worldwide tree cover loss trends and deforestation statistics
            </p>
          </div>
          <button
            onClick={() => navigate('/map')}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Globe className="h-4 w-4" />
            World Map
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {summaryLoading ? (
          <>
            <Skeleton className="h-32 rounded-xl" />
            <Skeleton className="h-32 rounded-xl" />
            <Skeleton className="h-32 rounded-xl" />
            <Skeleton className="h-32 rounded-xl" />
          </>
        ) : normalizedSummary ? (
          <>
            <StatCard
              title="Countries Tracked"
              value={normalizedSummary.total_countries}
              subtitle="Worldwide coverage"
              icon={Globe}
              variant="forest"
            />
            <StatCard
              title="Global Tree Loss"
              value={formatHectares(normalizedSummary.total_loss_hectares)}
              subtitle="Total since 2001"
              icon={TreePine}
            />
            <StatCard
              title="Carbon Emissions"
              value={formatEmissions(normalizedSummary.total_emissions)}
              subtitle="MgCO₂e released"
              icon={Flame}
              variant="amber"
            />
            <StatCard
              title="Data Range"
              value="2001 - 2024"
              subtitle="Years of coverage"
              icon={Calendar}
            />
          </>
        ) : (
          <>
            <StatCard
              title="Countries Tracked"
              value="No data"
              subtitle="API unavailable"
              icon={Globe}
              variant="forest"
            />
            <StatCard
              title="Global Tree Loss"
              value="No data"
              subtitle="API unavailable"
              icon={TreePine}
            />
            <StatCard
              title="Carbon Emissions"
              value="No data"
              subtitle="API unavailable"
              icon={Flame}
              variant="amber"
            />
            <StatCard
              title="Data Range"
              value="No data"
              subtitle="API unavailable"
              icon={Calendar}
            />
          </>
        )}
      </div>

      {/* Charts Grid */}
      <div className="space-y-6">
        {/* Main Trend Chart - Full Width */}
        <ChartCard
          title="Global Tree Cover Loss Trend"
          subtitle="Annual hectares lost worldwide"
        >
          {globalTrendLoading ? (
            <Skeleton className="h-[300px] w-full" />
          ) : displayTrend && displayTrend.length > 0 ? (
            <AreaTrendChart
              data={displayTrend}
              color="forest"
              formatValue={formatHectares}
            />
          ) : (
            <div className="h-[300px] w-full flex items-center justify-center text-muted-foreground">
              No trend data available
            </div>
          )}
        </ChartCard>

        {/* Primary Forest Loss Trend - Full Width */}
        <ChartCard
          title="Primary Forest Loss Trend"
          subtitle="Annual primary forest hectares lost worldwide"
        >
          {primaryLoading ? (
            <Skeleton className="h-[300px] w-full" />
          ) : primaryLossTrend && primaryLossTrend.length > 0 ? (
            <AreaTrendChart
              data={primaryLossTrend}
              color="terracotta"
              formatValue={formatHectares}
            />
          ) : (
            <div className="h-[300px] w-full flex items-center justify-center text-muted-foreground">
              No primary forest data available
            </div>
          )}
        </ChartCard>

        {/* Top Countries Charts - Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top 10 Countries - Tree Cover Loss */}
          <ChartCard
            title="Top 10 Countries - Tree Cover Loss"
            subtitle="Total hectares lost since 2001"
          >
            {topCountriesLoading ? (
              <Skeleton className="h-[400px] w-full" />
            ) : topCountries && topCountries.length > 0 ? (
              <BarChartHorizontal
                data={topCountries}
                color="colorful"
                formatValue={formatHectares}
                height={400}
              />
            ) : (
              <div className="h-[400px] w-full flex items-center justify-center text-muted-foreground">
                No country data available
              </div>
            )}
          </ChartCard>

          {/* Top 10 Countries - Primary Forest Loss */}
          <ChartCard
            title="Top 10 Countries - Primary Forest Loss"
            subtitle="Primary forest hectares lost since 2001"
          >
            {topCountriesLoading ? (
              <Skeleton className="h-[400px] w-full" />
            ) : topPrimaryCountries && topPrimaryCountries.length > 0 ? (
              <BarChartHorizontal
                data={topPrimaryCountries}
                color="colorful"
                formatValue={formatHectares}
                height={400}
              />
            ) : (
              <div className="h-[400px] w-full flex items-center justify-center text-muted-foreground">
                No primary forest data available
              </div>
            )}
          </ChartCard>
        </div>

        {/* World Map Preview - Full Width */}
        {/* Yamino Research Site - Replacement for Global Map */}
        <ChartCard
          title="Curimaná Agroforestry Monitoring"
          subtitle="Live satellite imagery (Sentinel-2 + NDVI)"
        >
          <CurimanaMap />

        </ChartCard>
        {/* 🌱 IMPACT STATS */}
        <div className="mt-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

            <div className="bg-green-50 rounded-xl p-6 shadow-sm">
              <div className="text-2xl font-bold text-green-700">12,450 ha</div>
              <div className="text-sm text-gray-600 mt-1">Land under restoration</div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 shadow-sm">
              <div className="text-2xl font-bold text-blue-700">8 Countries</div>
              <div className="text-sm text-gray-600 mt-1">Active monitoring regions</div>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6 shadow-sm">
              <div className="text-2xl font-bold text-yellow-700">24/7</div>
              <div className="text-sm text-gray-600 mt-1">Satellite monitoring</div>
            </div>

          </div>
        </div>


        {/* 🌍 FEATURED PROJECTS */}
        <div className="mt-12 px-6">
          <h2 className="text-xl font-semibold mb-4">Featured Restoration Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img src="/images/project1.jpg" className="h-40 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">Peru Agroforestry Pilot</h3>
                <p className="text-sm text-gray-600 mt-1">Ucayali, Peru</p>
                <p className="text-xs text-gray-500 mt-2">1,200 ha restored</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img src="/images/project2.jpg" className="h-40 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">Uganda Restoration Site</h3>
                <p className="text-sm text-gray-600 mt-1">Northern Uganda</p>
                <p className="text-xs text-gray-500 mt-2">680 ha restored</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img src="/images/project3.jpg" className="h-40 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">Brazil Regeneration Zone</h3>
                <p className="text-sm text-gray-600 mt-1">Amazon Basin</p>
                <p className="text-xs text-gray-500 mt-2">3,400 ha monitored</p>
              </div>
            </div>

          </div>
        </div>


        {/* 💡 PURPOSE / STORY */}
        <div className="mt-12 px-6 mb-12">
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Why this platform?</h2>

            <p className="text-gray-700 text-sm leading-relaxed max-w-2xl">
              We combine satellite imagery, machine learning, and local knowledge to
              identify degraded land and support large-scale ecosystem restoration.
              This platform helps researchers, NGOs, and communities monitor land health
              and make informed decisions for sustainable land use.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
