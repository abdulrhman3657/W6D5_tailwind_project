import React from "react";

function ArticleTabs() {
  let tabs = [
    {
      img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/activision-logo-small.svg",
    },
    {
      img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/cod-logo.svg",
    },
    {
      img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/THPS3+4_Logo.svg",
    },
    {
      img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/crash-bandicoot-logo.png",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col">
    <hr className="text-white w-full" />
      <ul className="flex gap-5">
        {
            tabs.map((tab, index) => (
                <li className="hover:bg-[#0768af]/60 hover:border-b-[#0768af] border-b-10 border-b-amber-50/0"><img className="w-50 h-20" src={tab.img} alt="" /></li>
            ))
        }
      </ul>
    <hr className="text-white w-full" />
    </div>
  );
}

export default ArticleTabs;
