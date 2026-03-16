import { useLoaderData } from "react-router-dom";
import downloadeImage from "/assets/icon-downloads.png";
import ratingImage from "/assets/icon-ratings.png";
import reviewImage from "/assets/icon-review.png";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
const SingleCardDetails = () => {
  const data = useLoaderData();

  const {
    title,
    image,
    description,
    downloads,
    ratingAvg,
    companyName,
    id,
    size,
    reviews,
    ratings,
  } = data;
  const sortedRatings = [...ratings].sort((a, b) => b.count - a.count);

  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    const appInstalled = installedApps.some(app => app.id === id);
    setIsInstalled(appInstalled);
  }, [id]);

  const handleInstall = (id) => {
    const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    if (!installedApps.some(app => app.id === id)) {
      installedApps.push(data);
      localStorage.setItem("installedApps", JSON.stringify(installedApps));
      setIsInstalled(true);
      toast.success(`${title} installed successfully!`);
    } else {
      toast.info(`${title} is already installed.`);
    }
  };

  return (
    <div>
      <div className="flex gap-4 mt-4">
        <div className="flex w-87.5 h-87.5">
          <img
            src={image}
            alt={title}
            className="w-87.5 h-87.5 object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col space-y-6">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className=" text-xl">
            Developed by{" "}
            <span className="font-semibold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              {" "}
              {companyName}
            </span>
          </p>
          <div className="divider"></div>
          <div className="flex gap-10 mt-4 justify-center items-center">
            <div>
              <img className="w-10 h-10" src={downloadeImage} alt="Downloads" />
              <p>Downloads</p>
              <p className="text-5xl font-extrabold">{downloads / 1000000}M</p>
            </div>
            <div>
              <img className="w-10 h-10" src={ratingImage} alt="Ratings" />
              <p>Ratings</p>
              <p className="text-5xl font-extrabold">{ratingAvg}</p>
            </div>
            <div>
              <img className="w-10 h-10" src={reviewImage} alt="Reviews" />
              <p>Reviews</p>
              <p className="text-5xl font-extrabold">{reviews / 1000}K</p>
            </div>
          </div>
          <button
            onClick={() => handleInstall(id)}
            className={`btn text-white ${isInstalled ? 'bg-gray-500' : 'bg-[#00D390]'}`}
            disabled={isInstalled}
          >
            {isInstalled ? 'Installed' : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>
      <div className="divider"></div>
      <div className=" mt-5 ">
        <h1 className="text-2xl font-bold ">Ratings</h1>

        <BarChart
          data={sortedRatings}
          width="100%"
          height={300}
          layout="vertical"
        >
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" width={60} />
          <Tooltip />
          <Bar dataKey="count" fill="#FF8811" barSize={30} />
        </BarChart>
      </div>
      <div className="divider"></div>
      <div className=" mt-5 ">
        <h1 className="text-2xl font-bold ">Description</h1>
        <p className="mt-3">{description}</p>
      </div>
    </div>
  );
};

export default SingleCardDetails;
