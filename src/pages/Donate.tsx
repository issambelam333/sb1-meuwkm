import { Heart } from 'lucide-react';

export default function Donate() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Make a Difference</h1>
          <p className="text-xl">Your support helps us provide safe homes for children in Kenya</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Impact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Your Impact</h2>
            <div className="space-y-6 text-gray-600">
              <p>
                Your donation helps us provide:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>Safe and nurturing homes for vulnerable children</li>
                <li>Quality education and school supplies</li>
                <li>Healthcare and nutritional support</li>
                <li>Psychological support and counseling</li>
                <li>Vocational training for older children</li>
              </ul>
              <p className="mt-6">
                Every contribution, no matter the size, makes a significant impact in transforming children's lives.
              </p>
            </div>
          </div>

          {/* Donation Button */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-center">
              <Heart className="w-16 h-16 text-red-500 mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4">Support Our Mission</h2>
              <p className="text-gray-600 mb-8">
                Your generous donation will help us continue our mission of providing safe homes and bright futures for children in Kenya.
              </p>
              <a
                href="https://donorbox.org/safe-steps-kenya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Donate Now
              </a>
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Your Donation at Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">$50</h3>
              <p className="text-gray-600">Provides school supplies for one child</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">$100</h3>
              <p className="text-gray-600">Ensures medical care for one month</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">$200</h3>
              <p className="text-gray-600">Sponsors housing for one child</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}