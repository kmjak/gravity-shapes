import fallShapeUseCase from "./fallShapeUseCase";

interface GameLogicUseCaseProps {
  isGameOver:boolean,
  speed:number|null,
  setCurrentY: (y: number | ((prev: number) => number)) => void;
}

export default async function gameLogicUseCase({isGameOver,speed,setCurrentY}:GameLogicUseCaseProps):Promise<void> {
  while(!isGameOver) {
    await Promise.all([
      new Promise((resolve) => setTimeout(resolve, speed!)),
      fallShapeUseCase({setCurrentY})
    ]);
  }
}