"use client"

import ModalBackGround from "./cards/ModalBackGround";

export default function CountDownModal({count}:{count:number}) {
  return (
    <ModalBackGround>
      <div className="bg-cell px-5 py-3 rounded-lg">
        <p className="text-lg">{count}</p>
      </div>
    </ModalBackGround>
  );
}