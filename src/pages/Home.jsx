import React from "react";
import Articles from "../components/Articles";

function Home() {
  return (
    <div className="">
      <video
        className="w-full"
        playsInline
        loop
        muted
        autoPlay
      >
        <source
          className="mp4 desktop"
          src="https://www.activision.com/cdn/crash/crash_team_rumble.mp4"
          type="video/mp4"
        />
      </video>

      <Articles />

      <section className="flex flex-col-reverse lg:flex-row border-t-1 border-b-1 border-gray-500">
        <div className="flex items-center  justify-center bg-black">
          <div className="p-5 h-full flex flex-col items-center lg:items-start  justify-center lg:w-4/5 gap-3 text-white">
            <h1 className="text-2xl font-bold">We're here to help!</h1>
            <p className="w-3/4 text-2xl">
              Get answers to frequently asked questions, check server status,
              and engage with a support expert
            </p>
            <button className="border-1 border-white lg:self-start w-35 h-9 mt-3 rounded-xl">
              VISIT SUPPORT
            </button>
          </div>
        </div>
        <div>
          <img className="h-full" src="support-banner-v3.jpg" alt="" />
        </div>
      </section>

      <section>
        <div className="flex flex-col lg:flex-row gap-5 items-center border-t-1 border-b-1 border-gray-500 bg-black text-white">
          <img className="lg:relative lg:w-2/3 mask-x-from-75% lg:mask-x-to-95%" src="spyro.png" alt="" />
          <div className="lg:absolute flex flex-col gap-3 mx-5">
            <h1 className="text-blue-600 text-4xl font-bold">HAVE FUN</h1>
            <p className="text-xl">Learn more about job opportunities</p>
            <button className="border w-40 h-10 rounded-xl">JOIN US</button>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-4xl text-center lg:text-start">Our Teams</p>
            <ul className="flex gap-5">
              <div>
                <li>Game Design</li>
                <li>Art &amp; Animation</li>
                <li>Brand Management</li>
                <li>Production</li>
                <li>Quality Assurance</li>
              </div>
              <div>
                <li>Customer Support</li>
                <li>Studio Operations</li>
                <li>Programming</li>
                <li>Finance &amp; Accounting</li>
                <li>Human Resources</li>
              </div>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
