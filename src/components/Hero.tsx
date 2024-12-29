import { motion } from 'framer-motion';
import { PartyPopper, Clock, Music } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-10" />
      
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1571159384138-a56c84b7b5f7?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-8 bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
            CLOUD9
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-gray-300">
            Experience Luxury at New Heights
          </p>

          <div className="flex flex-col gap-4 max-w-4xl mx-auto mb-8 sm:mb-12">
            <Feature
              icon={<PartyPopper className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-500" />}
              title="Elite Events"
              description="World-class DJs and performances"
            />
            <Feature
              icon={<Clock className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-500" />}
              title="Open Hours"
              description="10 PM - 6 AM"
            />
            <Feature
              icon={<Music className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-500" />}
              title="Premium Sound"
              description="State-of-the-art audio system"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 text-black px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-bold hover:bg-yellow-400 transition-colors duration-200"
          >
            Book VIP Table
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

function Feature({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="bg-black/40 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-yellow-500/20"
    >
      <div className="flex items-center gap-4">
        {icon}
        <div className="text-left">
          <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
          <p className="text-sm sm:text-base text-gray-400">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}