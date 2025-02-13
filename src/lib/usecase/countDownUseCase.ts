"use client"

export default async function countDownUseCase({setCount}:{setCount:(prop:number)=>void}):Promise<void> {
  for (let i: number = 3; i > 0; i--) {
    setCount(i);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  setCount(0);
}