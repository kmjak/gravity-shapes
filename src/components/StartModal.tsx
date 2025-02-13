"use client"

import CountDownModal from "./CountDownModal";

export default function StartModal({count,isStart,handleStartGame}:{count:number,isStart:boolean,handleStartGame:()=>void}) {
  if(!isStart){
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-cell hover:bg-opacity-30 px-5 py-3 rounded-lg cursor-pointer shadow-md shadow-white hover:shadow-neutral-800 transition-all duration-200">
          <p
            className="text-lg"
            onClick={handleStartGame}
          >
            Click to start
          </p>
        </div>
      </div>
    );
  }
  return <CountDownModal count={count} />
}