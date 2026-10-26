function About() {
  const features = [
    "Quality Education",
    "Experienced Faculty",
    "Modern Infrastructure",
    "Career Opportunities"
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-blue-700 text-center">
        About Us
      </h1>

      <p className="text-gray-600 text-center mt-6 max-w-3xl mx-auto">
        Welcome to our college! We are committed to providing
        quality education, developing student skills, and
        preparing students for a successful future.
      </p>

      <div className="grid md:grid-cols-2 gap-10 mt-12 items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Who We Are
          </h2>

          <p className="text-gray-600 mt-4 leading-7">
            Our college provides a supportive learning
            environment where students can explore their
            interests, gain knowledge, and achieve their goals.
            We focus on academic excellence, practical learning,
            and the overall development of every student.
          </p>

          <button className="bg-blue-600 text-white px-6 py-3 rounded mt-6 hover:bg-blue-700">
            Learn More
          </button>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-blue-700">
            Why Choose Us?
          </h2>

          <div className="mt-6 space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded shadow"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {feature}
                </h3>

                <p className="text-gray-600 mt-2">
                  We help students build knowledge, confidence,
                  and skills for their future careers.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;