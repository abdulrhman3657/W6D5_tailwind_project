import React from "react";
import { CiHeart } from "react-icons/ci";

function JobPost() {
  const posts = [
    {
      title: "Senior Gameplay Engineer - High Moon Studios",
      catergory: "Programming/Software Engineering reqId :R024108",
      text: "Collaborate with designers and animators to create new gameplay systems and expand existing ones. Spearhead the development of innovative gameplay experiences. Proficiency in 3D math, related to game...",
    },
    {
      title: "Lead Analytics Engineer",
      catergory: "Category :Data Analytics reqId :R024154",
      text: "You'll work closely with engineers, product managers, and analytics peers to build a foundational data layer that helps derive meaningful insights and recommendations, as well as furthering self-servi...",
    },
    {
      title: "Expert Animation Engineer - Infinity Ward",
      catergory: "Programming/Software Engineering reqId :R024108",
      text: "Infinity Ward is looking for a dedicated Expert Animation Engineer with a strong interest in crafting high fidelity, scalable animation systems and behaviors. Develop and upgrade workflows to allow th...",
    },

    {
      title: "Senior AI Animator - Infinity Ward",
      catergory: "Category :Animation reqId :R022959",
      text: "Use motion capture and hand-keyed techniques to create high-fidelity NPC Animations that are genre-defining. A strong ability in hand-keyed animation. Strong Maya animation experience. A strong passio...",
    },
    {
      title: "Level Designer",
      catergory: "Category :Game/Level Design reqId :R025221",
      text: "Work with design leadership, artists, and other level designers to deliver environments that embody the creative vision of the game. Work alongside other designers, artists, animators and engineers to...",
    },
  ];

  return (
    <div className="p-3 flex flex-col gap-5 items-center justify-center lg:flex-none lg:grid lg:grid-cols-2">
      {posts.map((post, index) => (
        <div className="bg-white text-black p-3 rounded-xl flex flex-col gap-4 lg:h-full">
          <div className="flex justify-between">
            <h1 className="font-bold text-lg">{post.title}</h1>
            <CiHeart className="self-center text-3xl" />
          </div>
          <h2 className="text-gray-700">{post.catergory}</h2>
          <p className="text-xl w-9/10">{post.text}</p>
          <button className="border bg-gray-800 text-white self-start w-35 h-15">
            Apply Now
          </button>
        </div>
      ))}
    </div>
  );
}

export default JobPost;
