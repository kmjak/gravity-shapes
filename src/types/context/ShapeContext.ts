import Shape from "@/types/shape/Shape";

interface ShapeContextValue {
  shapes: Shape[];
  placedShape:Shape|null;
  current_x:number;
  current_y:number;
  color:string|null;
  speed:number|null;
  setShapes: (shapes: Shape[]) => void;
  setPlacedShape: (shape: Shape) => void;
  setCurrent_x: (current_x: number) => void;
  setCurrent_y: (current_y: number) => void;
  setColor: (color: string) => void;
  setSpeed: (speed: number) => void;
}

export default ShapeContextValue