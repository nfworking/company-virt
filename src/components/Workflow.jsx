import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-20 transition-all duration-1300 dark:text-white">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          coding workflow...
        </span>
      </h2>
      <div className="flex flex-wrap justify-center rounded-lg">
        <div className="p-1 w-full lg:w-1/2 transition duration-300 rounded-lg dark:bg-gradient-to-r from-orange-500 to-orange-800 mt-8 bg-clip-image">
          <img src={codeImg} alt="Coding" className="rounded-lg" />
        </div>
        <div className="pt-12 w-full lg:w-1/2  ">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12 dark:text-white">
              <div className="text-green-400 mx-6 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md dark:text-white ">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
