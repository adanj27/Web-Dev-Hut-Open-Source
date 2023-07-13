const sizes = {
  xs: 'text-lg sm:text-xl font-medium max-w-xs',
  sm: 'text-xl sm:text-2xl font-medium max-w-xs',
  md: 'text-3xl sm:text-4xl font-semibold max-w-sm',
  lg: 'text-3xl sm:text-5xl font-semibold max-w-sm',
  xl: 'text-5xl sm:text-6xl font-bold max-w-xs sm:max-w-md',
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
      className={`${sizes[size]} first-letter:capitalize text-[#f1f1f1] dark:text-[#f1f1f1] ${className}`}
      {...props}
    >
      {children}
    </As>
  )
}
