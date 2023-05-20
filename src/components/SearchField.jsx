import { RiSearchLine } from 'react-icons/ri'

export function SearchField({ className = '', ...props }) {
  return (
    <div
      className={`bg-white/50 inline-block rounded-[50px] h-8 max-w-[150px] relative ${className}`}
      {...props}
    >
      <RiSearchLine className="absolute top-2/4 left-2 -translate-y-2/4 w-6 h-6 text-gray-300" />
      <input
        type="text"
        placeholder="Buscar..."
        className="bg-transparent placeholder:text-[#f1f1f1] text-white text-sm rounded-[50px] block w-full h-full px-10 focus-within:outline-none"
      />
    </div>
  )
}
