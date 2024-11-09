export default function Programs() {
  const programs = [
    {
      title: "Safe Housing Initiative",
      description: "Providing secure and nurturing homes for vulnerable children, ensuring they have a stable environment to grow and thrive.",
      image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Education Support",
      description: "Ensuring access to quality education through school fees support, learning materials, and tutoring programs.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Healthcare Program",
      description: "Providing essential medical care, regular health check-ups, and nutritional support for all children under our care.",
      image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Skills Development",
      description: "Offering vocational training and life skills programs to prepare older children for independent living.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Our Programs</h1>
          <p className="text-xl">Comprehensive support for children's well-being and development</p>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={program.image} 
                alt={program.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">500+</h3>
              <p className="text-gray-600">Children Housed</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">100%</h3>
              <p className="text-gray-600">School Enrollment</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">95%</h3>
              <p className="text-gray-600">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}