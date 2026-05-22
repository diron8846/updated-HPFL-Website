import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Hope For Life Ministry" },
      { name: "description", content: "Get in touch with Hope For Life Ministry. We'd love to hear from you, pray for you, or help you find your next step." },
      { property: "og:title", content: "Contact Hope For Life Ministry" },
      { property: "og:description", content: "We'd love to hear from you." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHeader eyebrow="We'd Love to Hear From You" title="Reach out." subtitle="Whether you're planning a visit, need prayer, or want to talk to a pastor — we're here." />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[1fr_1.3fr] gap-16">
          <div>
            <p className="eyebrow mb-5">Visit & Contact</p>
            <h2 className="font-display text-4xl text-primary mb-10">Find us. Call us. Email us.</h2>
            <ul className="space-y-8">
              {[
                { Icon: MapPin, t: "Our Location", d: "123 Grace Avenue\nSpringfield, IL 62701" },
                { Icon: Phone, t: "Phone", d: "(555) 123-4567" },
                { Icon: Mail, t: "Email", d: "hello@hopeforlife.org" },
                { Icon: Clock, t: "Office Hours", d: "Mon–Thu · 9:00 AM – 5:00 PM\nFri · 9:00 AM – 12:00 PM" },
              ].map(({ Icon, t, d }) => (
                <li key={t} className="flex gap-5 border-b border-border pb-6">
                  <div className="h-11 w-11 shrink-0 bg-secondary flex items-center justify-center text-accent rounded-xl">
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="eyebrow mb-1.5 text-[0.65rem]">{t}</p>
                    <p className="text-primary font-medium whitespace-pre-line leading-relaxed">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-secondary p-10 lg:p-14 rounded-3xl">
            <p className="eyebrow mb-5">Send a Message</p>
            <h2 className="font-display text-3xl text-primary mb-8">How can we serve you?</h2>
            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Thank you — we'll be in touch soon."); }}>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">First Name</label>
                  <input required className="w-full bg-background border-b border-border px-1 py-3 focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Last Name</label>
                  <input required className="w-full bg-background border-b border-border px-1 py-3 focus:outline-none focus:border-primary transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Email</label>
                <input type="email" required className="w-full bg-background border-b border-border px-1 py-3 focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">I'd like to...</label>
                <select className="w-full bg-background border-b border-border px-1 py-3 focus:outline-none focus:border-primary transition-colors">
                  <option>Plan a visit</option>
                  <option>Request prayer</option>
                  <option>Speak with a pastor</option>
                  <option>Get involved in ministry</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Message</label>
                <textarea rows={5} required className="w-full bg-background border-b border-border px-1 py-3 focus:outline-none focus:border-primary transition-colors resize-none" />
              </div>
              <Button type="submit" size="lg" className="w-full md:w-auto">
                <Send size={16} /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
