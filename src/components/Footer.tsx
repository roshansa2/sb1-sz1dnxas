import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-16 border-t border-yellow-500/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-200 bg-clip-text text-transparent mb-6">
              CLOUD9
            </h3>
            <p className="text-gray-400">
              Experience luxury nightlife at new heights. Where music, atmosphere, and elegance meet.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-yellow-500 mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-yellow-500" />
                123 Nightclub Street, City
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-yellow-500" />
                +1 234 567 890
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-yellow-500" />
                info@cloud9club.com
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-yellow-500 mb-4">Opening Hours</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Thursday: 10 PM - 3 AM</li>
              <li>Friday: 10 PM - 4 AM</li>
              <li>Saturday: 10 PM - 4 AM</li>
              <li>Sunday: 10 PM - 3 AM</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-yellow-500 mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Instagram size={20} />} />
              <SocialLink href="#" icon={<Facebook size={20} />} />
              <SocialLink href="#" icon={<Twitter size={20} />} />
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-yellow-500/20 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CLOUD9. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-full border border-yellow-500/20 flex items-center justify-center text-yellow-500 hover:bg-yellow-500 hover:text-black transition-colors duration-200"
    >
      {icon}
    </a>
  );
}