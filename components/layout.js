export function Layout({ children, className = ''}) {
  return (
    <div className={`w-full ${className}`}>{children}</div>
  )
}