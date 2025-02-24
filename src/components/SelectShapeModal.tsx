import Block from "@/types/block/Block";
import Shape from "@/types/shape/Shape";

interface SelectShapeModalProps {
  targetShapeIdx:number,
  candidateShapes:Shape[][],
  handleSelectShape:(idx:number) => void
}

export default function SelectShapeModal({
  targetShapeIdx,
  candidateShapes,
  handleSelectShape
}:SelectShapeModalProps):React.ReactElement {
  return (
    <section>
      <div className="text-white text-center py-4">
        <h2 className="text-2xl font-bold">Shape {targetShapeIdx+1}</h2>
        <p className="text-lg font-semibold">どちらのshapeを使用しますか？</p>
      </div>
      <div className="flex gap-5">
        {candidateShapes[targetShapeIdx].map((shape:Shape, idx:number) => (
          <div
            key={idx}
            className="flex flex-col border border-white cursor-pointer hover:border-green-600 transition-colors duration-300"
            onClick={() => handleSelectShape(idx)}
          >
            {Array.from({ length: 7 }, (_:number,y:number) => y - 3).map((y:number) => (
              <div key={y} className="flex">
                {Array.from({length: 7}, (_:number,x:number) => x - 3).map((x) => (
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