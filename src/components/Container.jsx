export function Container({ children, className = '' }) {
  return (
    <div className={`px-5 max-w-screen-xl mx-auto ${className}`}>
      {children}
    </div>
  )
}
