import { CircleMarker, Popup } from "react-leaflet";

type Props = {
  visible: boolean;
};

const trees = [
  {
    id: 1,
    name: "Cacao #001",
    species: "Cacao",
    age: "8 months",
    health: "Healthy",
    carbon: "2.1 kg",
    position: [-8.4505, -75.0498] as [number, number],
  },
  {
    id: 2,
    name: "Cacao #002",
    species: "Cacao",
    age: "8 months",
    health: "Healthy",
    carbon: "2.0 kg",
    position: [-8.4512, -75.0507] as [number, number],
  },
  {
    id: 3,
    name: "Cedro #001",
    species: "Cedro",
    age: "1 year",
    health: "Excellent",
    carbon: "4.8 kg",
    position: [-8.4497, -75.0514] as [number, number],
  },
];

export default function TreesLayer({
  visible,
}: Props) {

  if (!visible) return null;

  return (
    <>
      {trees.map((tree) => (
        <CircleMarker
          key={tree.id}
          center={tree.position}
          radius={6}
          pathOptions={{
            color: "#166534",
            fillColor: "#22c55e",
            fillOpacity: 1,
          }}
        >
          <Popup>
            <div className="space-y-1">
              <h3 className="font-bold">{tree.name}</h3>

              <p>Species: {tree.species}</p>

              <p>Age: {tree.age}</p>

              <p>Health: {tree.health}</p>

              <p>Carbon: {tree.carbon}</p>
            </div>
          </Popup>
        </CircleMarker>
      ))}
    </>
  );
}