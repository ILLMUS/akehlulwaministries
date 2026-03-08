import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Cross, BookOpen, Eye, Heart } from "lucide-react";
import aboutImage from "@/assets/about-church.jpg";
import pastorImage from "@/assets/pastor.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <img src={aboutImage} alt="Church interior" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay" />
        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <h1 className="scripture-text text-primary-foreground mb-4">About Us</h1>
          <div className="gold-divider" />
        </div>
      </section>

      {/* Church History */}
      <section className="section-padding bg-background">
        <div className="container-church max-w-4xl mx-auto">
          <SectionHeading title="Our Story" subtitle="Rooted in faith, growing in victory." />
          <div className="prose max-w-none font-body text-muted-foreground leading-relaxed space-y-4">
            <p>
              Akehlulwa Lutfo Ministries was birthed from a deep conviction that every believer is destined 
              for victory in Christ. Founded in the heart of Eswatini, our ministry has grown from humble 
              beginnings to become a beacon of hope, faith, and transformation in our community.
            </p>
            <p>
              The name "Akehlulwa Lutfo" speaks of the undefeatable grace and mercy of God — a reminder 
              that through Christ, we are more than conquerors. This truth has been the foundation upon which 
              every service, outreach, and prayer gathering has been built.
            </p>
            <p>
              Today, we continue to press forward in our calling, reaching the lost, strengthening the 
              faithful, and raising a generation that walks in divine authority and purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-primary">
        <div className="container-church">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-8 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
              <Eye className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h3 className="font-heading text-lg text-primary-foreground uppercase tracking-wider mb-3">Our Vision</h3>
              <p className="font-body text-primary-foreground/70 leading-relaxed">
                To be a beacon of hope and spiritual victory across the nations, equipping every believer 
                to live triumphantly in Christ and fulfill their God-given destiny.
              </p>
            </div>
            <div className="text-center p-8 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
              <Heart className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h3 className="font-heading text-lg text-primary-foreground uppercase tracking-wider mb-3">Our Mission</h3>
              <p className="font-body text-primary-foreground/70 leading-relaxed">
                To proclaim the unshakeable victory of Jesus Christ, to raise believers who walk in 
                divine authority, and to transform communities through the power of the Gospel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statement of Faith */}
      <section className="section-padding bg-accent">
        <div className="container-church max-w-4xl mx-auto">
          <SectionHeading title="Statement of Faith" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit.",
              "We believe the Bible is the inspired, infallible Word of God and the supreme authority in all matters of faith.",
              "We believe in the deity of Jesus Christ, His virgin birth, sinless life, atoning death, and bodily resurrection.",
              "We believe in salvation by grace through faith in Jesus Christ alone.",
              "We believe in the baptism and empowering ministry of the Holy Spirit.",
              "We believe in the second coming of our Lord Jesus Christ.",
            ].map((belief, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                <Cross className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                <p className="font-body text-sm text-muted-foreground">{belief}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-background">
        <div className="container-church max-w-4xl mx-auto">
          <SectionHeading title="Our Leadership" subtitle="Led by the Spirit, serving with love." />
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-64 h-64 rounded-xl overflow-hidden shadow-xl shrink-0">
              <img src={pastorImage} alt="Senior Pastor" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="font-heading text-xl text-foreground mb-1">Senior Pastor</h3>
              <p className="font-subheading text-secondary font-medium mb-4">Akehlulwa Lutfo Ministries</p>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                A man of deep faith and prophetic vision, our Senior Pastor has dedicated his life to 
                preaching the Word of God with power and clarity. Under his leadership, Akehlulwa Lutfo 
                Ministries has become a place where lives are transformed, the broken are restored, and 
                believers are equipped to walk in victory.
              </p>
              <p className="font-body text-sm text-secondary italic">
                "For I know the plans I have for you, declares the Lord, plans to prosper you and not to 
                harm you, plans to give you hope and a future." — Jeremiah 29:11
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Scripture */}
      <section className="section-padding bg-primary text-center">
        <div className="container-church max-w-3xl mx-auto">
          <BookOpen className="w-12 h-12 text-secondary mx-auto mb-6" />
          <blockquote className="font-heading text-2xl sm:text-3xl text-primary-foreground leading-relaxed mb-4">
            "No, in all these things we are more than conquerors through him who loved us."
          </blockquote>
          <p className="font-body text-secondary text-lg">— Romans 8:37</p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
