import { useNavigate } from "react-router-dom";

interface Props {
  assistantMessage: string;
  polygon: any;
  polygonAnalysis: any;
}

export default function RestorationAssistant({
  assistantMessage,
  polygon,
  polygonAnalysis,
}: Props) {

const navigate = useNavigate();
  return (
    <div
      className="
        absolute z-[1000]
        bg-white/95 backdrop-blur-md
        rounded-2xl shadow-2xl
        text-sm p-4
        transition-all duration-300
        left-4 right-4 bottom-4
        md:left-1/2 md:-translate-x-1/2 md:right-auto md:w-[330px] md:w-[360px]
      "
    >
      <div className="font-bold text-lg mb-3">
        🤖 Restoration Assistant
      </div>

      {!polygonAnalysis ? (
        <div className="rounded-xl bg-gray-50 p-4 border">
          <p className="text-sm leading-relaxed text-gray-700">
            {assistantMessage}
          </p>
        </div>
      ) : (
        <div className="space-y-4">

          {/* ============================= */}
          {/* AI SUMMARY                    */}
          {/* ============================= */}

          <div className="rounded-xl bg-green-50 border border-green-200 p-4">

            <div className="space-y-3">

              <p className="text-sm leading-relaxed">
                🤖 <strong>I've finished analyzing your restoration area.</strong>
              </p>

              <p className="text-sm leading-relaxed">
                This area shows <strong>good restoration potential.</strong>
              </p>

              <p className="text-sm text-green-700 font-medium">
                Here are the most important insights I discovered.
              </p>

            </div>

          </div>

          {/* ============================= */}
          {/* VEGETATION                   */}
          {/* ============================= */}

          <div className="rounded-xl bg-green-50 border border-green-100 p-3">

            <div className="font-semibold text-green-700 mb-2">
              🌿 Vegetation Health
            </div>

            <div className="flex justify-between text-sm">
              <span>NDVI</span>
              <strong>{polygonAnalysis.ndvi?.toFixed(2)}</strong>
            </div>

            <div className="flex justify-between text-sm mt-2">
              <span>Status</span>
              <strong>{polygonAnalysis.status}</strong>
            </div>

          </div>

          {/* ============================= */}
          {/* ENVIRONMENT                  */}
          {/* ============================= */}

          <div className="rounded-xl bg-blue-50 border border-blue-100 p-3">

            <div className="font-semibold text-blue-700 mb-2">
              🌍 Site Conditions
            </div>

            <div className="flex justify-between text-sm">
              <span>Ecosystem</span>
              <strong>{polygonAnalysis.ecosystem_type}</strong>
            </div>

            <div className="flex justify-between text-sm mt-2">
              <span>Risk</span>
              <strong>{polygonAnalysis.risk}</strong>
            </div>

          </div>

          {/* ============================= */}
          {/* ACTION                        */}
          {/* ============================= */}

          <button
            onClick={() =>
              navigate("/restoration-brief", {
                state: {
                  polygon,
                  polygonAnalysis,
                },
              })
            }
            className="
              w-full
              bg-green-600
              hover:bg-green-700
              text-white
              py-3
              rounded-xl
              font-semibold
              transition-all
            "
          >
            ✨ Generate My Restoration Plan
          </button>

        </div>
      )}
    </div>
  );
}