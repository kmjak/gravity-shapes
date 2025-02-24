export default async function fallShapeUseCase({setCurrentY}:{setCurrentY:(y: number | ((prev: number) => number)) => void}):Promise<void> {
  setCurrentY((prev:number) => prev + 1);
}