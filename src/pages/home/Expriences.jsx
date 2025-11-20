import expriencesImg from "../../assets/expricences.png";
import Button from "../../components/Button";

const Expriences = () => {
  return (
    <section className="w-11/12 container mx-auto py-6 px-4 my-24 flex flex-col md:flex-row items-center justify-between md:gap-20 gap-8">
      <div className="md:w-1/2 md:h-[541px]">
        <img src={expriencesImg} alt="" className="h-full w-full" />
      </div>
      <div className="md:w-1/2 mx-auto">
        <h3 className="uppercase text-lg font-bold text-amber-500 mb-4">
          experiences
        </h3>
        <h2 className="capitalize text-4xl font-bold mb-4 lg:w-1/2">
          we provide you the best experience
        </h2>
        <p className="text-black dark:text-white mb-5 lg:w-2/3">
          You dont't have worry about the result because all of these interiours
          are made by people who are professionals in their fields with an
          elegant and lucurious style and with premiu quality materials.
        </p>

        <Button text="More Info" />
      </div>
    </section>
  );
};

export default Expriences;
