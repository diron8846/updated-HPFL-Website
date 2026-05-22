   import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Heart, PlayCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero-worship.jpg";
import bible from "@/assets/bible-pulpit.jpg";
import community from "@/assets/community.jpg";
import sermon from "@/assets/sermon.jpg";
import youth from "@/assets/youth.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hope For Life Ministry — Welcome Home" },
      { name: "description", content: "A Christ-centered church in Springfield. Sunday worship at 9 & 11 AM. Find belonging, hope and purpose at Hope For Life Ministry." },
      { property: "og:title", content: "Hope For Life Ministry" },
      { property: "og:description", content: "A Christ-centered community of faith, hope and love." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate min-h-screen flex items-center justify-center text-center">
        <img src={hero} alt="Congregation worshipping" width={1600} height={1200} className="absolute inset-0 h-full w-full object-cover -z-10" />
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-24 text-primary-foreground">
          <p className="eyebrow mb-10 !text-primary-foreground/90">Hope For Life Ministry · Est. 1998</p>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-9xl leading-[1.1] tracking-tight">
            Where hope finds a home.
          </h1>
          <p className="mt-10 mx-auto max-w-2xl text-lg sm:text-xl text-primary-foreground/90 leading-relaxed">
            A Christ-centered community in Springfield proclaiming the Gospel of grace through worship, discipleship, and service.
          </p>
          <div className="mt-14 flex flex-wrap justify-center gap-3">
            <Button size="sm" asChild className="shadow-lg beam-light">
              <Link to="/contact">Plan Your Visit <ArrowRight size={9} /></Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-white/40 hover:bg-white hover:text-primary px-10 py-6">
              <a href="https://www.youtube.com/@dismusmutuku1277" target="_blank" rel="noopener noreferrer">
                <PlayCircle size={18} /> Watch Online
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* VERSE BAND */}
      <section className="bg-secondary py-20 lg:py-28 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <p className="eyebrow mb-6">Our Foundation</p>
          <p className="font-display text-3xl md:text-5xl leading-tight text-primary italic">
            "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future."
          </p>
          <div className="rule-gold w-16 mx-auto mt-8" />
          <p className="mt-4 text-sm tracking-[0.25em] uppercase text-muted-foreground">Jeremiah 29:11</p>
        </div>
      </section>

      {/* MAGAZINE FEATURE GRID */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="eyebrow mb-5">This Week</p>
              <h2 className="font-display text-4xl md:text-6xl text-primary max-w-2xl leading-[1.05]">Stories shaping our community.</h2>
            </div>
            <Link to="/events" className="text-sm font-semibold uppercase tracking-widest text-primary hover:text-gold transition-colors inline-flex items-center gap-2">
              All Stories <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid lg:grid-cols-12 gap-10">
            {/* Featured */}
            <article className="lg:col-span-7 group">
              <Link to="/sermons" className="block h-full">
                <div className="relative h-full overflow-hidden rounded-3xl bg-card shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 border border-border/50 p-4 pb-8">
                  <div className="aspect-[16/10] overflow-hidden rounded-2xl mb-8">
                    <img src={sermon} alt="Sunday sermon" width={1400} height={1000} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="px-4">
                    <p className="eyebrow mb-3">Featured Sermon Series</p>
                    <h3 className="font-display text-3xl md:text-4xl text-primary leading-tight group-hover:text-accent transition-colors">
                      Anchored: Finding Steady Ground in Shifting Seasons
                    </h3>
                    <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl">
                      Pastor David Okonkwo opens Hebrews 6 with a fresh look at the hope that holds the soul.
                    </p>
                  </div>
                </div>
              </Link>
            </article>

            {/* Side stories */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {[
                { img: community, eyebrow: "Community", title: "Welcome Night — Meet the Pastors", to: "/about" },
                { img: youth, eyebrow: "Next Generation", title: "Kids & Youth Programs Restart Sept 8", to: "/ministries" },
                { img: bible, eyebrow: "Discipleship", title: "Fall Bible Study: The Book of John", to: "/events" },
              ].map((s) => (
                <Link to={s.to} key={s.title} className="group block">
                  <div className="grid grid-cols-[140px_1fr] gap-6 items-center p-3 rounded-2xl bg-card/50 hover:bg-card hover:shadow-md transition-all duration-300 border border-transparent hover:border-border/50">
                    <div className="aspect-square overflow-hidden rounded-xl">
                      <img src={s.img} alt="" loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div>
                      <p className="eyebrow mb-2 text-[0.65rem]">{s.eyebrow}</p>
                      <h4 className="font-display text-xl text-primary leading-snug group-hover:text-accent transition-colors">{s.title}</h4>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* WHAT TO EXPECT — split */}
      <section className="bg-primary text-primary-foreground py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/5] overflow-hidden">
            <img src={community} alt="Our community" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="eyebrow mb-6">First Time Here?</p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] mb-8">You're already family — you just haven't met us yet.</h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-10">
              Walk in as you are. Coffee is hot, the welcome is warm, and our team will help you find your way. Services last about 75 minutes with worship, scripture, and a Bible-rooted message.
            </p>
            <div className="space-y-6 mb-10">
              {[
                { t: "Sunday Worship", d: "9:00 AM & 11:00 AM" },
                { t: "Kids & Youth", d: "Programs for every age, both services" },
                { t: "Address", d: "123 Grace Avenue, Springfield, IL" },
              ].map((i) => (
                <div key={i.t} className="border-b border-primary-foreground/15 pb-5">
                  <p className="font-display text-2xl text-gold">{i.t}</p>
                  <p className="text-primary-foreground/75 mt-1">{i.d}</p>
                </div>
              ))}
            </div>
            <Link to="/contact" className="btn-gold">Plan a Visit <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="eyebrow mb-5">How We Live</p>
            <h2 className="font-display text-4xl md:text-6xl text-primary">Three pillars of life together.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { Icon: Heart, t: "Worship", d: "Gathering weekly to lift Christ high through scripture, song and sacrament." },
              { Icon: Users, t: "Community", d: "Doing life in small groups where faith is shared and burdens are carried together." },
              { Icon: Calendar, t: "Mission", d: "Serving our city and the nations with the love and message of Jesus." },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="group relative p-8 rounded-3xl bg-card border border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="h-14 w-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-8 group-hover:bg-gold/20 transition-colors">
                  <Icon className="text-gold" size={30} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-3xl text-primary mb-4">{t}</h3>
                <p className="text-muted-foreground leading-relaxed">{d}</p>
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gold rounded-t-3xl scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GIVE CTA */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="eyebrow mb-6">Partner With Us</p>
          <h2 className="font-display text-4xl md:text-6xl text-primary leading-[1.05] mb-6">Every gift moves the mission forward.</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Your generosity fuels worship, discipleship, outreach, and care for those in need — here in Springfield and around the world.
          </p>
          <Button size="lg" asChild>
            <Link to="/give">Give Now <ArrowRight size={16} /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
