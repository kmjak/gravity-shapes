"use client"

import ShapeContextValue from "@/types/context/ShapeContext";
import Shape from "@/types/shape/Shape";
import { createContext, useContext, useRef, useState } from "react"

const ShapeContext = createContext<ShapeContextValue | null>(null);

export function ShapeProvider({ children }: { children: React.ReactNode }):React.ReactElement {
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [placedShape, setPlacedShape] = useState<Shape|null>(null);
  const [current_x, setCurrent_x] = useState<number>(8);
  const [current_y, setCurrent_y] = useState<number>(2);
  const color = useRef<string|null>(null);
  const speed = useRef<number|null>(null);
  const contextValue: ShapeContextValue = {
    shapes,
    placedShape,
    current_x,
    current_y,
    color: color.current,
    speed: speed.current,
    setShapes,
    setPlacedShape,
    setCurrent_x,
    setCurrent_y,
    setColor: (newColor:string) => { color.current = newColor },
    setSpeed: (newSpeed:number) => { speed.current = newSpeed },
  };
  
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