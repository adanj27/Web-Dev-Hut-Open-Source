export function FilterButton({
  icon,
  as = 'button',
  className = '',
  onClick,
  children,
  ...props
}) {
  const As = as
  const ACTIVE_CLASS = 'active'

  const handleClick = (e) => {
    if (e.target.classList.contains(ACTIVE_CLASS)) {
      e.target.classList.remove(ACTIVE_CLASS)
    } else {
      resetClasses()
      e.target.classList.add(ACTIVE_CLASS)
    }
    onClick()
  }

  const resetClasses = () => {
    document.querySelectorAll('.filter-button').forEach((btn) => {
      btn.classList.remove(ACTIVE_CLASS)
    })
  }

  return (
    <As
      className={`filter-button ${className}`}
      {...props}
      onClick={handleClick}
    >
      {children}
    </As>
  )
}
