"use client"

import ModalBackGroundCard from "./cards/ModalBackGroundCard";
import CountDownModal from "./CountDownModal";

export default function StartModal({count,isStart,handleStartGame}:{count:number,isStart:boolean,handleStartGame:()=>void}):React.ReactElement {
  if(!isStart){
    return (
      <ModalBackGroundCard>
        <div
          className="bg-cell hover:bg-opacity-30 px-5 py-3 rounded-lg cursor-pointer transition-all duration-200"
          onClick={handleStartGame}
        >
          <p
            className="text-lg"
          >
            Click to start
          </p>
        </div>
      </ModalBackGroundCard>
    );
  }
  return <CountDownModal count={count} />
}