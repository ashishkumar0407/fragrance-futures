import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import productDevice from "@/assets/product-device.jpg";
import heroImage from "@/assets/hero-fragrance.jpg";

const specifications = [
  { label: "Dimensions", value: "45cm x 30cm x 25cm" },
  { label: "Weight", value: "12 kg" },
  { label: "Power", value: "100-240V AC" },
  { label: "Connectivity", value: "WiFi, 4G LTE" },
  { label: "Display", value: '10" HD Touchscreen' },
  { label: "Capacity", value: "6 Fragrance Cartridges" },
];

const features = [
  "Contactless gesture activation",
  "HD touchscreen interface",
  "Cloud-based management",
  "Real-time usage analytics",
  "Modular cartridge system",
  "Anti-tamper security",
  "OTA firmware updates",
  "24/7 remote monitoring",
];

const Product = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-6">
                The Product
              </p>
              <h1 className="font-display text-5xl md:text-6xl font-light text-foreground mb-8 leading-tight">
                FRAGO
                <span className="block text-gradient-gold font-medium">Smart Dispenser</span>
              </h1>
              <p className="text-muted-foreground text-xl leading-relaxed mb-8">
                A premium IoT device that brings automated fragrance experiences
                to any space. Engineered for reliability, designed for luxury.
              </p>
              <Button variant="gold" size="lg" asChild>
                <Link to="/contact">
                  Request Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={productDevice}
                alt="FRAGO Smart Dispenser"
                className="rounded-2xl shadow-elevated mx-auto"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl font-light text-foreground mb-6">
              Built for <span className="text-gradient-gold font-medium">Excellence</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Every feature designed with precision and purpose.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border"
              >
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src={heroImage}
                alt="FRAGO Device Detail"
                className="rounded-2xl shadow-elevated"
              />
            </div>
            <div>
              <h2 className="font-display text-4xl font-light text-foreground mb-8">
                Technical <span className="text-gradient-gold font-medium">Specifications</span>
              </h2>
              <div className="space-y-4">
                {specifications.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex justify-between items-center py-4 border-b border-border"
                  >
                    <span className="text-muted-foreground">{spec.label}</span>
                    <span className="text-foreground font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-4xl font-light text-foreground mb-6">
            Experience It <span className="text-gradient-gold font-medium">Yourself</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Schedule a demo to see the FRAGO device in action.
          </p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/contact">
              Schedule Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Product;
