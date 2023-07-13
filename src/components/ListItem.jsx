export function ListItem({ className = '', ...props }) {
  return <li className={`list-disc ml-4 ${className}`} {...props} />
}
