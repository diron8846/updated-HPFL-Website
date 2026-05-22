import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Heart, CreditCard, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import give from "@/assets/give.jpg";

export const Route = createFileRoute("/give")({
  head: () => ({
    meta: [
      { title: "Give — Hope For Life Ministry" },
      { name: "description", content: "Partner with the mission of Hope For Life Ministry through generous, joyful giving." },
      { property: "og:title", content: "Give — Hope For Life Ministry" },
      { property: "og:description", content: "Partner with our mission through generous giving." },
    ],
  }),
  component: Give,
});

function Give() {
  return (
    <>
      <PageHeader eyebrow="Generosity" title="Give with joy." subtitle="Every gift — large or small — fuels worship, discipleship, outreach, and care for those in need. Thank you for partnering with us." />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/5] overflow-hidden">
            <img src={give} alt="Hands giving" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="eyebrow mb-5">Why We Give</p>
            <h2 className="font-display text-4xl md:text-5xl text-primary leading-tight mb-6">"Each of you should give what you have decided in your heart to give."</h2>
            <p className="text-muted-foreground mb-4">— 2 Corinthians 9:7</p>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>Giving is a response to God's overwhelming grace toward us in Christ. We don't give to earn anything; we give because we have been given everything in Jesus.</p>
              <p>Your generosity makes possible our weekly worship, our care for the hurting, our outreach to Springfield, and our support of missionaries around the world.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="eyebrow mb-5">Ways to Give</p>
            <h2 className="font-display text-4xl md:text-5xl text-primary">Three simple paths.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { Icon: CreditCard, t: "Give Online", d: "One-time or recurring gifts via debit, credit, or bank transfer. Secure and instant.", cta: "Give Now" },
              { Icon: Heart, t: "Give In Person", d: "Drop your gift in the offering during any Sunday service. Envelopes provided.", cta: "Service Times" },
              { Icon: Building2, t: "Mail a Check", d: "Hope For Life Ministry · 123 Grace Avenue · Springfield, IL 62701", cta: "Get Address" },
            ].map(({ Icon, t, d, cta }) => (
              <div key={t} className="group relative bg-card p-10 text-center rounded-3xl border border-border/50 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <Icon className="mx-auto text-gold mb-6" size={36} strokeWidth={1.5} />
                <h3 className="font-display text-2xl text-primary mb-3">{t}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8 min-h-[72px]">{d}</p>
                <Button variant="default" className="w-full">
                  {cta} <ArrowRight size={14} />
                </Button>
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gold rounded-t-3xl scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <p className="eyebrow mb-6">Where Your Gift Goes</p>
          <div className="grid grid-cols-3 gap-8 mt-10">
            {[["55%","Ministry & Staff"],["25%","Outreach & Missions"],["20%","Facilities & Operations"]].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-5xl md:text-6xl text-gold">{n}</div>
                <p className="mt-3 text-sm uppercase tracking-widest text-muted-foreground">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
