import Shape from "./shape";

interface PlacedShape {
  shape:Shape;
  color:string;
  current_x:number;
  current_y:number;
}

export default PlacedShape;