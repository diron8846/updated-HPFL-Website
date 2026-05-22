import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Hope For Life Ministry" },
      { name: "description", content: "Upcoming events, gatherings, and special services at Hope For Life Ministry." },
      { property: "og:title", content: "Events — Hope For Life Ministry" },
      { property: "og:description", content: "Find your next gathering with our church family." },
    ],
  }),
  component: Events,
});

const events = [
  { month: "May", day: "24", title: "Pentecost Sunday Celebration", time: "9:00 & 11:00 AM", location: "Main Sanctuary", category: "Worship", desc: "A special service marking the gift of the Holy Spirit with combined choir and communion." },
  { month: "May", day: "30", title: "Men's Breakfast & Prayer", time: "7:30 AM", location: "Fellowship Hall", category: "Community", desc: "Hot breakfast, real conversation, and prayer for the men of our church." },
  { month: "Jun", day: "06", title: "Baptism Sunday", time: "11:00 AM", location: "Main Sanctuary", category: "Sacrament", desc: "Celebrate with those publicly identifying with Christ through the waters of baptism." },
  { month: "Jun", day: "13", title: "Youth Summer Kickoff Night", time: "6:00 PM", location: "Youth Center", category: "Next Gen", desc: "Games, worship, and the start of our 8-week summer series for grades 6–12." },
  { month: "Jun", day: "20", title: "Marriage Enrichment Workshop", time: "9:00 AM – 3:00 PM", location: "Fellowship Hall", category: "Family", desc: "A one-day workshop for couples in any season, led by Pastor David & Esther." },
  { month: "Jul", day: "04", title: "Community Outreach Day", time: "10:00 AM", location: "Downtown Springfield", category: "Mission", desc: "Serving meals, hosting kids' activities, and sharing Christ's love with our city." },
];

function Events() {
  return (
    <>
      <PageHeader eyebrow="What's Coming" title="Gather with us." subtitle="From weekly rhythms to once-a-year celebrations, here's where our church family is going next." />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid gap-8">
            {events.map((e) => (
              <article key={e.title} className="bg-card grid md:grid-cols-[140px_1fr_auto] gap-8 md:gap-10 p-8 md:p-10 rounded-3xl border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="text-center md:border-r md:border-border/50 md:pr-10 flex md:block items-center justify-center gap-4">
                  <div className="font-display text-5xl md:text-6xl text-primary leading-none group-hover:text-gold transition-colors">{e.day}</div>
                  <div className="eyebrow !text-accent md:mt-2">{e.month}</div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    <p className="eyebrow text-[0.65rem]">{e.category}</p>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-primary mb-3 group-hover:text-accent transition-colors">{e.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">{e.desc}</p>
                  <div className="flex flex-wrap gap-5 text-xs uppercase tracking-widest text-muted-foreground font-medium">
                    <span className="inline-flex items-center gap-1.5 bg-secondary/50 px-3 py-1.5 rounded-full"><Clock size={13} className="text-gold" /> {e.time}</span>
                    <span className="inline-flex items-center gap-1.5 bg-secondary/50 px-3 py-1.5 rounded-full"><MapPin size={13} className="text-gold" /> {e.location}</span>
                  </div>
                </div>
                <div className="self-center">
                  <Button variant="elevated" className="rounded-xl shadow-sm hover:shadow-md px-6 py-3.5 h-auto">
                    Details <ArrowRight size={14} />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-20 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <Calendar className="mx-auto text-gold mb-6" size={36} strokeWidth={1.5} />
          <h2 className="font-display text-3xl md:text-5xl mb-4">Weekly rhythms.</h2>
          <p className="text-primary-foreground/80 mb-8">Sunday Worship 9 & 11 AM · Wednesday Bible Study 7 PM · Friday Prayer 6:30 PM</p>
        </div>
      </section>
    </>
  );
}
