export function IconButton({ Icon, as = 'button', ...props }) {
  const As = as
  return (
    <As className="child:w-10 child:h-10" {...props}>
      <Icon className="px-2" />
    </As>
  )
}
