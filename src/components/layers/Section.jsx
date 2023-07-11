export function Section({ children, className = '', ...props }) {
  return (
    <section
      className={`text-[#f1f1f1] my-16 max-w-7xl mx-auto animate-fade-in-to-bottom ${className}`}
      {...props}
    >
      {children}
    </section>
  )
}
