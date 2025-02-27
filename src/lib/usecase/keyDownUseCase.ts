import Shape from "@/types/shape/Shape";
import isPossibleMoveUseCase from "./isPossibleMoveUseCase";

export default function handleKeyDown ({event,shape,currentX,currentY,setCurrentX,setCurrentY}:{event: KeyboardEvent,shape:Shape,currentX:number,currentY:number,setCurrentX: (x: number | ((prev: number) => number)) => void,setCurrentY: (y: number | ((prev: number) => number)) => void}) {
  const pressedKey = event.key;
  switch (pressedKey) {
    case "a":
      if(!isPossibleMoveUseCase({shape,currentX:currentX-1,currentY})){
        return;
      }
      setCurrentX((prev:number) => prev - 1);
      return;
    case "d":
      if(!isPossibleMoveUseCase({shape,currentX:currentX+1,currentY})){
        return;
      }
      setCurrentX((prev:number) => prev + 1);
      return;
    case "s":
      if(!isPossibleMoveUseCase({shape,currentX,currentY:currentY+1})){
        return;
      }
      setCurrentY((prev:number) => prev + 1);
      return;
  }
};