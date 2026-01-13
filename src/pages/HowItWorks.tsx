import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Hand, Smartphone, Droplets, ShoppingBag } from "lucide-react";
import fragranceMist from "@/assets/fragrance-mist.jpg";

const steps = [
  {
    icon: Hand,
    number: "01",
    title: "Approach & Activate",
    description: "Motion sensors detect your presence. Simply wave your hand to activate the device. No touching required—completely contactless and hygienic.",
  },
  {
    icon: Smartphone,
    number: "02",
    title: "Browse & Select",
    description: "Navigate the intuitive touchscreen to explore available fragrances. View scent profiles, notes, and brand information before making your selection.",
  },
  {
    icon: Droplets,
    number: "03",
    title: "Experience",
    description: "Position your wrist or clothing under the dispenser. A precisely calibrated mist delivers the perfect amount of fragrance—enough to experience, never overwhelming.",
  },
  {
    icon: ShoppingBag,
    number: "04",
    title: "Connect & Purchase",
    description: "Loved what you tried? Scan the QR code to purchase the full-size product instantly. Your preferences are saved for personalized recommendations.",
  },
];

const HowItWorks = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-6">
              How It Works
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-light text-foreground mb-8 leading-tight">
              Seamless From
              <span className="block text-gradient-gold font-medium">Start to Finish</span>
            </h1>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
              Experience fragrance discovery reimagined. Every interaction is designed
              to delight, from the first wave to the final purchase.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`grid lg:grid-cols-2 gap-16 items-center mb-32 last:mb-0 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>
                  <span className="font-display text-6xl font-light text-primary/20">
                    {step.number}
                  </span>
                </div>
                <h2 className="font-display text-4xl font-light text-foreground mb-6">
                  {step.title}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="aspect-square rounded-2xl bg-card border border-border flex items-center justify-center">
                  <step.icon className="h-32 w-32 text-primary/20" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video/Demo Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src={fragranceMist}
                alt="FRAGO in action"
                className="rounded-2xl shadow-elevated"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-primary-foreground ml-1" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-display text-4xl font-light text-foreground mb-6">
                See It In <span className="text-gradient-gold font-medium">Action</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Watch how FRAGO transforms the fragrance discovery experience.
                From activation to purchase in under 60 seconds.
              </p>
              <Button variant="gold" size="lg" asChild>
                <Link to="/contact">
                  Request Live Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-4xl font-light text-foreground mb-6">
            Ready to <span className="text-gradient-gold font-medium">Get Started?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Bring the future of fragrance to your space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="gold-outline" size="lg" asChild>
              <Link to="/for-brands">For Brands</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
