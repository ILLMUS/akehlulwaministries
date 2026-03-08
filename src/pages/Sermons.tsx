import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import SermonCard from "@/components/SermonCard";

const sermons = [
  { title: "Walking in Total Victory", date: "March 2, 2026", scripture: "Romans 8:37", description: "Discover how to live as more than a conqueror through Christ who strengthens us.", series: "Victory Series" },
  { title: "The Authority of the Believer", date: "February 23, 2026", scripture: "Luke 10:19", description: "Understanding the divine authority given to every child of God.", series: "Victory Series" },
  { title: "Unshakeable Faith", date: "February 16, 2026", scripture: "Hebrews 11:1", description: "Building a faith that stands firm in the midst of every storm.", series: "Faith Foundations" },
  { title: "The Power of Prayer", date: "February 9, 2026", scripture: "James 5:16", description: "Unlocking the supernatural through fervent, effectual prayer.", series: "Faith Foundations" },
  { title: "Purpose and Destiny", date: "February 2, 2026", scripture: "Jeremiah 29:11", description: "Discovering and walking in God's unique plan for your life.", series: "Latest" },
  { title: "Grace That Transforms", date: "January 26, 2026", scripture: "2 Corinthians 12:9", description: "The transforming power of God's grace in our daily lives.", series: "Latest" },
];

const Sermons = () => {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Latest", "Victory Series", "Faith Foundations"];

  const filtered = filter === "All" ? sermons : sermons.filter((s) => s.series === filter);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary section-padding text-center">
        <div className="container-church animate-fade-in-up">
          <h1 className="scripture-text text-primary-foreground mb-4">Sermons</h1>
          <div className="gold-divider mb-4" />
          <p className="font-body text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Be nourished by the Word of God. Watch, listen, and grow in your faith.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="section-padding bg-background">
        <div className="container-church">
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`font-subheading text-sm uppercase tracking-wider px-5 py-2 rounded-lg transition-all duration-300 ${
                  filter === f
                    ? "bg-secondary text-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-secondary/20"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((sermon) => (
              <SermonCard key={sermon.title} {...sermon} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sermons;
