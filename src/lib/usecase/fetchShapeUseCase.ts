"use client"

import Shape from "@/types/shape/Shape"
import generateRandomNumber from "@/utils/generateRandomNumber"

export default async function fetchShapeUseCase({candidateShapes}:{candidateShapes:Shape[][]}):Promise<Shape> {
  const fetchShapeNumber = await generateRandomNumber({min:0,max:4});
  return candidateShapes[fetchShapeNumber][0];
}