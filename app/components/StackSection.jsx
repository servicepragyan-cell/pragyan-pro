export default function StackSection({ children, index }) {
  return (
    <section
      className="sticky top-0 h-screen"
      style={{
        zIndex: 10 + index,
      }}
    >
      {children}
    </section>
  );
}
