import { User, Phone } from "lucide-react";

interface LeadershipCardProps {
  name: string;
  role: string;
  phone: string;
}

export function LeadershipCard({ name, role, phone }: LeadershipCardProps) {
  return (
    <div className="bg-card rounded-2xl p-6 text-center shadow-sm border border-border hover:shadow-md transition-all duration-300 group">
      {/* Avatar with gradient ring */}
      <div className="relative inline-block mb-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full scale-110 group-hover:scale-115 transition-transform duration-300" />
        <div className="relative w-24 h-24 bg-gradient-to-br from-muted to-muted/80 rounded-full flex items-center justify-center">
          <User className="w-10 h-10 text-muted-foreground/70" />
        </div>
      </div>
      
      <h3 className="text-lg font-semibold text-foreground mb-1">{name}</h3>
      <p className="text-primary font-medium text-sm mb-4">{role}</p>
      
      <a
        href={`tel:${phone.replace(/\s/g, "")}`}
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-primary/5"
      >
        <Phone className="w-4 h-4" />
        {phone}
      </a>
    </div>
  );
}
