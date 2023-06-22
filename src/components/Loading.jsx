import ReactLoading from 'react-loading'

export function Loading({ className = '', ...props }) {
  return (
    <ReactLoading
      type="cylon"
      color="#fff"
      className={`mx-auto ${className}`}
      {...props}
    />
  )
}
