export function IconButton({ Icon, ...props }) {
  return (
    <button className="child:w-10 child:h-10" {...props}>
      <Icon className="px-2" />
    </button>
  )
}
