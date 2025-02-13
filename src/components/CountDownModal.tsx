"use client"

export default function CountDownModal({count}:{count:number}) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-cell px-5 py-3 rounded-lg">
        <p className="text-lg">{count}</p>
      </div>
    </div>
  );
}