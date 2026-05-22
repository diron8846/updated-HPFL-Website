import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { PlayCircle, Download, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import sermon from "@/assets/sermon.jpg";
import bible from "@/assets/bible-pulpit.jpg";
import hero from "@/assets/hero-worship.jpg";

export const Route = createFileRoute("/sermons")({
  head: () => ({
    meta: [
      { title: "Sermons — Hope For Life Ministry" },
      { name: "description", content: "Watch and listen to the latest sermons from Pastor David Okonkwo and the teaching team at Hope For Life Ministry." },
      { property: "og:title", content: "Sermons — Hope For Life Ministry" },
      { property: "og:description", content: "Weekly Bible-rooted teaching from our pulpit." },
    ],
  }),
  component: Sermons,
});

const sermons = [
  { img: sermon, series: "Anchored", title: "The Hope That Holds the Soul", speaker: "Pastor David Okonkwo", date: "May 12, 2026", scripture: "Hebrews 6:13–20", duration: "42 min" },
  { img: hero, series: "Anchored", title: "When the Storm Doesn't Stop", speaker: "Pastor David Okonkwo", date: "May 5, 2026", scripture: "Mark 4:35–41", duration: "38 min" },
  { img: bible, series: "Anchored", title: "The God Who Cannot Lie", speaker: "Pastor Grace Bennett", date: "Apr 28, 2026", scripture: "Numbers 23:19", duration: "40 min" },
  { img: sermon, series: "Easter", title: "He Is Risen — And So Are We", speaker: "Pastor David Okonkwo", date: "Apr 21, 2026", scripture: "1 Corinthians 15", duration: "47 min" },
  { img: hero, series: "Lent", title: "The Long Road to Joy", speaker: "Pastor Grace Bennett", date: "Apr 14, 2026", scripture: "Luke 24:13–35", duration: "36 min" },
  { img: bible, series: "Lent", title: "Garden of Surrender", speaker: "Pastor David Okonkwo", date: "Apr 7, 2026", scripture: "Matthew 26:36–46", duration: "44 min" },
];

function Sermons() {
  const [featured, ...rest] = sermons;
  return (
    <>
      <PageHeader eyebrow="Teaching Library" title="Sermons from our pulpit." subtitle="Verse-by-verse teaching that meets the realities of everyday life with the timeless truth of God's Word." />

      {/* FEATURED */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="eyebrow mb-8">Latest Message</p>
          <div className="bg-card grid lg:grid-cols-2 gap-12 items-center rounded-[2.5rem] border border-border/50 shadow-xl overflow-hidden p-6 lg:p-10">
            <div className="relative group cursor-pointer overflow-hidden rounded-[2rem] shadow-lg">
              <div className="aspect-video overflow-hidden">
                <img src={featured.img} alt={featured.title} width={1400} height={1000} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                <div className="h-20 w-20 rounded-full bg-gold/90 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <PlayCircle size={40} strokeWidth={1.5} className="text-primary fill-primary/10 ml-1" />
                </div>
              </div>
            </div>
            <div className="px-4 lg:px-0">
              <div className="inline-flex items-center gap-2 eyebrow mb-6 bg-gold/10 px-4 py-1.5 rounded-full border border-gold/20 text-gold">{featured.series} · Series</div>
              <h2 className="font-display text-4xl md:text-5xl text-primary leading-tight mb-6">{featured.title}</h2>
              <p className="text-muted-foreground text-lg mb-8">{featured.speaker} · {featured.date}</p>
              <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-muted-foreground mb-10 border-y border-border/50 py-6">
                <span className="inline-flex items-center gap-2"><strong className="text-primary font-display tracking-wide uppercase text-xs">Scripture</strong> {featured.scripture}</span>
                <span className="inline-flex items-center gap-2"><Clock size={16} className="text-gold" /> {featured.duration}</span>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="sm" className="shadow-md rounded-xl px-6" asChild>
                  <a href="https://www.youtube.com/@dismusmutuku1277" target="_blank" rel="noopener noreferrer">
                    <PlayCircle size={16} /> Watch Message
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="rounded-xl px-6 border-border/60 hover:border-primary/30">
                  <Download size={16} /> Resources
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIBRARY */}
      <section className="bg-secondary/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="eyebrow mb-4">Browse Library</p>
              <h2 className="font-display text-4xl md:text-5xl text-primary">Recent Messages</h2>
            </div>
            <div className="hidden md:flex gap-3">
              {["All", "Anchored", "Easter", "Lent"].map((t, i) => (
                <Button
                  key={t}
                  variant={i === 0 ? "default" : "secondary"}
                  size="sm"
                  className="rounded-full px-6 uppercase tracking-widest text-[10px] font-bold"
                >
                  {t}
                </Button>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {rest.map((s) => (
              <article key={s.title} className="group flex flex-col bg-card rounded-3xl border border-border/50 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2 overflow-hidden">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors flex items-center justify-center">
                    <div className="h-14 w-14 rounded-full bg-gold/90 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500">
                      <PlayCircle size={24} strokeWidth={2} className="text-primary ml-0.5" />
                    </div>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <p className="eyebrow mb-4 text-[0.65rem] text-gold">{s.series}</p>
                  <h3 className="font-display text-2xl text-primary mb-4 leading-snug group-hover:text-gold transition-colors flex-grow">{s.title}</h3>
                  <div className="space-y-2 pt-6 border-t border-border/50">
                    <p className="text-sm font-medium text-foreground/80">{s.speaker}</p>
                    <p className="text-[0.7rem] uppercase tracking-widest text-muted-foreground leading-relaxed">
                      {s.date} <span className="mx-1 text-gold">·</span> {s.scripture} <span className="mx-1 text-gold">·</span> {s.duration}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
