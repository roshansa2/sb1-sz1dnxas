import { motion } from 'framer-motion';
import { Wine, Users, Sparkles } from 'lucide-react';

export function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-black via-black/95 to-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
            Experience Luxury
          </h2>
          <p className="text-gray-400 text-lg">Discover what makes CLOUD9 extraordinary</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-yellow-500/20 hover:border-yellow-500/40 transition-colors group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-yellow-100">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: <Wine className="w-8 h-8 text-yellow-500" />,
    title: "Premium Beverages",
    description: "Curated selection of finest spirits and signature cocktails crafted by expert mixologists"
  },
  {
    icon: <Users className="w-8 h-8 text-yellow-500" />,
    title: "VIP Experience",
    description: "Exclusive areas with personalized service and breathtaking views of the dance floor"
  },
  {
    icon: <Sparkles className="w-8 h-8 text-yellow-500" />,
    title: "Special Events",
    description: "Regular appearances by world-renowned DJs and unforgettable themed parties"
  }
];