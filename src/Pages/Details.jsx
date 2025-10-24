import { useLocation, useParams } from "react-router";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

function Details() {
  const location = useLocation();
  const params = useParams();
  const [toy, setToy] = useState(location.state || null);

  useEffect(() => {
    if (!toy) {
      fetch("/Data.json")
        .then((res) => res.json())
        .then((data) => {
          const selectedToy = data.find((item) => item.toyId == params.toyId);
          setToy(selectedToy);
        });
    }
  }, [params.toyId, toy]);

  console.log(toy);

  if (!toy) return <p>Loading toy data...</p>;

  const {
    toyName,
    pictureURL,
    rating,
    availableQuantity,
    sellerName,
    sellerEmail,
    description,
    subCategory,
  } = toy;

  const showmsg = () => {
    toast.success("submit successfully");
  };
  return (
    <div className="">
      <Helmet>
        <title>Details</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse gap-20">

          <div className="text-center  lg:text-left text-orange-400">
            <img
              className="mx-auto pb-10 rounded-2xl border-2 border-amber-400"
              src={pictureURL}
              alt=""
            />
            <h1 className="text-5xl font-bold">{toyName}</h1>
            <p className="py-6 text-orange-400">{description}</p>
            <p>
              sellerEmail: <span className="font-bold">{sellerEmail}</span>
            </p>
            <p>
              sellerName: <span className="font-bold">{sellerName}</span>
            </p>
            <p>
              subCategory: <span className="font-bold">{subCategory}</span>
            </p>
          </div>
          <div className="card bg-base-100  w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body ">
              <form onSubmit={showmsg}>
                <fieldset className="fieldset text-orange-400">
                <h1 className="text-orange-400 text-center font-semibold text-2xl py-3">
                  try now form
                </h1>
                <label className="label">Name</label>
                <input type="text" className="input " placeholder="Name" required/>

                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" required/>
                <button
                  
                  className="btn bg-orange-600 mt-4 text-white"
                >
                  Try Now
                </button>
              </fieldset>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Details;
