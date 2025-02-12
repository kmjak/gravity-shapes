import { Metadata } from "next";
import defaultField from "@/lib/conf/fields.conf";

export const metadata: Metadata = {
  title: 'game',
};

export default function GamePage() {
  return (
    <main className="flex flex-col items-center justify-center h-full bg-black">
      {defaultField.map((row, y) => (
        <div key={y} className="flex">
          {row.map((cell, x) => (
            <div
              key={x}
              className={`w-6 h-6 border border-black ${
                cell === -1 ? "bg-wall" : "bg-white"
              }`}
            />
          ))}
        </div>
      ))}
    </main>
  );
}