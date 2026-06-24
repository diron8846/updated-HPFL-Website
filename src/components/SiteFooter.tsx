import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.jpg";

export function SiteFooter() {
  return (
    <footer className="bg-maroon text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-gold flex items-center justify-center bg-gold">
              <img src={logo} alt="Hope For Life Ministry Logo" className="h-full w-full object-cover" />
            </div>
            <div className="font-bold text-xl uppercase tracking-tight">Hope For Life</div>
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            A community of faith, hope, and love — proclaiming the Gospel of Jesus Christ to every generation.
          </p>
          <div className="flex gap-3 mt-6">
            {[
              { Icon: Facebook, href: "https://www.facebook.com/dismus.mwania.1" },
              { Icon: Instagram, href: "https://www.instagram.com/hopeforlifeministrychurch?igsh=dDV2cHNmN3E5d2Zk" },
              { Icon: Youtube, href: "https://youtube.com/@dismusmutuku1277?si=qlEkls2UTXaCPfIl" }
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="h-9 w-9 border border-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-gold hover:text-gold-foreground hover:border-gold transition-colors">
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="eyebrow !text-gold mb-5">Explore</h4>
          <ul className="space-y-3 text-sm">
            {[["/about","About Us"],["/sermons","Sermons"],["/events","Events"],["/ministries","Ministries"]].map(([to,l]) => (
              <li key={to}><Link to={to} className="text-primary-foreground/75 hover:text-gold transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="eyebrow !text-gold mb-5">Visit Us</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/75">
            <li className="flex gap-3"><MapPin size={16} className="shrink-0 mt-0.5 text-gold" /><span>Mwihoko, Githurai</span></li>
            <li className="flex gap-3"><Phone size={16} className="shrink-0 mt-0.5 text-gold" /><span>0710660015 / 0727691035</span></li>
            <li className="flex gap-3"><Mail size={16} className="shrink-0 mt-0.5 text-gold" /><span>hopef4lifeministry@gmail.com</span></li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow !text-gold mb-5">Service Times</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/75">
            <li><div className="font-bold text-base text-primary-foreground uppercase tracking-wide">Sunday Worship</div>9:00 AM &amp; 11:00 AM</li>
            <li><div className="font-bold text-base text-primary-foreground uppercase tracking-wide">Wednesday Bible Study</div>7:00 PM</li>
            <li><div className="font-bold text-base text-primary-foreground uppercase tracking-wide">Friday Prayer</div>6:30 PM</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/55">
          <p>&copy; {new Date().getFullYear()} Hope For Life Ministry. All rights reserved.</p>
          <p className="font-medium italic text-sm text-gold">"For God so loved the world..." — John 3:16</p>
        </div>
      </div>
    </footer>
  );
}
