import Shape from "./Shape";

interface PlacedShape {
  shape:Shape;
  color:string;
  current_x:number;
  current_y:number;
  speed:number;
}

export default PlacedShape;