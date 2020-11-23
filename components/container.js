export function Container({ children, className = ''}) {
  return (
    <div className={`w-full mx-auto max-w-xl px-4 md:px-6 ${className}`}>{children}</div>
  )
}