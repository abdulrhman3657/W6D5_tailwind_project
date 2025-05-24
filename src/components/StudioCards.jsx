import React from "react";

function StudioCards() {
  let studioList = [
    {
      img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691575580503_logo_treyarch-1666638610775.png",
    },
    {
      img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691575949128_logo_infinityward-1666638609622.png",
    },
    {
      img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691576204660_logo_highmoon-studios-1666638608448.png",
    },
    {
      img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691576477943_logo_sledgehammer-1666639102046.png",
    },
    {
      img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691576931380_logo_atvi-shanghai-studio-1666639104346.png",
    },
    {
      img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691577081915_logo_demonware-1666639103123.png",
    },
    {
      img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691577163163_ss-logo-labeled-1670261765680.png",
    },
    {
      img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/DLE-Logo-White2-1709023761211.png",
    },
    {
      img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/central_tech_text_7201-1709023955618.png",
    },
    {
      img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/Beenox3-1710257100788.png",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row lg:flex-wrap lg:w-7/10 gap-5 lg:gap-15 justify-center lg:justify-start align-center">
      {studioList.map((studio, index) => (
          <img className="w-70 self-center" src={studio.img} alt="" />
      ))}
    </div>
  );
}

export default StudioCards;
