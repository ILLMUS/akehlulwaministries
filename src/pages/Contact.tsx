import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Send, MessageCircle, MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [prayerForm, setPrayerForm] = useState({ name: "", request: "" });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out! We will get back to you soon.");
    setContactForm({ name: "", email: "", message: "" });
  };

  const handlePrayerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Your prayer request has been received. We are praying with you.");
    setPrayerForm({ name: "", request: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary section-padding text-center">
        <div className="container-church animate-fade-in-up">
          <h1 className="scripture-text text-primary-foreground mb-4">Contact Us</h1>
          <div className="gold-divider mb-4" />
          <p className="font-heading text-xl sm:text-2xl text-secondary">
            "We Are Here to Pray With You"
          </p>
        </div>
      </section>

      {/* Forms */}
      <section className="section-padding bg-background">
        <div className="container-church">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-xl uppercase tracking-wider text-foreground mb-6">Send a Message</h2>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="font-subheading text-sm text-muted-foreground block mb-1">Name</label>
                  <input
                    type="text"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border font-body text-foreground focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition"
                  />
                </div>
                <div>
                  <label className="font-subheading text-sm text-muted-foreground block mb-1">Email</label>
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border font-body text-foreground focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition"
                  />
                </div>
                <div>
                  <label className="font-subheading text-sm text-muted-foreground block mb-1">Message</label>
                  <textarea
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border font-body text-foreground focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition resize-none"
                  />
                </div>
                <button type="submit" className="btn-gold w-full justify-center">
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            </div>

            {/* Prayer Request Form */}
            <div>
              <h2 className="font-heading text-xl uppercase tracking-wider text-foreground mb-6">Prayer Request</h2>
              <form onSubmit={handlePrayerSubmit} className="space-y-4">
                <div>
                  <label className="font-subheading text-sm text-muted-foreground block mb-1">Your Name</label>
                  <input
                    type="text"
                    value={prayerForm.name}
                    onChange={(e) => setPrayerForm({ ...prayerForm, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border font-body text-foreground focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition"
                  />
                </div>
                <div>
                  <label className="font-subheading text-sm text-muted-foreground block mb-1">Your Prayer Request</label>
                  <textarea
                    value={prayerForm.request}
                    onChange={(e) => setPrayerForm({ ...prayerForm, request: e.target.value })}
                    required
                    rows={6}
                    placeholder="Share your prayer need with us. Your request is kept confidential."
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border font-body text-foreground placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition resize-none"
                  />
                </div>
                <button type="submit" className="btn-gold w-full justify-center">
                  <MessageCircle className="w-4 h-4" /> Submit Prayer Request
                </button>
              </form>

              {/* WhatsApp */}
              <a
                href="https://wa.me/26876000000"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-[hsl(142,70%,40%)] text-[hsl(0,0%,100%)] font-subheading font-semibold px-8 py-3 rounded-lg hover:bg-[hsl(142,70%,35%)] transition-all duration-300 shadow-md"
              >
                <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Info */}
      <section className="section-padding bg-accent">
        <div className="container-church">
          <SectionHeading title="Find Us" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Map Placeholder */}
            <div className="rounded-xl overflow-hidden border border-border h-80 bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-secondary mx-auto mb-3" />
                <p className="font-subheading text-muted-foreground">Google Map</p>
                <p className="font-body text-sm text-muted-foreground">Mbabane, Eswatini</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-secondary mt-1 shrink-0" />
                <div>
                  <h3 className="font-heading text-sm uppercase tracking-wider text-foreground mb-1">Address</h3>
                  <p className="font-body text-muted-foreground">Mbabane, Eswatini</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-secondary mt-1 shrink-0" />
                <div>
                  <h3 className="font-heading text-sm uppercase tracking-wider text-foreground mb-1">Phone</h3>
                  <p className="font-body text-muted-foreground">+268 7600 0000</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-secondary mt-1 shrink-0" />
                <div>
                  <h3 className="font-heading text-sm uppercase tracking-wider text-foreground mb-1">Email</h3>
                  <p className="font-body text-muted-foreground">info@akehlulwalutfo.org</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-secondary mt-1 shrink-0" />
                <div>
                  <h3 className="font-heading text-sm uppercase tracking-wider text-foreground mb-1">Service Times</h3>
                  <p className="font-body text-muted-foreground">Sunday: 9:00 AM – 12:00 PM</p>
                  <p className="font-body text-muted-foreground">Wednesday: 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
