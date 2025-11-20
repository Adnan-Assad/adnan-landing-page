import Button from "../../components/Button";

import materialImg1 from "../../assets/material1.png";
import materialImg2 from "../../assets/material2.png";
import materialImg3 from "../../assets/material3.png";

const Materials = () => {
  return (
    <section className="w-11/12 container mx-auto py-6 px-4 my-24 flex flex-col md:flex-row items-center justify-between md:gap-20 gap-8">
      <div className="md:w-1/2 mx-auto">
        <h3 className="uppercase text-lg font-bold text-amber-500 mb-4">
          materials
        </h3>
        <h2 className="capitalize text-4xl font-bold mb-4 lg:w-1/2">
          very serious materials for making furniture
        </h2>
        <p className="text-black dark:text-white mb-5 lg:w-1/2">
          Because Adnan was very serious about designing furniture for our
          environment, using a very expensive and famous capital but at a
          relatively low price.
        </p>

        <Button text="More Info" />
      </div>
      <div className="md:w-1/2 grid grid-cols-2 md:grid-cols-3 md:items-end items-center ">
        <div>
          <img src={materialImg1} alt="" />
          <img src={materialImg2} alt="" />
        </div>
        <div className="md:col-span-2 col-span-1">
          <img src={materialImg3} alt="" className="w-full md:h-[541]" />
        </div>
      </div>
    </section>
  );
};

export default Materials;
