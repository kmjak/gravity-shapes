"use client"

import defaultField from "@/lib/conf/fields.conf";
import Shape from "@/types/shape/Shape";
import { useState } from "react";
import SelectShapeModal from "./SelectShapeModal";
import StartModal from "./StartModal";
import countDownUseCase from "@/lib/usecase/countDownUseCase";
import PlacedShape from "@/types/shape/PlacedShape";
import fetchShapeUseCase from "@/lib/usecase/fetchShapeUseCase";

export default function FieldModal({shapes}:{shapes:Shape[][]}) {
  const [selectedShape, setSelectedShape] = useState<Shape[]>([]);
  const [targetShapeIdx, setTargetShapeIdx] = useState<number>(0);
  const [isStart, setIsStart] = useState<boolean>(false);
  const [count, setCount] = useState<number>(3);
  const [placedShape, setPlacedShape] = useState<PlacedShape|null>(null);

  const handleSelectShape = async (idx:number):Promise<void> => {
    setSelectedShape([...selectedShape, shapes[targetShapeIdx][idx]]);
    setTargetShapeIdx(targetShapeIdx + 1);
  }

  const handleStartGame = async () =>{
    setIsStart(true);
    const [, newShape] = await Promise.all([
      countDownUseCase({start: 3, setCount}),
      fetchShapeUseCase({shapes})
    ]);
    const newPlacedShape:PlacedShape={
      shape:newShape,
      color:`block${newShape.id+1}`,
      current_x:8,
      current_y:4,
    }
    setPlacedShape(newPlacedShape);
  }

  if (targetShapeIdx < 5){
    return (
      <SelectShapeModal
        targetShapeIdx={targetShapeIdx}
        shapes={shapes}
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
                : (placedShape && placedShape.shape.blocks.some((block) => block.x+placedShape.current_x === x && block.y+placedShape.current_y === y))
                ? placedShape.color
                : "bg-cell"
              }`}
            />
          ))}
        </div>
      ))}
    </>
  )
}