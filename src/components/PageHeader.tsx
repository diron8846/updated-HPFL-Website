import * as React from "react";

interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export function PageHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32 text-center">
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
