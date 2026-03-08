import { Link } from "react-router-dom";
import { ArrowRight, Clock, MapPin, Heart, Users, BookOpen, Hand } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import SermonCard from "@/components/SermonCard";
import EventCard from "@/components/EventCard";
import heroImage from "@/assets/hero-worship.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <img src={heroImage} alt="Worship at Akehlulwa Lutfo Ministries" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
          <p className="font-subheading text-secondary text-sm sm:text-base uppercase tracking-[0.3em] mb-6">
            Akehlulwa Lutfo Ministries
          </p>
          <h1 className="scripture-text text-primary-foreground mb-6">
            "But thanks be to God, who gives us the{" "}
            <span className="text-secondary">victory</span> through our Lord Jesus Christ."
          </h1>
          <p className="font-body text-primary-foreground/70 text-base sm:text-lg mb-8">
            — 1 Corinthians 15:57
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-gold text-base">
              Join Us This Sunday <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/sermons" className="btn-outline-gold text-base border-2 border-secondary text-secondary hover:bg-secondary hover:text-foreground font-subheading font-semibold px-8 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2">
              Watch Sermons
            </Link>
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="section-padding bg-background">
        <div className="container-church text-center max-w-3xl mx-auto">
          <SectionHeading title="Our Mission" subtitle="Bringing the victorious message of Christ to the heart of Eswatini and beyond." />
          <p className="font-body text-muted-foreground leading-relaxed mb-4">
            Akehlulwa Lutfo Ministries exists to proclaim the unshakeable victory of Jesus Christ, to raise 
            believers who walk in divine authority, and to transform communities through the power of the Gospel.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed mb-8">
            <strong className="text-foreground">Our Vision:</strong> To be a beacon of hope and spiritual victory across the 
            nations, equipping every believer to live triumphantly in Christ.
          </p>
          <Link to="/about" className="btn-gold">
            Learn More About Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Service Times & Location */}
      <section className="section-padding bg-primary">
        <div className="container-church">
          <SectionHeading title="Join Us in Worship" subtitle="Experience the presence of God with us." light />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
              <Clock className="w-8 h-8 text-secondary mx-auto mb-3" />
              <h3 className="font-heading text-sm text-primary-foreground uppercase tracking-wider mb-2">Sunday Service</h3>
              <p className="font-body text-primary-foreground/70">9:00 AM – 12:00 PM</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
              <Clock className="w-8 h-8 text-secondary mx-auto mb-3" />
              <h3 className="font-heading text-sm text-primary-foreground uppercase tracking-wider mb-2">Midweek Service</h3>
              <p className="font-body text-primary-foreground/70">Wednesday 6:00 PM</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
              <MapPin className="w-8 h-8 text-secondary mx-auto mb-3" />
              <h3 className="font-heading text-sm text-primary-foreground uppercase tracking-wider mb-2">Location</h3>
              <p className="font-body text-primary-foreground/70">Mbabane, Eswatini</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries Overview */}
      <section className="section-padding bg-background">
        <div className="container-church">
          <SectionHeading title="Our Ministries" subtitle="Growing together in faith, service, and community." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: "Youth Ministry", desc: "Empowering the next generation to live victoriously in Christ." },
              { icon: Heart, title: "Women's Fellowship", desc: "Building godly women of strength, grace, and purpose." },
              { icon: Hand, title: "Men's Fellowship", desc: "Raising men of integrity who lead with spiritual authority." },
              { icon: BookOpen, title: "Outreach & Evangelism", desc: "Carrying the Gospel to every corner of our community." },
            ].map((ministry) => (
              <div key={ministry.title} className="card-church p-6 text-center">
                <ministry.icon className="w-10 h-10 text-secondary mx-auto mb-4" />
                <h3 className="font-heading text-sm uppercase tracking-wider mb-2 text-foreground">{ministry.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{ministry.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/ministries" className="btn-gold">
              Explore All Ministries <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Sermons */}
      <section className="section-padding bg-accent">
        <div className="container-church">
          <SectionHeading title="Latest Sermons" subtitle="Be fed by the Word of God. Watch our most recent messages." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SermonCard title="Walking in Total Victory" date="March 2, 2026" scripture="Romans 8:37" description="Discover how to live as more than a conqueror through Christ who strengthens us." />
            <SermonCard title="The Authority of the Believer" date="February 23, 2026" scripture="Luke 10:19" description="Understanding the divine authority given to every child of God." />
            <SermonCard title="Unshakeable Faith" date="February 16, 2026" scripture="Hebrews 11:1" description="Building a faith that stands firm in the midst of every storm." />
          </div>
          <div className="text-center mt-8">
            <Link to="/sermons" className="btn-gold">
              View All Sermons <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-background">
        <div className="container-church">
          <SectionHeading title="Upcoming Events" subtitle="Join us for special gatherings and celebrations." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <EventCard title="Victory Night Revival" date="15" month="Mar" time="6:00 PM" description="A powerful night of worship, prayer, and prophetic declarations." />
            <EventCard title="Women's Conference 2026" date="22" month="Mar" time="9:00 AM" description="'Arise and Shine' — a gathering of purpose and empowerment." />
            <EventCard title="Youth Summit" date="05" month="Apr" time="10:00 AM" description="Equipping young believers to stand bold in their faith." />
            <EventCard title="Community Outreach Day" date="12" month="Apr" time="8:00 AM" description="Serving our community with the love of Christ." />
          </div>
        </div>
      </section>

      {/* Giving Section */}
      <section className="section-padding bg-primary">
        <div className="container-church text-center max-w-3xl mx-auto">
          <SectionHeading title="Partner With Us" subtitle="Your generous giving empowers the work of the Kingdom." light />
          <p className="font-body text-primary-foreground/70 leading-relaxed mb-8">
            "Each of you should give what you have decided in your heart to give, not reluctantly or under 
            compulsion, for God loves a cheerful giver." — 2 Corinthians 9:7
          </p>
          <button className="btn-gold text-lg px-10 py-4">
            Give Online <Heart className="w-5 h-5" />
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
