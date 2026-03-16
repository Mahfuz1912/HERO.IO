import { useLoaderData } from "react-router-dom";
import downloadeImage from "/assets/icon-downloads.png";
import ratingImage from "/assets/icon-ratings.png";
import reviewImage from "/assets/icon-review.png";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
const SingleCardDetails = () => {
  //   const params = useParams();
  //   useEffect(() => {
  //     fetch("/Data.json")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         const singleData = data.find((detail) => detail.id == params.id);
  //         console.log(singleData);
  //       });
  //   }, [params.id]);

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

  //   const renderStars = (rating) => {
  //     const fullStars = Math.floor(rating);
  //     const hasHalf = rating % 1 !== 0;
  //     const stars = [];
  //     for (let i = 0; i < fullStars; i++) {
  //       stars.push(
  //         <svg key={i} className="w-5 h-5 fill-current text-yellow-500" viewBox="0 0 20 20">
  //           <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
  //         </svg>
  //       );
  //     }
  //     if (hasHalf) {
  //       stars.push(
  //         <svg key="half" className="w-5 h-5 fill-current text-yellow-500" viewBox="0 0 20 20">
  //           <defs>
  //             <linearGradient id="halfGrad">
  //               <stop offset="50%" stopColor="currentColor" />
  //               <stop offset="50%" stopColor="#d1d5db" /> {/* gray-300 */}
  //             </linearGradient>
  //           </defs>
  //           <path fill="url(#halfGrad)" d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
  //         </svg>
  //       );
  //     }
  //     // fill remaining with empty stars (optional, but we'll just return what we have)
  //     return stars;
  //   };

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
          <button className="bg-[#00D390] btn text-white">
            Install Now ({size} MB)
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
