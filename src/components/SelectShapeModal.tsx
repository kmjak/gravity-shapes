import Block from "@/types/block/block";
import Shape from "@/types/shape/shape";

interface SelectShapeModalProps {
  targetShapeIdx:number,
  shapes:Shape[][],
  handleSelectShape:(idx:number) => void
}

export default function SelectShapeModal({
  targetShapeIdx,
  shapes,
  handleSelectShape
}:SelectShapeModalProps) {
  return (
    <section>
      <div className="text-white text-center py-4">
        <h2 className="text-2xl font-bold">Shape {targetShapeIdx+1}</h2>
        <p className="text-lg font-semibold">どちらのshapeを使用しますか？</p>
      </div>
      <div className="flex gap-5">
        {shapes[targetShapeIdx].map((shape:Shape, idx:number) => (
          <div
            key={idx}
            className="flex flex-col border border-white cursor-pointer hover:border-green-600 transition-colors duration-300"
            onClick={() => handleSelectShape(idx)}
          >
            {Array.from({ length: 15 }, (_:number,y:number) => y - 7).map((y:number) => (
              <div key={y} className="flex">
                {Array.from({length: 15}, (_:number,x:number) => x - 7).map((x) => (
                  <div
                    key={x}
                    className={`w-6 h-6 border border-black ${
                      shape.blocks.some((block:Block) => block.x === x && block.y === y)
                        ? "bg-wall"
                        : "bg-cell"
                    }`}
                  />
                ))}
            </div>
          ))}
          </div>
        ))}
      </div>
    </section>
  )
}