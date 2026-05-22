// GradientCardDemo.tsx

import { GradientCard } from "@/components/ui/gradient-card";

const cardData = [
  {
    badgeText: "Community Support",
    badgeColor: "#F59E0B", // Amber
    title: "Outreach",
    description: "Join our local missions to support those in need within our Springfield community.",
    ctaText: "Get Involved",
    ctaHref: "/ministries",
    imageUrl: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=320&auto=format&fit=crop",
    gradient: "orange" as const,
  },
  {
    badgeText: "Spiritual Growth",
    badgeColor: "#4B5563", // Gray
    title: "Discipleship",
    description: "Deepen your faith through our weekly Bible studies and small group sessions.",
    ctaText: "Learn More",
    ctaHref: "/about",
    imageUrl: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=320&auto=format&fit=crop",
    gradient: "gray" as const,
  },
  {
    badgeText: "Youth Ministry",
    badgeColor: "#8B5CF6", // Purple
    title: "Next Gen",
    description: "Empowering the next generation to lead with faith, hope, and love.",
    ctaText: "View Programs",
    ctaHref: "/ministries",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=320&auto=format&fit=crop",
    gradient: "purple" as const,
  },
  {
    badgeText: "Global Mission",
    badgeColor: "#10B981", // Green
    title: "Partners",
    description: "Partner with us as we support global missions and spread the Gospel worldwide.",
    ctaText: "Partner Today",
    ctaHref: "/give",
    imageUrl: "https://images.unsplash.com/photo-1526666923127-b2970f64b422?q=80&w=320&auto=format&fit=crop",
    gradient: "green" as const,
  },
];

const GradientCardDemo = () => {
  return (
    <div className="p-4 sm:p-8 bg-background">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
        {cardData.map((card, index) => (
          <GradientCard
            key={index}
            badgeText={card.badgeText}
            badgeColor={card.badgeColor}
            title={card.title}
            description={card.description}
            ctaText={card.ctaText}
            ctaHref={card.ctaHref}
            imageUrl={card.imageUrl}
            gradient={card.gradient}
          />
        ))}
      </div>
    </div>
  );
};

export default GradientCardDemo;
