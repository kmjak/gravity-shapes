import generateRandomNumber from "./generateRandomNumber";

export default async function shuffleArray(array: number[]): Promise<number[]> {
  const shuffled:number[] = [...array];
  for (let i:number = shuffled.length - 1; i > 0; i--) {
    const j:number = await generateRandomNumber({min: 0, max: i});
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}