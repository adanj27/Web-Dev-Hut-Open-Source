export function Button({
  icon,
  as = 'button',
  className = '',
  children,
  ...props
}) {
  const Icon = icon
  const As = as

  return (
    <As
      className={`bg-gradient-to-b from-[#FFFFFF] to-[#909090] rounded-[50px] inline-block text-black font-medium px-5 py-2 text-ellipsis overflow-hidden ${className}`}
      {...props}
    >
      {Icon && (
        <Icon className="inline-block text-[#3D3D3D] w-5 h-5 align-middle -mt-[.1rem] mr-2" />
      )}
      {children}
    </As>
  )
}
