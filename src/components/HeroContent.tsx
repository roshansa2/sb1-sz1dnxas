import { motion } from 'framer-motion';
import { PartyPopper, Clock, Music } from 'lucide-react';

export function HeroContent() {
  return (
    <div className="flex items-center justify-center p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left"
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
          CLOUD9
        </h1>
        <p className="text-lg sm:text-xl mb-8 text-gray-300">
          Experience Luxury at New Heights
        </p>

        <div className="flex flex-col gap-4 mb-8">
          <Feature
            icon={<PartyPopper className="w-6 h-6 text-yellow-500" />}
            title="Elite Events"
            description="World-class DJs and performances"
          />
          <Feature
            icon={<Clock className="w-6 h-6 text-yellow-500" />}
            title="Open Hours"
            description="10 PM - 6 AM"
          />
          <Feature
            icon={<Music className="w-6 h-6 text-yellow-500" />}
            title="Premium Sound"
            description="State-of-the-art audio system"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-500 text-black px-6 py-3 rounded-full text-base font-bold hover:bg-yellow-400 transition-colors duration-200"
        >
          Book VIP Table
        </motion.button>
      </motion.div>
    </div>
  );
}

function Feature({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-yellow-500/20"
    >
      <div className="flex items-center gap-4">
        {icon}
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}