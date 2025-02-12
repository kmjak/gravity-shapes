import { shapeSize } from "@/lib/conf/shape.conf";
import generateRandomNumber from "./generateRandomNumber";
import Shape from "@/types/shape/shape";
import Block from "@/types/block/block";
import shuffleArray from "./shuffleArray";
import Direction from "@/types/direction/direction";
import directions from "@/lib/conf/directions";

export default async function createShape({id}:{id:number}):Promise<Shape> {
  const shape:Shape = {
    id,
    blocks: [{x:0,y:0}],
  };
  const size:number = await generateRandomNumber({min:shapeSize.min, max:shapeSize.max});
  for(let i:number = 1; i < size; i++) {
    const adjacentBlock:number = await generateRandomNumber({min:0, max:shape.blocks.length - 1});
    const block:Block = shape.blocks[adjacentBlock];
    const directionIdx:number[] = await shuffleArray([0,1,2,3]);
    for(let j:number = 0; j < directionIdx.length; j++) {
      const direction:Direction = directions[directionIdx[j]];
      const newBlock:Block = {x:block.x + direction.x, y:block.y + direction.y};
      const isUsed:boolean = shape.blocks.some((block:Block) => block.x === newBlock.x && block.y === newBlock.y);
      if(!isUsed){
        shape.blocks.push(newBlock);
        break;
      }
    }
    if(shape.blocks.length === i) {
      i--;
    }
  }
  return shape;
}