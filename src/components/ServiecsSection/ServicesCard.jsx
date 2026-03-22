import React from "react";

const ServicesCard = ({ ServicesCard }) => {
  const { icon, title, description } = ServicesCard;
  return (
    <>
      <div>
        <div className="flex items-center p-10 space-y-5 card card-body text-center card-border shadow-2xl h-full w-full rounded-2xl">
          <img src={icon} alt="" className="w-16 flex-1" />
          <h2 className="text-2xl font-bold text-green-500">{title}</h2>
          <p className="text-xl font-semibold text-green-700">{description}</p>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
