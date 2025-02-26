export default async function handleKeyDown ({event,setCurrentX,setCurrentY}:{event: KeyboardEvent,setCurrentX: (x: number | ((prev: number) => number)) => void,setCurrentY: (y: number | ((prev: number) => number)) => void}):Promise<void> {
  const pressedKey = event.key;
  switch (pressedKey) {
    case "a":
      setCurrentX((prev:number) => prev - 1);
      break;
    case "d":
      setCurrentX((prev:number) => prev + 1);
      break;
    case "s":
      setCurrentY((prev:number) => prev + 1);
      break;
  }
};