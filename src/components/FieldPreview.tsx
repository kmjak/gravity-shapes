import { useShapeContext } from "@/context/shapeContext";
import { defaultField } from "@/lib/conf/fields.conf";
import handleKeyDown from "@/lib/usecase/keyDownUseCase";
import { useCallback, useEffect } from "react";

export default function FieldPreview({isGameOver}:{isGameOver:boolean}) {
  const {
    placedShape,
    currentX,
    currentY,
    color,
    setCurrentX,
    setCurrentY,
  } = useShapeContext();

  const keyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!placedShape) return;
      handleKeyDown({ event, shape: placedShape, currentX, currentY, setCurrentX, setCurrentY });
    },
    [placedShape, currentX, currentY, setCurrentX, setCurrentY]
  );

  useEffect(() => {
    if (isGameOver || !placedShape) return;
    document.addEventListener("keydown", keyDown);
    return () => {
      document.removeEventListener("keydown", keyDown);
    };
  }, [isGameOver, placedShape, keyDown]);

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