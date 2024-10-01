import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide dark:text-white text-black transition-all duration-1300">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 text-black">
        What People are saying
      </h2>
      <div className="flex flex-wrap justify-center dark:text-white text-black">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 dark:text-white text-black">
            <div className="dark:bg-black dark:text-white rounded-md text-black p-6 border border-neutral-800 font-thin">
              <p className="dark:text-white text-black">{testimonial.text}</p>
              <div className="flex mt-8 items-start text-black">
                <img
                  className="w-12 h-12 mr-6 rounded-full text-black "
                  src={testimonial.image}
                  alt=""
                />
                <div>
                  <h6 className="text-black">{testimonial.user}</h6>
                  <span className="text-sm font-normal text-black dark:text-white">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
