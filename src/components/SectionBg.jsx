export function SectionBg({ image, className = '' }) {
  return (
    <div
      className={`absolute top-0 left-0 w-screen min-w-[2000px] h-auto ${className}`}
    >
      <img src={image} alt="" className="w-full h-full" />
    </div>
  )
}
