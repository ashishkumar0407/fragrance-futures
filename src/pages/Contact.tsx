import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@frago.io",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-6">
              Contact Us
            </p>
            <h1 className="font-display text-5xl md:text-7xl text-foreground mb-8 leading-tight">
              <span className="font-medium">Let's Start a</span>
              <span className="block text-gradient-gold font-semibold">Conversation</span>
            </h1>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
              Whether you're a brand looking to partner, a venue interested in
              hosting, or just curious about FRAGO—we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-display text-3xl text-foreground mb-8">
                <span className="font-medium">Send Us a</span> <span className="text-gradient-gold font-semibold">Message</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-card border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      required
                      className="bg-card border-border focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Company (Optional)
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="bg-card border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or inquiry..."
                    rows={6}
                    required
                    className="bg-card border-border focus:border-primary resize-none"
                  />
                </div>
                <Button
                  variant="gold"
                  size="lg"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-display text-3xl text-foreground mb-8">
                <span className="font-medium">Get In</span> <span className="text-gradient-gold font-semibold">Touch</span>
              </h2>
              <div className="space-y-8 mb-12">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {info.label}
                      </p>
                      <p className="text-foreground font-medium">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* FAQ Teaser */}
              <div className="p-8 rounded-2xl bg-card border border-border">
                <h3 className="font-display text-xl font-medium text-foreground mb-4">
                  Frequently Asked Questions
                </h3>
                <p className="text-muted-foreground mb-6">
                  Looking for quick answers? Check out our most common questions.
                </p>
                <div className="space-y-4">
                  <div>
                    <p className="text-foreground font-medium mb-1">
                      How long does deployment take?
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Typical deployment takes 2-4 weeks from contract signing.
                    </p>
                  </div>
                  <div>
                    <p className="text-foreground font-medium mb-1">
                      What's the minimum order?
                    </p>
                    <p className="text-muted-foreground text-sm">
                      We offer flexible options starting from single-unit pilots.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="aspect-[21/9] rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5!2d77.44547477875932!3d28.634298509094137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM4JzAzLjUiTiA3N8KwMjYnNDMuNyJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="FRAGO Location"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
