import React from "react";

function SupportCards() {

  const cards = [
    {
      title: "CALL OF DUTY: BLACK OPS 6",
      img: "https://support.activision.com/content/dam/atvi/support/home/modules/tall/BO6-home-tile2.jpg",
    },
    {
      title: "ACCOUNT & SECURITY",
      img: "https://support.activision.com/content/dam/atvi/support/home/modules/tall/account-security-en-silver-tall-2x.jpg",
    },
    {
      title: "CALL OF DUTY: WARZONE",
      img: "https://support.activision.com/content/dam/atvi/support/home/modules/tall/WZV-home-tile.jpg",
    },
    {
      title: "CALL OF DUTY: MOBILE",
      img: "https://support.activision.com/content/dam/atvi/support/home/modules/tall/codmobile-module.jpg",
    },
    {
      title: "TONY HAWK'S PRO SKATER 3 + 4",
      img: "https://support.activision.com/content/dam/atvi/support/home/modules/tall/THPS34-home-tile.png",
    },
    {
      title: "CALL OF DUTY: MODERN WARFARE III",
      img: "https://support.activision.com/content/dam/atvi/support/home/modules/tall/MWIII-home-tile-1c.png",
    },
    {
      title: "CALL OF DUTY: MODERN WARFARE II",
      img: "https://support.activision.com/content/dam/atvi/support/home/modules/tall/MWII-tall-tile.jpg",
    },
    {
      title: "CALL OF DUTY: MODERN WARFARE",
      img: "https://support.activision.com/content/dam/atvi/support/home/modules/tall/MW_module_001.jpg",
    },
    {
      title: "CALL OF DUTY: BLACK OPS COLD WAR",
      img: "https://support.activision.com/content/dam/atvi/support/home/modules/tall/cold-war-home-page-tile.jpg",
    },
  ];

  return (
    <div className="pt-5 flex flex-col lg:flex-row lg:flex-wrap lg:w-8/10 gap-4 pb-5">
      {cards.map((card, index) => (
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="lg:self-start">{card.title}</h1>
          <img className="w-90" src={card.img} alt="" />
        </div>
      ))}
    </div>
  );
}

export default SupportCards;
