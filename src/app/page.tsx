import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-full w-full">
      <Link href="/game">
        <p className="text-3xl font-semibold px-3 py-2 border rounded-md border-gray hover:bg-gray hover:text-background hover:border-none transition-colors">Play Gravity Shapes</p>
      </Link>
    </main>
  );
}
