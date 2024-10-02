import { features } from "../constants";

const Fakesample = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px] transition-all duration-1300">
      <div className="text-center ">
      
      </div>
      <div className="flex flex-wrap  lg:mt-20 hover:scale-105% dark:text-white hidden">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 hover:scale-105% dark:text-white hidden">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl dark:text-white">{feature.text}</h5>
                <p className="text-md p-2 mb-20 dark:text-white">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fakesample;
