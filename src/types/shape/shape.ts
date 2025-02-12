import Block from "@/types/block/block";

interface Shape {
  id: number;
  blocks: Block[]
  current_x: number;
  current_y: number;
  color: string;
}

export default Shape;