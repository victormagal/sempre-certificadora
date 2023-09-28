'use client';

export default function HeroPage({
  bgColor,
  children,
  endGradient,
  gradient,
  initGradient
}) {
  return (
    <section
      style={{
        background: `url(../../../../bg-pattern.png) center right no-repeat, ${
          gradient
            ? `linear-gradient(270deg, ${initGradient} 1.41%, ${endGradient} 50%)`
            : bgColor
        }`
      }}
      className="relative flex flex-col justify-center"
    >
      <div className="container grid grid-cols-4 lg:grid-cols-12 gap-6 items-center mx-auto px-6">
        {children}
      </div>
    </section>
  );
}
