"use client"

import ShapeContextValue from "@/types/context/ShapeContext";
import Shape from "@/types/shape/Shape";
import { createContext, useContext, useMemo, useRef, useState } from "react"

const ShapeContext = createContext<ShapeContextValue | null>(null);

export function ShapeProvider({ children }: { children: React.ReactNode }):React.ReactElement {
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [placedShape, setPlacedShape] = useState<Shape|null>(null);
  const [currentX, setCurrentX] = useState<number>(8);
  const [currentY, setCurrentY] = useState<number>(2);
  const color = useRef<string|null>(null);
  const speed = useRef<number>(500);
  const contextValue: ShapeContextValue = useMemo(() => ({
    shapes,
    placedShape,
    currentX,
    currentY,
    color: color.current,
    speed: speed.current,
    setShapes,
    setPlacedShape,
    setCurrentX,
    setCurrentY,
    setColor: (newColor:string) => { color.current = newColor },
    setSpeed: (newSpeed:number) => { speed.current = newSpeed },
  }), [shapes, placedShape, currentX, currentY, color, speed]);

  return (
    <ShapeContext.Provider value={contextValue}>
      {children}
    </ShapeContext.Provider>
  );
}
export function useShapeContext():ShapeContextValue {
  const context:ShapeContextValue|null = useContext(ShapeContext);
  if (!context) {
    throw new Error("useShapeContext must be used within a ShapeProvider");
  }
  return context;
}