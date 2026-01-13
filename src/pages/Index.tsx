import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wifi, Sparkles, Shield, BarChart3, Zap, Globe } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import heroImage from "@/assets/hero-fragrance.jpg";
import fragranceMist from "@/assets/fragrance-mist.jpg";
import fragoMachine from "@/assets/frago-machine.png";

const features = [
  {
    icon: Wifi,
    title: "IoT Connected",
    description: "Cloud-based monitoring and remote management of all deployed devices.",
  },
  {
    icon: Sparkles,
    title: "Contactless Experience",
    description: "Gesture-activated dispensing for hygienic, touch-free fragrance delivery.",
  },
  {
    icon: Shield,
    title: "Enterprise Grade",
    description: "Built for high-traffic environments with industrial-grade reliability.",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Track usage patterns, popular scents, and optimize fragrance inventory.",
  },
];

const steps = [
  {
    number: "01",
    title: "Approach",
    description: "Users approach the FRAGO device in retail spaces, malls, or events.",
  },
  {
    number: "02",
    title: "Select",
    description: "Choose from curated fragrances via the touchscreen or gesture control.",
  },
  {
    number: "03",
    title: "Experience",
    description: "Enjoy a precise, contactless spray of premium fragrance.",
  },
  {
    number: "04",
    title: "Connect",
    description: "Scan QR to purchase full-size products or save preferences.",
  },
];

const brandBenefits = [
  {
    icon: Globe,
    title: "Expand Reach",
    description: "Place your fragrances in high-traffic locations worldwide.",
  },
  {
    icon: BarChart3,
    title: "Data Insights",
    description: "Understand customer preferences with detailed analytics.",
  },
  {
    icon: Zap,
    title: "Drive Sales",
    description: "Convert trial experiences into immediate purchases.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="FRAGO Smart Fragrance Device"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-6 animate-fade-up opacity-0" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
              Smart Fragrance Automation
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-normal text-foreground mb-8 leading-[1.1] animate-fade-up opacity-0" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
              The Future of Smart
              <span className="block text-gradient-gold font-semibold">Fragrance Experiences</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up opacity-0" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
              IoT-powered machines delivering automated, contactless perfume experiences
              in malls, airports, retail stores, and events worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0" style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
              <Button variant="hero" asChild>
                <Link to="/contact">
                  Partner With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" asChild>
                <Link to="/product">Explore Product</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
                About FRAGO
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-normal text-foreground mb-6 leading-tight">
                Redefining How the World
                <span className="block text-gradient-gold font-semibold">Experiences Scent</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                FRAGO is pioneering the future of fragrance discovery through cutting-edge
                IoT technology. Our smart dispensing systems bring premium scent experiences
                to public spaces, creating memorable brand moments.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Founded by fragrance enthusiasts and tech innovators, we bridge the gap
                between luxury perfumery and modern retail technology.
              </p>
              <Button variant="gold-outline" asChild>
                <Link to="/about">
                  Learn Our Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative">
                <img
                  src={fragranceMist}
                  alt="Fragrance mist visualization"
                  className="rounded-2xl shadow-elevated"
                />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/30 rounded-full blur-2xl" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Product Features
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-normal text-foreground mb-6">
              Technology Meets
              <span className="text-gradient-gold font-semibold"> Luxury</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Every FRAGO device is engineered for precision, reliability, and unforgettable
              customer experiences.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-gold h-full">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-medium text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-32 bg-card">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
              How It Works
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-normal text-foreground mb-6">
              Seamless
              <span className="text-gradient-gold font-semibold"> Experience</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              From approach to purchase, every interaction is designed for delight.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <StaggerItem key={step.number}>
                <div className="relative">
                  <div className="text-8xl font-display font-light text-primary/10 absolute -top-4 left-0">
                    {step.number}
                  </div>
                  <div className="pt-16 relative z-10">
                    <h3 className="font-display text-2xl font-medium text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 w-8 h-px bg-border translate-x-4" />
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={0.4} className="text-center mt-16">
            <Button variant="gold" size="lg" asChild>
              <Link to="/how-it-works">
                See Full Process
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left" className="order-2 lg:order-1 relative">
              <img
                src={fragoMachine}
                alt="FRAGO Device"
                className="rounded-2xl shadow-elevated mx-auto max-h-[500px] object-contain"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2} className="order-1 lg:order-2">
              <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
                The Device
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-normal text-foreground mb-6 leading-tight">
                Precision Engineered
                <span className="block text-gradient-gold font-semibold">For Excellence</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                The FRAGO device combines sleek aesthetics with robust engineering.
                Premium materials, intuitive interface, and modular fragrance cartridges
                make it the perfect addition to any luxury retail environment.
              </p>
              <ul className="space-y-4 mb-8">
                {["Multi-fragrance capacity", "HD touchscreen display", "IoT connectivity", "Anti-tamper design"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="gold" asChild>
                <Link to="/product">
                  View Specifications
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* For Brands Section */}
      <section className="py-32 bg-card">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
              For Brands
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-normal text-foreground mb-6">
              Elevate Your
              <span className="text-gradient-gold font-semibold"> Brand Presence</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Partner with FRAGO to bring your fragrances to new audiences and spaces.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-8 mb-12">
            {brandBenefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <div className="text-center p-8 rounded-2xl bg-background border border-border h-full">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-medium text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={0.3} className="text-center">
            <Button variant="gold" size="lg" asChild>
              <Link to="/for-brands">
                Explore Partnership
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-6xl font-normal text-foreground mb-6">
              Ready to Transform
              <span className="block text-gradient-gold font-semibold">Fragrance Retail?</span>
            </h2>
            <p className="text-muted-foreground text-xl mb-12 max-w-2xl mx-auto">
              Join the future of scent discovery. Partner with FRAGO to bring
              smart fragrance experiences to your locations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" asChild>
                <Link to="/contact">
                  Get In Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" asChild>
                <Link to="/for-brands">Learn More</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
