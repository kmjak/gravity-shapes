"use client"

import Shape from "@/types/shape/Shape";
import { useState } from "react";
import SelectShapeModal from "./SelectShapeModal";
import StartModal from "./StartModal";
import countDownUseCase from "@/lib/usecase/countDownUseCase";
import fetchShapeUseCase from "@/lib/usecase/fetchShapeUseCase";
import { useShapeContext } from "@/context/shapeContext";
import gameLogicUseCase from "@/lib/usecase/gameLogicUseCase";
import FieldPreview from "./FieldPreview";

export default function FieldModal({candidateShapes}:{candidateShapes:Shape[][]}):React.ReactElement {
  const [targetShapeIdx, setTargetShapeIdx] = useState<number>(0);
  const [isStart, setIsStart] = useState<boolean>(false);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [count, setCount] = useState<number>(3);

  const {
    shapes,
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
      isGameOver,
      speed,
      setIsGameOver,
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
    <FieldPreview
      isGameOver={isGameOver}
    />
  )
}