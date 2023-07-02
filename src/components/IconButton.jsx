export function IconButton({ icon, as = 'button', className = '', ...props }) {
  const As = as
  const Icon = icon

  return (
    <As className={`child:w-10 child:h-10 ${className}`} {...props}>
      {icon && <Icon className="px-2 text-white transition" />}
    </As>
  )
}
