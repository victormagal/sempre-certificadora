export default function Container({
  bgColor,
  bgContainer,
  children,
  newClasses
}) {
  return (
    <section style={{ background: bgColor ? bgColor : 'transparent' }}>
      <div
        className={`container grid grid-cols-4 lg:grid-cols-12 gap-6 mx-auto px-6 ${
          newClasses && newClasses
        }`}
        style={{ background: bgContainer ? bgContainer : 'transparent' }}
      >
        {children}
      </div>
    </section>
  );
}
