import Shape from "@/types/shape/Shape";

interface ShapeContextValue {
  shapes: Shape[];
  placedShape:Shape|null;
  currentX:number;
  currentY:number;
  color:string|null;
  speed:number|null;
  setShapes: (shapes: Shape[]) => void;
  setPlacedShape: (shape: Shape) => void;
  setCurrentX: (x: number | ((prev: number) => number)) => void;
  setCurrentY: (y: number | ((prev: number) => number)) => void;
  setColor: (color: string) => void;
  setSpeed: (speed: number) => void;
}

export default ShapeContextValue