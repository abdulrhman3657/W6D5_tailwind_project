import React from "react";
import PeopleCards from "../components/PeopleCards";
import GamesCards from "../components/GamesCards";

function About() {
  return (
    <div className="bg-black text-white">
      <div>
        <img
          src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/atvi-about-hero.jpg"
          alt=""
        />
      </div>

      <div className="flex flex-col items-center gap-5">
        <h1 className="text-3xl font-bold p-5">Our Mission</h1>
        <hr className="text-gray-500 w-8/10" />
        <p className="w-8/10 text-center p-3 mb-5">
          At Activision, we strive to create the most iconic brands in gaming
          and entertainment. We’re driven by our mission to deliver unrivaled
          gaming experiences for the world to enjoy, together. Home to iconic
          franchises like Call of Duty®, Crash Bandicoot™, and Tony Hawk’s™ Pro
          Skater™, we're a global leader in interactive entertainment. Our goal?
          Delight millions with innovative, fun, and engaging games. With a
          legacy of success, we're pushing boundaries with cutting-edge
          technology and inclusive practices. Join us in delivering
          unforgettable entertainment and seize the chance to level up your
          career.
        </p>
      </div>

      <div className="flex flex-col items-center gap-5">
        <h1 className="text-3xl font-bold p-5">Activate Your Future</h1>
        <hr className="text-gray-500 w-8/10" />
        <div className="flex flex-col text-center p-5 gap-5">
          <p>
            We unite our global player community with epic entertainment,
            focusing on three core pillars:
          </p>
          <p>People - fostering talent and learning opportunities.</p>
          <p>Innovation - consistently pushing to iterate and evolve.</p>
          <p>
            Excellence - delivering high-quality games, consistently year in and
            year out.
          </p>
          <p>
            Join us at Activision, where inclusivity thrives, and together we
            shape the future of entertainment for our players. Explore open
            roles now!
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-5 pb-10">
        <h1 className="text-3xl font-bold p-5">Our Values</h1>
        <hr className="text-gray-500 w-8/10" />
        <img
          src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/values/atvi-values.png"
          alt=""
        />
        <button className="font-bold bg-[#04385e]  rounded-3xl w-55 h-12 border-2 border-[#0768af]">
          LEARN MORE
        </button>
      </div>

      <div className="flex flex-col items-center gap-5">
        <h1 className="text-3xl font-bold p-5">Our Leadership Team</h1>
        <hr className="text-gray-500 w-8/10" />
        <PeopleCards/>
      </div>

      <div className="flex flex-col items-center gap-5 pb-5">
        <h1 className="text-3xl font-bold p-5">Our Games</h1>
        <hr className="text-gray-500 w-8/10" />
        <GamesCards/>
      </div>

    </div>
  );
}

export default About;
