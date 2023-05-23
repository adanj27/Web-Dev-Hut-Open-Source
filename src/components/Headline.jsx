const sizes = {
  sm: 'text-xl sm:text-2xl font-medium',
  md: 'text-3xl sm:text-4xl font-semibold',
  lg: 'text-3xl sm:text-5xl font-semibold',
  xl: 'text-5xl sm:text-6xl font-bold',
}

export function Headline({
  as = 'h2',
  className = '',
  size = 'md',
  children,
  ...props
}) {
  const As = as

  return (
    <As
      className={`${sizes[size]} max-w-xs capitalize text-[#f1f1f1] dark:text-[#f1f1f1] ${className}`}
      {...props}
    >
      {children}
    </As>
  )
}
