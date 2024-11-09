import { Facebook, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Safe Steps Kenya</h3>
            <p className="text-gray-400">Registration No: OP.218/069/10-442/10892</p>
            <div className="mt-4 flex items-center space-x-2">
              <a
                href="https://web.facebook.com/SafeStepsKenya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Box 55, Nakuru, Kenya
              </p>
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                +254 59 22359
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                info@safestepskenya.org
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/programs" className="hover:text-white">Our Programs</a></li>
              <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
              <li><a href="/donate" className="hover:text-white">Donate</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Safe Steps Kenya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}