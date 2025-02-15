import PlacedShape from "@/types/shape/PlacedShape";
import Shape from "@/types/shape/Shape";

interface ShapeContextValue {
  shapes: Shape[];
  placedShape:PlacedShape|null;
  setShapes: (shapes: Shape[]) => void;
  setPlacedShape: (shape: PlacedShape) => void;
}

export default ShapeContextValue