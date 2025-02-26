import { useShapeContext } from "@/context/shapeContext";
import defaultField from "@/lib/conf/fields.conf";

export default function FieldPreview() {
  const {
    placedShape,
    currentX,
    currentY,
    color,
  } = useShapeContext();
  return (
    <>
      {defaultField.map((row:number[], y:number) => (
        <div key={y} className="flex">
          {row.map((cell:number, x:number) => (
            <div
              key={x}
              className={`w-6 h-6 border border-black ${
                cell === -1
                ? "bg-wall"
                : (placedShape && placedShape.blocks.some((block) => block.x+currentX === x && block.y+currentY === y))
                ? color
                : "bg-cell"
              }`}
            />
          ))}
        </div>
      ))}
    </>
  )
}