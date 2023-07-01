export function FilterButton({
  icon,
  as = 'button',
  className = '',
  children,
  ...props
}) {
  const As = as

  return (
    <As className={`filter-button ${className}`} {...props}>
      {children}
    </As>
  )
}
