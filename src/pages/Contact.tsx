import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { HeroBanner } from "@/components/ui/HeroBanner";
import { BackToTop } from "@/components/ui/BackToTop";
import { Mail, Phone, Facebook, Youtube, Send, MapPin, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We will respond as soon as possible.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <BackToTop />
      <HeroBanner
        title="Contact Us"
        subtitle="We would love to hear from you"
      />

      <section className="section-light page-section">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="card-warm">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-5 h-5 text-accent" />
                  <h2 className="text-xl font-semibold text-foreground">Send a Message</h2>
                </div>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      maxLength={100}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      maxLength={255}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      maxLength={1000}
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gold w-full flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className="card-warm">
                  <h2 className="text-xl font-semibold text-foreground mb-6">Get in Touch</h2>
                  <div className="space-y-4">
                    <a
                      href="mailto:ipcgilgalshj@gmail.com"
                      className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-gold-soft/50 to-transparent hover:from-gold-soft transition-all group"
                    >
                      <div className="w-12 h-12 bg-accent/15 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Mail className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="text-foreground font-medium">ipcgilgalshj@gmail.com</p>
                      </div>
                    </a>

                    <a
                      href="tel:+971501892016"
                      className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-dove-light/50 to-transparent hover:from-dove-light transition-all group"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p className="text-foreground font-medium">+971 50 189 2016</p>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="card-warm">
                  <h2 className="text-xl font-semibold text-foreground mb-6">Follow Us</h2>
                  <div className="flex gap-4">
                    <a
                      href="https://www.facebook.com/ipcgilgalshj.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-primary/10 to-transparent rounded-xl hover:from-primary/20 transition-all group"
                    >
                      <Facebook className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-foreground font-medium">Facebook</span>
                    </a>
                    <a
                      href="https://www.youtube.com/@ipcgilgalshj"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-destructive/10 to-transparent rounded-xl hover:from-destructive/20 transition-all group"
                    >
                      <Youtube className="w-5 h-5 text-destructive group-hover:scale-110 transition-transform" />
                      <span className="text-foreground font-medium">YouTube</span>
                    </a>
                  </div>
                </div>

                <div className="card-accent">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Location</h3>
                      <p className="text-muted-foreground">
                        IPC Gilgal Church serves communities in Sharjah and Ras Al Khaimah, United Arab Emirates. Contact us for service location details.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
