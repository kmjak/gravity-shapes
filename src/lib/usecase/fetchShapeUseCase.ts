"use client"

import Shape from "@/types/shape/shape"
import generateRandomNumber from "@/utils/generateRandomNumber"

export default async function fetchShapeUseCase({shapes}:{shapes:Shape[][]}):Promise<Shape> {
  const fetchShapeNumber = await generateRandomNumber({min:0,max:4});
  return shapes[fetchShapeNumber][0];
}