import { motion } from "framer-motion";
import { Section } from "@/components/Section";

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <Section>
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-7xl mb-12"
          >
            Traditions, <br />
            <span className="text-primary italic">Reconsidered Responsibly</span>
          </motion.h1>

          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed font-light max-w-3xl">
            <p>
              PAOOL is an early stage sustainability initiative, presently working on an environmentally responsible alternative to traditional Plaster of Paris Ganesha idols. The intention is to address the environmental damage caused by commonly used idols, while respecting the cultural meaning behind the practice. This work is driven by the belief that devotion and responsibility should not stand in opposition to each other.
            </p>
            
            <h2 className="font-serif text-3xl text-foreground pt-8">The Consumer Reality</h2>
            <p>
              PAOOL treats this challenge as a real world design and system problem, not just an emotional or symbolic one. People often choose harmful options not because they do not care, but because affordable and practical alternatives are limited. Our approach begins with understanding cost constraints, usability, and environmental impact together, before attempting to propose a solution.
            </p>

            <div className="bg-background/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl space-y-6">
              <h3 className="font-serif text-xl text-foreground">Our Current Goals</h3>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="text-primary font-mono">01.</span>
                  <span>Eco-friendly Idol: To develop a Ganesha idol that does not pollute water, soil, or surrounding ecosystems.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-mono">02.</span>
                  <span>Affordability for Price Sensitive Users: To ensure the alternative remains accessible and does not become a premium-only option.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-mono">03.</span>
                  <span>Scaling: To Launch a Pilot next Ganesha Chaturthi, and conduct tests</span>
                </li>
              </ul>
            </div>

            <p>
              PAOOL is currently in the development phase. The focus right now is on research, material testing, and refining the approach to ensure the alternative can work in real conditions. The outcome is still being shaped, and this space will evolve as the work progresses.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}