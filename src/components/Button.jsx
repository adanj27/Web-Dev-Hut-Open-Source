export function Button({ icon, className = '', children, ...props }) {
  const Icon = icon

  return (
    <button
      className={`bg-gradient-to-b from-white to-gray-400 rounded-[50px] block text-black font-medium px-5 py-1 ${className}`}
      {...props}
    >
      <Icon className="inline-block text-[#3D3D3D] w-5 h-5 align-middle -mt-[.1rem] mr-2" />
      {children}
    </button>
  )
}
