export default function ModalBackGroundCard({children}:{children:React.ReactNode}) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      {children}
    </div>
  );
}