import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Users, Heart, Hand, BookOpen, Shield, ArrowRight } from "lucide-react";

const ministries = [
  {
    icon: Users,
    title: "Youth Ministry",
    description: "Empowering the next generation with the Word of God. Through worship, Bible study, and community, we raise young leaders who are bold in their faith and committed to Christ.",
  },
  {
    icon: Heart,
    title: "Women's Fellowship",
    description: "A gathering of purpose, prayer, and empowerment. Our women's fellowship builds godly women of strength, grace, and unwavering faith through sisterhood and the Word.",
  },
  {
    icon: Hand,
    title: "Men's Fellowship",
    description: "Raising men of integrity who lead with spiritual authority. Through accountability, prayer, and teaching, we equip men to be pillars in their families and communities.",
  },
  {
    icon: BookOpen,
    title: "Outreach & Evangelism",
    description: "Carrying the Gospel to every corner of our community and beyond. We are committed to reaching the lost, serving the vulnerable, and demonstrating the love of Christ.",
  },
  {
    icon: Shield,
    title: "Prayer & Intercession",
    description: "The engine room of our ministry. Our prayer warriors stand in the gap, interceding for our church, community, nation, and the nations of the world.",
  },
];

const Ministries = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary section-padding text-center">
        <div className="container-church animate-fade-in-up">
          <h1 className="scripture-text text-primary-foreground mb-4">Our Ministries</h1>
          <div className="gold-divider mb-4" />
          <p className="font-body text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Every ministry is an extension of our mission to see lives transformed by the power of Christ.
          </p>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="section-padding bg-background">
        <div className="container-church">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map((ministry) => (
              <div key={ministry.title} className="card-church p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-5">
                  <ministry.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-heading text-base uppercase tracking-wider mb-3 text-foreground">{ministry.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">{ministry.description}</p>
                <button className="btn-gold text-sm py-2 px-6">
                  Get Involved <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-center">
        <div className="container-church max-w-3xl mx-auto">
          <SectionHeading title="Find Your Place" subtitle="God has a purpose for you in His body. Discover where you fit and start serving today." light />
          <a href="/contact" className="btn-gold text-lg px-10 py-4">
            Connect With Us <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Ministries;
