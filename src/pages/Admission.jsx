function Admission() {
  const admissionSteps = [
    "Choose Your Course",
    "Fill Out Application Form",
    "Submit Required Documents",
    "Pay Admission Fees",
    "Confirm Your Admission",
    "Start Your Classes"
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-blue-700 text-center">
        Admissions
      </h1>

      <p className="text-gray-600 text-center mt-6 max-w-3xl mx-auto">
        Welcome to our admission portal! Start your academic
        journey with us and take the first step toward a
        successful career.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {admissionSteps.map((step, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-6 rounded-lg"
          >
            <h2 className="text-xl font-bold text-gray-800">
              {index + 1}. {step}
            </h2>

            <p className="text-gray-600 mt-3">
              {index === 0 &&
                "Select the course that matches your interests and career goals."}

              {index === 1 &&
                "Complete the admission application form with accurate details."}

              {index === 2 &&
                "Provide the necessary academic certificates and documents."}

              {index === 3 &&
                "Pay the applicable admission fees according to college guidelines."}

              {index === 4 &&
                "Complete the admission process and receive confirmation from the college."}

              {index === 5 &&
                "Join your classes and begin your learning journey with us."}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 p-8 rounded-lg mt-12 text-center">
        <h2 className="text-2xl font-bold text-blue-700">
          Apply for Admission
        </h2>

        <p className="text-gray-600 mt-3">
          Take the next step toward your future. Contact our
          admission office for eligibility criteria, important
          dates, and required documents.
        </p>

        <button className="bg-blue-600 text-white px-6 py-3 rounded mt-6 hover:bg-blue-700">
          Apply Now
        </button>
      </div>
    </div>
  );
}

export default Admission;