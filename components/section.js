import { Container } from "./container";

export function Section({ children, className = ''}) {
  return (
    <div
      className={`w-full py-8 md:py-12 lg:py-14 ${className}`}
    >
      <Container>{children}</Container>
    </div>
  );
}