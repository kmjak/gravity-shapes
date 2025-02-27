import Shape from "@/types/shape/Shape";
import { defaultField, fieldHeight, fieldWidth } from "../conf/fields.conf";
import Block from "@/types/block/Block";

export default function isPossibleMoveUseCase({shape,currentX,currentY}:{shape:Shape,currentX:number,currentY:number}) {
  const field:number[][]=defaultField;
  const blocks:Block[]=shape.blocks;
  return blocks.every((block:Block)=>block.x+currentX>=0&&block.x+currentX<fieldWidth&&block.y+currentY>=0&&block.y+currentY<fieldHeight&&field[block.y+currentY][block.x+currentX]!=-1);
}