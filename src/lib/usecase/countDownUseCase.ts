"use client"

export default async function countDownUseCase({start,setCount}:{start:number,setCount:(prop:number)=>void}):Promise<void> {
  for (let i: number = start; i > 0; i--) {
    setCount(i);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  setCount(0);
}