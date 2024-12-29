import { motion } from 'framer-motion';

export function Gallery() {
  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent">
            Moments at CLOUD9
          </h2>
          <p className="text-gray-400 text-lg">Glimpses of unforgettable nights</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-lg aspect-square"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <img
                src={image.url}
                alt={image.alt}
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <p className="text-lg font-semibold">{image.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const images = [
  {
    url: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&q=80",
    alt: "Club atmosphere",
    title: "Electric Nights"
  },
  {
    url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80",
    alt: "DJ performance",
    title: "World-class DJs"
  },
  {
    url: "https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&q=80",
    alt: "VIP area",
    title: "VIP Experience"
  },
  {
    url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80",
    alt: "Dance floor",
    title: "Dance Floor"
  },
  {
    url: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&q=80",
    alt: "Bar counter",
    title: "Premium Bar"
  },
  {
    url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80",
    alt: "Event night",
    title: "Special Events"
  }
];