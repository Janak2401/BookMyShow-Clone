import React from "react";
import { BiShareAlt } from 'react-icons/bi';

// Razorpay Integration
const launchRazorPay = () => {
  let options = {
    key: "rzp_test_DTHIoyHREKEq5i",
    amount: 49900,
    currency: "INR",
    name: "Book My Show clone",
    description: "Movie purchase",
    image: "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
    handler: () => {
      alert("Payment Successful")
    },
    theme: {color: "#c4242d"}
  };

  let rzp = new window.Razorpay(options);
  rzp.open();
};

const MovieHero = () => {
  return (
    <>
      <div className="md:hidden">
        <img
          src="https://in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/the-suicide-squad-et00309402-27-09-2021-01-23-30.jpg"
          alt="poster"
        />
      </div>

      <div className="hidden md:block lg:hidden">
        <img
          src="https://in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/the-suicide-squad-et00309402-27-09-2021-01-23-30.jpg"
          alt="poster"
        />
      </div>

      <div className="relative hidden lg:block" style={{ height: "30rem" }}>
        <div
          className="absolute h-full w-full z-10"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)",
          }}
        />
        <img
          src="https://in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/the-suicide-squad-et00309402-27-09-2021-01-23-30.jpg"
          alt="poster"
          className="w-full h-full object-cover"
        />
        <div className="absolute left-64 top-10 z-30 w-3/4">
          <div className="flex items-center gap-8">
            <img
              src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-suicide-squad-et00309402-27-09-2021-01-23-30.jpg"
              alt="poster"
              className="w-64 h-96 rounded-xl"
            />
            <div className="flex flex-col gap-4 pr-8">
              <h1 className="text-white text-4xl font-bold">The Suicide Squad</h1>
              <p className="text-white text-sm mb-2">English</p>
              <button onClick={launchRazorPay}
              class="bg-red-500 hover:bg-red-600 text-white text-xl py-2 px-4 rounded">
                Book Tickets
              </button>
            </div>
          </div>
          <div className="absolute top-0 right-0">
            <div className="flex gap-4 items-center bg-black bg-opacity-30 rounded p-3">
              <BiShareAlt className="text-white w-8 h-8"/>
              <span className="text-xl text-white">Share</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieHero;
