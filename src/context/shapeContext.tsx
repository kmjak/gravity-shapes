"use client"

import ShapeContextValue from "@/types/context/ShapeContext";
import PlacedShape from "@/types/shape/PlacedShape";
import Shape from "@/types/shape/Shape";
import { createContext, useContext, useState } from "react"

const ShapeContext = createContext<ShapeContextValue | null>(null);

export function ShapeProvider({ children }: { children: React.ReactNode }):React.ReactElement {
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [placedShape, setPlacedShape] = useState<PlacedShape|null>(null);
  const contextValue: ShapeContextValue = {
    shapes,
    placedShape,
    setShapes,
    setPlacedShape,
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