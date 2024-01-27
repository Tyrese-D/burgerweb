import React from "react";
import img from "..//assets/img/deals.jpg";

const Deals = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <div className="min-h screen container flex flex-col justify-center pt-16 md:pt-0">
        {/* Headiing*/}
        <h1 className=" rounded-lgfont-semibold text-4xl text-center text-secondary mt-5">Hungry for More? </h1>

        <div className="flex flex-col md:flex-row gap-10 mt-8" >
          <div className="w-full md:w-2/4">
            <img src={img} alt="img" />
          </div>
          {/* content section*/}
          <div className="w-full md:w-2/4 text-center md:text-start space-y-4 ">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">Special Combo!</h1>
            <h3 className="text-3xl md:text-4xl font-semibold text-secondary">Enjoy Our Special Combo Meal </h3>
            <p className="text-sm md:text-base text-gray-400">
            
             Mouthwatering Burger!
            </p>
            <button className="bg-primary py-2 px-4 text-white font-semibold rounded-md hover:scale-105 transition duration-300">Visit Now </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
