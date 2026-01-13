import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, BarChart3, Zap, Users, Target, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-fragrance.jpg";

const benefits = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "Deploy your fragrances in high-traffic locations across malls, airports, and luxury retail spaces worldwide.",
  },
  {
    icon: BarChart3,
    title: "Rich Analytics",
    description: "Gain deep insights into customer preferences, trial patterns, and conversion rates in real-time.",
  },
  {
    icon: Zap,
    title: "Instant Conversion",
    description: "QR-enabled instant purchase turns trials into sales, with seamless e-commerce integration.",
  },
  {
    icon: Users,
    title: "New Audiences",
    description: "Reach customers who might never visit a perfume counter, expanding your market significantly.",
  },
  {
    icon: Target,
    title: "Precision Marketing",
    description: "Target specific demographics and locations with customized fragrance selections.",
  },
  {
    icon: TrendingUp,
    title: "Brand Elevation",
    description: "Associate your brand with cutting-edge technology and premium customer experiences.",
  },
];

const partnershipModels = [
  {
    title: "Placement Partnership",
    description: "We place your fragrances in our existing network of FRAGO devices. You provide the scents, we handle everything else.",
    features: ["No hardware investment", "Revenue sharing model", "Access to our location network"],
  },
  {
    title: "Branded Deployment",
    description: "Custom-branded FRAGO devices for your flagship stores, events, or pop-up experiences.",
    features: ["Fully branded experience", "Exclusive locations", "Dedicated support"],
  },
  {
    title: "White Label Solution",
    description: "License our technology for your own fragrance discovery ecosystem. Full customization available.",
    features: ["Complete technology access", "Your branding throughout", "Dedicated development support"],
  },
];

const ForBrands = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-6">
              For Brands
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-light text-foreground mb-8 leading-tight">
              Elevate Your
              <span className="block text-gradient-gold font-medium">Brand Presence</span>
            </h1>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
              Partner with FRAGO to bring your fragrances to new audiences,
              locations, and experiences. Transform how customers discover your brand.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl font-light text-foreground mb-6">
              Why Partner With <span className="text-gradient-gold font-medium">FRAGO</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Unlock new opportunities for your fragrance brand.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl font-light text-foreground mb-6">
              Partnership <span className="text-gradient-gold font-medium">Models</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Flexible options to fit your brand's needs and goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {partnershipModels.map((model) => (
              <div
                key={model.title}
                className="p-8 rounded-2xl bg-card border border-border flex flex-col"
              >
                <h3 className="font-display text-2xl font-medium text-foreground mb-4">
                  {model.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {model.description}
                </p>
                <ul className="space-y-3 mt-auto">
                  {model.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src={heroImage}
                alt="Brand partnership success"
                className="rounded-2xl shadow-elevated"
              />
            </div>
            <div>
              <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
                Success Story
              </p>
              <h2 className="font-display text-4xl font-light text-foreground mb-6">
                3x Trial-to-Purchase
                <span className="block text-gradient-gold font-medium">Conversion Rate</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                "FRAGO transformed how our customers discover our fragrances. The
                contactless experience and instant purchase option have dramatically
                improved our conversion rates in high-traffic locations."
              </p>
              <p className="text-foreground font-medium">
                — Marketing Director, Leading Luxury Fragrance House
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
            Let's Build Something
            <span className="block text-gradient-gold font-medium">Extraordinary Together</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Ready to explore a partnership? Our team is here to discuss how
            FRAGO can elevate your brand.
          </p>
          <Button variant="hero" asChild>
            <Link to="/contact">
              Start the Conversation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ForBrands;
