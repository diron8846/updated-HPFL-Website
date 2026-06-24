import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import aboutImage1 from "@/assets/About Image 1.jpg";
import aboutImage2 from "@/assets/About Image 2.jpg";
import aboutImage3 from "@/assets/About Image 3.jpg";
import aboutImage4 from "@/assets/About Image 4.jpg";
import aboutImage5 from "@/assets/About Image 5.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Hope For Life Ministry" },
      {
        name: "description",
        content:
          "Our story, beliefs, and pastoral team. Hope For Life Ministry has served Springfield since 1998.",
      },
      { property: "og:title", content: "About Hope For Life Ministry" },
      {
        property: "og:description",
        content: "Our story, beliefs, and the team that shepherds our church.",
      },
    ],
  }),
  component: About,
});

const beliefs = [
  {
    t: "The Scriptures",
    d: "We believe the Bible is the inspired, infallible Word of God and the final authority for faith and life.",
  },
  {
    t: "The Trinity",
    d: "We believe in one God eternally existing in three Persons — Father, Son, and Holy Spirit.",
  },
  {
    t: "Jesus Christ",
    d: "We believe in the deity, virgin birth, sinless life, atoning death, and bodily resurrection of Jesus Christ.",
  },
  {
    t: "Salvation by Grace",
    d: "We believe salvation is a gift of God, received through faith in Christ alone.",
  },
  {
    t: "The Church",
    d: "We believe the Church is the body of Christ, called to worship, discipleship, and mission.",
  },
  {
    t: "The Return of Christ",
    d: "We believe in the personal, visible return of Jesus and the eternal hope of the resurrection.",
  },
];

const team = [
  {
    img: aboutImage2,
    name: "Pastor Dismus Mutuku",
    bio: "Serving since 2009 with a passion for expository preaching and pastoral care.",
  },
  {
    img: aboutImage3,
    name: "Pastor Charles Lovi",
    bio: "Leads our small groups and women's ministry with depth and warmth.",
  },
  {
    img: aboutImage4,
    name: "Pastor Stanley",
    bio: "Cultivates a worship culture rooted in scripture, song, and the gathered church.",
  },
  {
    img: aboutImage5,
    name: "Pastor Ronald",
    bio: "Shepherds our kids, youth, and college ministries toward Christ-centered formation.",
  },
];

function About() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="A people gathered by grace."
        subtitle="For over 25 years, Hope For Life Ministry has been a place where the Gospel is preached, the broken find healing, and ordinary lives are transformed by an extraordinary God."
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={aboutImage1}
              alt="Our community"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow mb-5">The Beginning</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary leading-tight mb-6">
              From a living room to a city-wide family.
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                In the fall of 1998, twelve friends gathered in a Springfield living room with a
                single conviction: that the message of Jesus Christ could renew a city. Within a
                year, that small group had outgrown four homes and rented its first storefront.
              </p>
              <p>
                Today, Hope For Life Ministry is a multi-generational congregation of over 1,200
                worshippers, with ministries reaching across age, background, and need. But our
                heart remains the same — a people in love with Jesus, devoted to His Word, and sent
                Into His world.
                </p>
                <p className="italic text-2xl font-bold tracking-tight text-primary">
                "He has made everything beautiful in its time." — Ecclesiastes 3:11
                </p>
                </div>
                </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="eyebrow mb-5">What We Believe</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-primary">
              Rooted in scripture. Centered on Christ.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beliefs.map((b, i) => (
              <div
                key={b.t}
                className="group relative bg-card p-10 rounded-3xl border border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className="text-gold text-sm font-bold tracking-widest mb-6 bg-gold/5 w-fit px-3 py-1 rounded-full border border-gold/10">
                  0{i + 1}
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-primary mb-4">{b.t}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{b.d}</p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-3xl" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-primary">
              Our Team
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {team.map((m) => (
              <div key={m.name} className="group">
                <div className="aspect-[3/4] overflow-hidden rounded-3xl mb-6 shadow-sm border border-border/30">
                  <img
                    src={m.img}
                    alt={m.name}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="px-2 mt-4">
                  <h3 className="text-2xl font-bold tracking-tight text-primary mb-2 group-hover:text-gold transition-colors">
                    {m.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
