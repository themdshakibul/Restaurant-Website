const PopularCard = ({ item }) => {
  const { image, title, description } = item;
  return (
    <>
      <div>
        <div className="card card-body shadow-2xl rounded-2xl flex flex-col items-center text-center p-5 transition duration-300 hover:scale-105">
          <img
            src={image}
            alt=""
            className="w-40 h-40 rounded-full object-cover"
          />
          <div className="mt-5">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="line-clamp-2">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularCard;
