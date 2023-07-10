export function Paragraph({ as = 'p', className = '', children, ...props }) {
  const As = as
  return (
    <As
      className={`text-[#f1f1f1] text-base sm:text-sm ${className}`}
      {...props}
    >
      {children}
    </As>
  )
}
