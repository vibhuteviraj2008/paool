import { motion } from "framer-motion";
import { SIGNAL_ITEMS } from "@/lib/signals-data";
import { Section } from "@/components/Section";
import { SiInstagram, SiX, SiLinkedin, SiYoutube } from "react-icons/si";
import { Play } from "lucide-react";

function getThumbnail(item: any) {
  if (item.thumbnailUrl) return item.thumbnailUrl;
  
  // Default placeholder if no thumbnail provided
  return "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop";
}

export default function Signals() {
  const sortedSignals = [...SIGNAL_ITEMS].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="pt-32 pb-24">
      <Section>
        <div className="max-w-4xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-6xl mb-6"
          >
            Signals
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground font-light"
          >
            A curated stream of our active work, thinking, and field observations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sortedSignals.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-background/40 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-sm"
            >
              <a 
                href={item.redirectUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 flex flex-col group"
              >
                {item.thumbnailUrl && (
                  <div className="aspect-square relative cursor-pointer overflow-hidden">
                    <img 
                      src={getThumbnail(item) || ""} 
                      alt={item.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                          <Play className="w-6 h-6 text-white fill-white" />
                        </div>
                      </div>
                    )}
                  </div>
                )}
                
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono text-primary uppercase tracking-widest">{item.date}</span>
                      <div className="text-muted-foreground">
                        {item.platform === 'Instagram' && <SiInstagram className="w-4 h-4" />}
                        {item.platform === 'X' && <SiX className="w-4 h-4" />}
                        {item.platform === 'LinkedIn' && <SiLinkedin className="w-4 h-4" />}
                        {item.platform === 'YouTube' && <SiYoutube className="w-4 h-4" />}
                      </div>
                    </div>
                    <h3 className="font-serif text-2xl mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
