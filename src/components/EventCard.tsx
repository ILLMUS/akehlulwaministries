interface EventCardProps {
  title: string;
  date: string;
  month: string;
  description: string;
  time?: string;
}

const EventCard = ({ title, date, month, description, time }: EventCardProps) => {
  return (
    <div className="card-church flex overflow-hidden">
      {/* Date badge */}
      <div className="bg-secondary flex flex-col items-center justify-center px-5 py-4 min-w-[80px]">
        <span className="font-heading text-2xl font-bold text-foreground">{date}</span>
        <span className="font-subheading text-xs uppercase tracking-wider text-foreground/80">{month}</span>
      </div>
      <div className="p-4">
        <h3 className="font-heading text-sm text-foreground mb-1">{title}</h3>
        {time && <p className="font-body text-xs text-secondary font-medium mb-1">{time}</p>}
        <p className="font-body text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default EventCard;
