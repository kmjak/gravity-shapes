import { useShapeContext } from "@/context/shapeContext";
import defaultField from "@/lib/conf/fields.conf";
import handleKeyDown from "@/lib/usecase/keyDownUseCase";
import { useEffect } from "react";

export default function FieldPreview({isGameOver}:{isGameOver:boolean}) {
  const {
    placedShape,
    currentX,
    currentY,
    color,
    setCurrentX,
    setCurrentY,
  } = useShapeContext();

  useEffect(() => {
    if(isGameOver) return;
    document.addEventListener("keydown", (event) => handleKeyDown({ event, setCurrentX, setCurrentY }));
    return () => {
      document.removeEventListener("keydown", (event) => handleKeyDown({ event, setCurrentX, setCurrentY }));
    };
  }, [handleKeyDown]);

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