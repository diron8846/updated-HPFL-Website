import { Link } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";
import { motion } from "framer-motion";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/sermons", label: "Sermons" },
  { to: "/events", label: "Events" },
  { to: "/ministries", label: "Ministries" },
  { to: "/give", label: "Give" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-gold flex items-center justify-center bg-primary">
            <img src={logo} alt="Hope For Life Ministry Logo" className="h-full w-full object-cover" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg text-primary">Hope For Life</div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Ministry</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-2">
          <ul 
            className="relative flex items-center p-1"
            onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
          >
            {nav.map((n) => (
              <Tab key={n.to} to={n.to} setPosition={setPosition}>
                {n.label}
              </Tab>
            ))}
            <Cursor position={position} />
          </ul>
          
          <div className="flex items-center gap-4 ml-4">
            <Button variant="elevated" size="sm" asChild>
              <Link to="/give">Give</Link>
            </Button>
            <ThemeToggle />
          </div>
        </nav>

        <div className="flex items-center gap-4 lg:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="text-primary h-11 w-11"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="flex flex-col px-6 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium border-b border-border last:border-0"
                activeProps={{ className: "text-primary" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

const Tab = ({
  children,
  setPosition,
  to,
}: {
  children: React.ReactNode;
  setPosition: any;
  to: string;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block cursor-pointer"
    >
      <Link
        to={to}
        className="block px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative mix-blend-difference"
        activeProps={{ className: "text-primary" }}
      >
        {children}
      </Link>
    </li>
  );
};

const Cursor = ({ position }: { position: any }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-9 rounded-full bg-primary/10 dark:bg-white/10"
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    />
  );
}
