"use client"

import ModalBackGround from "./cards/ModalBackGround";
import CountDownModal from "./CountDownModal";

export default function StartModal({count,isStart,handleStartGame}:{count:number,isStart:boolean,handleStartGame:()=>void}) {
  if(!isStart){
    return (
      <ModalBackGround>
        <div className="bg-cell hover:bg-opacity-30 px-5 py-3 rounded-lg cursor-pointer shadow-md shadow-white hover:shadow-neutral-800 transition-all duration-200">
          <p
            className="text-lg"
            onClick={handleStartGame}
          >
            Click to start
          </p>
        </div>
      </ModalBackGround>
    );
  }
  return <CountDownModal count={count} />
}