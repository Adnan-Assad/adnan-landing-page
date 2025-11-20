import React from "react";
import Button from "../../components/Button";

const WhyChoose = () => {
  return (
    <section className="w-11/12 container mx-auto py-6 px-4">
      <div className="my-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-8 lg:gap-12 text-left">
        <div>
          <h2 className="text-4xl font-bold">
            Why <br />
            Choosing Us
          </h2>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-3">Luxury facilities</h3>
          <p className="text-base mb-2">
            The advantage of hiring a workspace with us is that givees you
            comfortable service and all-round facilities.
          </p>
          <Button text="More Info" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-3">Affordable Price</h3>
          <p className="text-base mb-2">
            You can get a workspace of the hights quality at an affordable price
            and still enjoy the facilities that are oly here.
          </p>
          <Button text="More Info" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-3">Many Choices</h3>
          <p className="text-base mb-2">
            We provide many qnique work space choices so that you can choose the
            work space to your liking.
          </p>
          <Button text="More Info" />
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
