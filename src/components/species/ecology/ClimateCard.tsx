import {
  CloudRain,
  Droplets,
  Globe2,
  Snowflake,
  Sun,
  Thermometer,
} from "lucide-react";

import EcologyInfoRow from "./EcologyInfoRow";

interface ClimateCardProps {
  profile?: any;
}

export default function ClimateCard({
  profile,
}: ClimateCardProps) {
  const ecology = profile?.ecological_requirements;

  if (!ecology) return null;

  const light = ecology.light;
  const rainfall = ecology.rainfall;
  const temperature = ecology.temperature;
  const humidity = ecology.humidity;

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-8">

      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900">
          Climate & Environment
        </h2>

        <p className="mt-2 text-gray-600">
          Climatic conditions required for healthy establishment and long-term
          development.
        </p>
      </div>

      <EcologyInfoRow
        icon={<Sun size={18} />}
        label="Sun Requirement"
        value={light?.sun_requirement}
      />

      <EcologyInfoRow
        icon={<Sun size={18} />}
        label="Shade Tolerance"
        value={light?.shade_tolerance}
      />

      <EcologyInfoRow
        icon={<Thermometer size={18} />}
        label="Mean Temperature"
        value={
          temperature?.annual_mean_c?.min != null &&
          temperature?.annual_mean_c?.max != null
            ? `${temperature.annual_mean_c.min} – ${temperature.annual_mean_c.max} °C`
            : undefined
        }
      />

      <EcologyInfoRow
        icon={<Snowflake size={18} />}
        label="Absolute Minimum"
        value={
          temperature?.absolute_minimum_c != null
            ? `${temperature.absolute_minimum_c} °C`
            : undefined
        }
      />

      <EcologyInfoRow
        icon={<CloudRain size={18} />}
        label="Annual Rainfall"
        value={
          rainfall?.annual_mm?.min != null &&
          rainfall?.annual_mm?.max != null
            ? `${rainfall.annual_mm.min.toLocaleString()} – ${rainfall.annual_mm.max.toLocaleString()} mm/year`
            : undefined
        }
      />

      <EcologyInfoRow
        icon={<Droplets size={18} />}
        label="Relative Humidity"
        value={
          humidity?.relative_humidity_percent?.min != null &&
          humidity?.relative_humidity_percent?.max != null
            ? `${humidity.relative_humidity_percent.min} – ${humidity.relative_humidity_percent.max}%`
            : undefined
        }
      />

      <EcologyInfoRow
        icon={<Globe2 size={18} />}
        label="Climate Zones"
        value={
          ecology.climate_zones?.length ? (
            <div className="space-y-1">
              {ecology.climate_zones.map((zone: string) => (
                <div key={zone}>{zone}</div>
              ))}
            </div>
          ) : undefined
        }
      />

    </section>
  );
}