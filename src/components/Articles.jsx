import React from "react";
import ArticleTabs from "./ArticleTabs";

export default function Articles() {
  const articles_list = [
    {
      img: "https://www.activision.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/BO6-SEASON-04-NARRATIVE-TOUT.jpg",
      date: "May 20, 2025",
      title: "Stitch Returns in Season 04",
      text: "",
    },
    {
      img: "https://www.activision.com/content/dam/atvi/callofduty/cod-touchui/blog/body/code/CODE-MAM-GY6-TOUT.jpg",
      date: "May 15, 2025",
      title: "Support C.O.D.E. Military Appreciation Month with USAA",
      text: "",
    },
    {
      img: "https://www.activision.com/content/dam/atvi/tony-hawk/blog/chicago/el-rey-blog/THPS-ELREY-IMAGE-TOUT.jpg",
      date: "May 09, 2025",
      title: "Tony Hawk’s Pro Skater 3 + 4: THPS Fest at El Rey Theatre",
      text: "",
    },
    {
      img: "https://www.activision.com/content/dam/atvi/callofduty/cod-touchui/blog/body/ricochet/bo6-season-03-ricochet/COD-BO6-RICOCHET-S03R-TOUT-A.webp",
      date: "May 07, 2025",
      title: "#TeamRICOCHET Season 03 Recap for Black Ops 6 and Warzone",
      text: "",
    },
    {
      img: "https://www.activision.com/content/dam/atvi/callofduty/cod-touchui/blog/body/code/CODE-MAM-2025-IMAGE-TOUT.webp",
      date: "May 01, 2025",
      title: "C.O.D.E. celebrates Military Appreciation Month with USAA",
      text: "",
    },
    {
      img: "https://www.activision.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/bo6/BO6-S03R-ANNOUNCEMENT-TOUT.webp",
      date: "Apr 29, 2025",
      title: "Black Ops 6 Season 03 Reloaded: All the Details",
      text: "",
    },
  ];

  return (
    <div
      style={{
        backgroundImage:
          "radial-gradient(40% 20% at 50% 0, rgba(104, 104, 104, 0.85), #111111)",
      }}
      className=" text-white flex flex-col justify-center items-center gap-4"
    >
      <div class="blog-divider"></div>

      <h1 className="text-3xl mt-3">Latest News & Articles</h1>

      <ArticleTabs/>

      <div className="p-5 flex justify-center flex-wrap gap-3">
        {articles_list.map((article, index) => (
          <div
            style={{
              background:
                "radial-gradient(100% 100% at 50.52% 0%, #686868 0%, #000000 100%)",
            }}
            className="flex flex-col gap-3 w-100  rounded-xl"
          >
            <img className="w-full" src={article.img} alt="" />
            <span className="px-3">{article.date}</span>
            <h1 className="text-xl font-bold p-3">{article.title}</h1>
            <hr className="" />
            <a className="p-3 hover:text-[#0768af] font-bold pb-10" href="#">
              READ MORE
            </a>
          </div>
        ))}
      </div>
      <button className="font-bold text-xl border h-12 w-60 rounded-2xl hover:bg-[#0768af] mb-10">VIEW ALL</button>
    </div>
  );
}
