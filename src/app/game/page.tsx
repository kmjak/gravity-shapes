import { Metadata } from "next";
import FieldModal from "@/components/FieldModal";
import Shape from "@/types/shape/Shape";
import createShape from "@/utils/createShape";

export const metadata: Metadata = {
  title: 'game',
};

export default async function GamePage() {
  const candidateShapes: Shape[][] = [];
  for (let i: number = 0; i < 5; i++) {
    candidateShapes[i] = [];
    for (let j: number = 0; j < 2; j++) {
      const shape: Shape = await createShape({ id: i });
      candidateShapes[i].push(shape);
    }
  }

  return (
    <main className="flex flex-col items-center justify-center h-full">
      <FieldModal candidateShapes={candidateShapes} />
    </main>
  );
}