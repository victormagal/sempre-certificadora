export default function Container({
  bgColor,
  bgContainer,
  children,
  newClasses
}) {
  return (
    <section style={{ background: bgColor ? bgColor : 'transparent' }}>
      <div
        className={`container grid lg:grid-cols-12 grid-cols-4 gap-6 mx-auto px-4 ${
          newClasses && newClasses
        }`}
        style={{ background: bgContainer ? bgContainer : 'transparent' }}
      >
        {children}
      </div>
    </section>
  );
}
