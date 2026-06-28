import { Slider } from "@/components/ui/slider";

interface InterventionSliderProps {
  label: string;
  value: number[];
  onChange: (value: number[]) => void;
}

export default function InterventionSlider({
  label,
  value,
  onChange,
}: InterventionSliderProps) {
  return (
    <div className="mt-6 space-y-2">
      <div className="flex justify-between items-center">
        <label className="font-medium">{label}</label>

        <span className="text-sm font-semibold">
          {value[0]}%
        </span>
      </div>

      <Slider
        value={value}
        onValueChange={onChange}
        max={100}
        step={1}
      />
    </div>
  );
}