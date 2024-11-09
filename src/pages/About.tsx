export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">About Safe Steps Kenya</h1>
          <p className="text-xl">Dedicated to providing safe homes and bright futures for children in Kenya</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded by John Ferguson, Safe Steps Kenya began its journey in 2008 with a simple yet powerful mission: 
              to provide safe housing and support for vulnerable children in Kenya. What started as a small initiative 
              has grown into a comprehensive program that has touched the lives of hundreds of children.
            </p>
            <p className="text-gray-600 mb-6">
              Our registration number OP.218/069/10-442/10892 marks our official recognition as a non-governmental 
              organization committed to making a lasting difference in our community.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Children at Safe Steps Kenya"
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide safe, nurturing homes for vulnerable children in Kenya while ensuring access to education, 
              healthcare, and emotional support needed for their holistic development.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              A Kenya where every child has access to safe housing, quality education, and the opportunity to reach 
              their full potential.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                alt="John Ferguson"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-2">John Ferguson</h3>
              <p className="text-gray-600">Founder & Executive Director</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}