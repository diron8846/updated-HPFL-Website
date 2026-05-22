import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import youth from "@/assets/youth.jpg";
import community from "@/assets/community.jpg";
import bible from "@/assets/bible-pulpit.jpg";
import sermon from "@/assets/sermon.jpg";
import hero from "@/assets/hero-worship.jpg";
import give from "@/assets/give.jpg";

export const Route = createFileRoute("/ministries")({
  head: () => ({
    meta: [
      { title: "Ministries — Hope For Life Ministry" },
      { name: "description", content: "Find your place to belong, grow, and serve. Explore the ministries of Hope For Life Ministry." },
      { property: "og:title", content: "Ministries — Hope For Life Ministry" },
      { property: "og:description", content: "Find your place to belong, grow, and serve." },
    ],
  }),
  component: Ministries,
});

const ministries = [
  { img: youth, t: "Kids", tag: "Birth – 5th Grade", d: "A safe, joy-filled environment where children encounter Jesus through Bible stories, worship and play." },
  { img: hero, t: "Youth", tag: "6th – 12th Grade", d: "Wednesday nights and Sunday groups helping students build a faith that lasts." },
  { img: community, t: "Small Groups", tag: "All Ages", d: "Doing life together in homes around the city — studying scripture, praying, and sharing meals." },
  { img: bible, t: "Men's Ministry", tag: "Brotherhood", d: "Breakfast gatherings, retreats, and discipleship for men in every season of life." },
  { img: sermon, t: "Women's Ministry", tag: "Sisterhood", d: "Bible studies, mentoring, and friendship rooted in the gospel of grace." },
  { img: give, t: "Outreach", tag: "City & World", d: "Serving Springfield's vulnerable and partnering with missionaries around the world." },
];

function Ministries() {
  return (
    <>
      <PageHeader eyebrow="Belong · Grow · Serve" title="Find your place." subtitle="The Christian life was never meant to be lived alone. Step into a ministry that fits your season and join a community of faith." />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ministries.map((m) => (
            <article key={m.t} className="group h-full">
              <div className="relative h-full flex flex-col bg-card rounded-3xl border border-border/50 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2 overflow-hidden p-4 pb-8">
                <div className="aspect-[16/10] overflow-hidden rounded-2xl mb-6 shadow-inner">
                  <img src={m.img} alt={m.t} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                </div>
                <div className="px-4 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    <p className="eyebrow text-[0.65rem]">{m.tag}</p>
                  </div>
                  <h3 className="font-display text-3xl text-primary mb-4 group-hover:text-gold transition-colors">{m.t}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">{m.d}</p>
                  <Link to="/contact" className="group/btn text-sm font-semibold uppercase tracking-widest text-primary inline-flex items-center gap-2 hover:text-gold transition-colors">
                    Get Involved <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gold/10 group-hover:bg-gold transition-colors" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-20 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <p className="eyebrow mb-6">Can't Find Your Fit?</p>
          <h2 className="font-display text-3xl md:text-5xl text-primary mb-6">Let's start a conversation.</h2>
          <Button size="lg" asChild>
            <Link to="/contact">Talk to a Pastor <ArrowRight size={16} /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
