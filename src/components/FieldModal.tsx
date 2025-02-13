"use client"

import defaultField from "@/lib/conf/fields.conf";
import Shape from "@/types/shape/shape";
import { useState } from "react";
import SelectShapeModal from "./SelectShapeModal";

export default function FieldModal({shapes}:{shapes:Shape[][]}) {
  const [selectedShape, setSelectedShape] = useState<Shape[]>([]);
  const [targetShapeIdx, setTargetShapeIdx] = useState<number>(0);

  const handleSelectShape = async (idx:number):Promise<void> => {
    setSelectedShape([...selectedShape, shapes[targetShapeIdx][idx]]);
    setTargetShapeIdx(targetShapeIdx + 1);
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