import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Eye, Heart } from "lucide-react";
import fragranceMist from "@/assets/fragrance-mist.jpg";

const values = [
  {
    icon: Target,
    title: "Innovation",
    description: "Pushing boundaries in fragrance technology to create experiences never before possible.",
  },
  {
    icon: Eye,
    title: "Excellence",
    description: "Uncompromising quality in every device, every scent, every customer interaction.",
  },
  {
    icon: Heart,
    title: "Sustainability",
    description: "Designing for minimal environmental impact while maximizing sensory delight.",
  },
];

const milestones = [
  { year: "2022", event: "FRAGO founded in San Francisco" },
  { year: "2023", event: "First prototype deployed in luxury retail" },
  { year: "2024", event: "Series A funding secured" },
  { year: "2025", event: "Global expansion begins" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-6">
              About FRAGO
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-light text-foreground mb-8 leading-tight">
              Pioneering the
              <span className="block text-gradient-gold font-medium">Scent Revolution</span>
            </h1>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
              We're on a mission to transform how people discover and experience
              fragrances through innovative technology.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl font-light text-foreground mb-6">
                Our <span className="text-gradient-gold font-medium">Story</span>
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  FRAGO was born from a simple observation: the fragrance industry
                  was stuck in the past. While every other retail experience was
                  being transformed by technology, scent discovery remained unchanged
                  for decades.
                </p>
                <p>
                  Our founders—a team of fragrance enthusiasts, IoT engineers, and
                  retail innovators—set out to change this. We envisioned a world
                  where anyone could experience premium fragrances anywhere, anytime,
                  without the constraints of traditional retail.
                </p>
                <p>
                  Today, FRAGO devices are revolutionizing fragrance retail in
                  luxury malls, international airports, and flagship stores worldwide.
                  We're not just selling perfume—we're creating memorable moments.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={fragranceMist}
                alt="FRAGO journey"
                className="rounded-2xl shadow-elevated"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl font-light text-foreground mb-6">
              Our <span className="text-gradient-gold font-medium">Values</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-8 rounded-2xl bg-background border border-border text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-medium text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl font-light text-foreground mb-6">
              Our <span className="text-gradient-gold font-medium">Journey</span>
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex gap-8 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                  {index < milestones.length - 1 && (
                    <div className="w-px h-full bg-border mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-primary font-display text-2xl font-medium">
                    {milestone.year}
                  </span>
                  <p className="text-foreground mt-2">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-4xl font-light text-foreground mb-6">
            Join Our <span className="text-gradient-gold font-medium">Mission</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            We're always looking for passionate people to join our team.
          </p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/contact">
              Get In Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
