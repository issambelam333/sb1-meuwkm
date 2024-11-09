import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-4">Providing Safe Homes for Children in Kenya</h1>
              <p className="text-xl mb-8">Building a better future for vulnerable children through shelter, education, and care.</p>
              <Link
                to="/donate"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Make a Difference Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">500+</h3>
              <p className="text-gray-600">Children Helped</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">15</h3>
              <p className="text-gray-600">Years of Service</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">20+</h3>
              <p className="text-gray-600">Active Programs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Programs */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1511949860663-92c5c57d48a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Safe Housing"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Safe Housing</h3>
                <p className="text-gray-600 mb-4">Providing secure and nurturing homes for vulnerable children.</p>
                <Link to="/programs" className="text-blue-600 hover:text-blue-700 font-medium">Learn More →</Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Education Support"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Education Support</h3>
                <p className="text-gray-600 mb-4">Ensuring access to quality education and learning resources.</p>
                <Link to="/programs" className="text-blue-600 hover:text-blue-700 font-medium">Learn More →</Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Healthcare"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Healthcare</h3>
                <p className="text-gray-600 mb-4">Providing essential medical care and health support.</p>
                <Link to="/programs" className="text-blue-600 hover:text-blue-700 font-medium">Learn More →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}