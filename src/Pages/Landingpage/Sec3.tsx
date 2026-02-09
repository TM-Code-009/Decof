import project1 from "../../assets/logo.png";
import project2 from "../../assets/logo.png";
import project3 from "../../assets/logo.png";
import project4 from "../../assets/logo.png";
import project5 from "../../assets/logo.png";
import project6 from "../../assets/logo.png";
import project7 from "../../assets/logo.png";
import project8 from "../../assets/logo.png";
import project9 from "../../assets/logo.png";

const projects = [
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
];

const Sec3 = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Selected Projects & Capacity
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl">
            Our portfolio reflects our commitment to excellence. From educational
            materials to high-level corporate reports, we deliver value.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-3">
          {projects.map((img, index) => (
            <div
              key={index}
              className="relative w-full aspect-square overflow-hidden rounded-xl bg-gray-100 group"
            >
              <img
                src={img}
                alt={`Project ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <button className="px-8 py-3 rounded-lg bg-gradient-to-b from-[#1F58B9] to-[#21C0E6] text-white font-semibold hover:opacity-90 transition">
            View Full Portfolio
          </button>
        </div>

      </div>
    </section>
  );
};

export default Sec3;
