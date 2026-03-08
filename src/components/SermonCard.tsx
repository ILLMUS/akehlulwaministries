import { Play, Calendar } from "lucide-react";

interface SermonCardProps {
  title: string;
  date: string;
  scripture?: string;
  description?: string;
}

const SermonCard = ({ title, date, scripture, description }: SermonCardProps) => {
  return (
    <div className="card-church">
      {/* Video placeholder */}
      <div className="relative aspect-video bg-primary/10 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-secondary/90 flex items-center justify-center shadow-lg">
          <Play className="w-6 h-6 text-foreground ml-1" />
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <Calendar className="w-3.5 h-3.5 text-secondary" />
          <span className="font-body text-xs text-muted-foreground">{date}</span>
        </div>
        <h3 className="font-heading text-base mb-1 text-foreground">{title}</h3>
        {scripture && (
          <p className="font-body text-xs text-secondary font-medium mb-2">{scripture}</p>
        )}
        {description && (
          <p className="font-body text-sm text-muted-foreground line-clamp-2">{description}</p>
        )}
        <button className="mt-4 btn-gold text-sm py-2 px-5">
          <Play className="w-4 h-4" /> Watch
        </button>
      </div>
    </div>
  );
};

export default SermonCard;
