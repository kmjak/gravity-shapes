"use client"

import defaultField from "@/lib/conf/fields.conf";
import Shape from "@/types/shape/shape";
import { useState } from "react";
import SelectShapeModal from "./SelectShapeModal";
import StartModal from "./StartModal";
import countDownUseCase from "@/lib/usecase/countDownUseCase";

export default function FieldModal({shapes}:{shapes:Shape[][]}) {
  const [selectedShape, setSelectedShape] = useState<Shape[]>([]);
  const [targetShapeIdx, setTargetShapeIdx] = useState<number>(0);
  const [isStart, setIsStart] = useState<boolean>(false);
  const [count, setCount] = useState<number>(3);

  const handleSelectShape = async (idx:number):Promise<void> => {
    setSelectedShape([...selectedShape, shapes[targetShapeIdx][idx]]);
    setTargetShapeIdx(targetShapeIdx + 1);
  }

  const handleStartGame = async () =>{
    setIsStart(true);
    await countDownUseCase({start:3,setCount});
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
                : "bg-cell"
              }`}
            />
          ))}
        </div>
      ))}
    </>
  )
}