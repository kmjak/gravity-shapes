"use client"

import ModalBackGroundCard from "./cards/ModalBackGroundCard";

export default function CountDownModal({count}:{count:number}):React.ReactElement {
  return (
    <ModalBackGroundCard>
      <div className="bg-cell px-5 py-3 rounded-lg">
        <p className="text-lg">{count}</p>
      </div>
    </ModalBackGroundCard>
  );
}