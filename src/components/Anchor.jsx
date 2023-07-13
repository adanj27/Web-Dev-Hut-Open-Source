export function Anchor({ className = '', ...props }) {
  return (
    <a
      className={`text-indigo-400 no-underline hover:underline ${className}`}
      {...props}
    />
  )
}
