"use client"

import defaultField from "@/lib/conf/fields.conf";
import Shape from "@/types/shape/Shape";
import { useState } from "react";
import SelectShapeModal from "./SelectShapeModal";
import StartModal from "./StartModal";
import countDownUseCase from "@/lib/usecase/countDownUseCase";
import fetchShapeUseCase from "@/lib/usecase/fetchShapeUseCase";
import { useShapeContext } from "@/context/shapeContext";
import gameLogicUseCase from "@/lib/usecase/gameLogicUseCase";

export default function FieldModal({candidateShapes}:{candidateShapes:Shape[][]}):React.ReactElement {
  const [targetShapeIdx, setTargetShapeIdx] = useState<number>(0);
  const [isStart, setIsStart] = useState<boolean>(false);
  const [count, setCount] = useState<number>(3);

  const {
    shapes,
    placedShape,
    currentX,
    currentY,
    color,
    speed,
    setShapes,
    setPlacedShape,
    setCurrentX,
    setCurrentY,
    setColor,
    setSpeed,
  } = useShapeContext();

  const handleSelectShape = async (idx:number):Promise<void> => {
    setShapes([...shapes, candidateShapes[targetShapeIdx][idx]]);
    setTargetShapeIdx(targetShapeIdx + 1);
  }

  const handleStartGame = async ():Promise<void> =>{
    setIsStart(true);
    const [, newShape] = await Promise.all([
      countDownUseCase({start: 3, setCount}),
      fetchShapeUseCase({candidateShapes})
    ]);
    setPlacedShape(newShape);
    setColor(`bg-block${newShape.id}`);
    setCurrentX(8);
    setCurrentY(2);
    setSpeed(500);
    await gameLogicUseCase({
      isGameOver:false,
      speed,
      setCurrentY,
    });
  }

  if (targetShapeIdx < 5){
    return (
      <SelectShapeModal
        targetShapeIdx={targetShapeIdx}
        candidateShapes={candidateShapes}
        handleSelectShape={handleSelectShape}
      />
    )
  }

  if(count > 0){
    return <StartModal count={count} isStart={isStart} handleStartGame={handleStartGame} />
  }


  return (
    <>
      {defaultField.map((row:number[], y:number) => (
        <div key={y} className="flex">
          {row.map((cell:number, x:number) => (
            <div
              key={x}
              className={`w-6 h-6 border border-black ${
                cell === -1
                ? "bg-wall"
                : (placedShape && placedShape.blocks.some((block) => block.x+currentX === x && block.y+currentY === y))
                ? color
                : "bg-cell"
              }`}
            />
          ))}
        </div>
      ))}
    </>
  )
}