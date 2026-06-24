import * as React from "react";

interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export function PageHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_right,hsla(var(--maroon)/0.8),transparent)]" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_left,hsla(var(--gold)/0.5),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32 text-center">
        <p className="eyebrow mb-6">{eyebrow}</p>
        <h1 className="font-display text-5xl lg:text-7xl leading-[0.95] mb-6">{title}</h1>
        {subtitle && (
          <p className="max-w-2xl mx-auto text-lg text-primary-foreground/75 leading-relaxed">{subtitle}</p>
        )}
        <div className="rule-gold w-24 mx-auto mt-10" />
      </div>
    </section>
  );
}
