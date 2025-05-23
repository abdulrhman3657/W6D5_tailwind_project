import React from "react";

function Footer() { // radial-gradient(ellipse at 33% -300px, #686868 0%, #000000 50%)
  return (
    <div>
      <div style={{background:"radial-gradient(ellipse at 33% -300px, #686868 0%, #000000 50%)"}} className="text-white flex flex-col lg:flex-row items-center lg:items-start lg:pt-10 lg:justify-around gap-3 pt-5">
        <div className="flex flex-col items-center lg:items-start gap-5 lg:gap-8 pb-5">
          <h1 className="font-bold text-xl">FOLLOW US</h1>

          <ul className="flex gap-3 justify-center">
            <li>
              <img
                src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/facebook.png"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/twitter.png"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/youtube.png"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/linkedin.png"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/instagramm.png"
                alt=""
              />
            </li>
          </ul>

          <ul className="hidden lg:flex self-start gap-5 pb-5">
            <li>
              <img
                className="w-20 h-15 "
                src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/common/footer/esrb-e-m.jpg"
                alt=""
              />
            </li>
            <li>
              <img className="w-10 h-15" src="ESRB_updated.jpg" alt="" />
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center lg:items-start gap-3">
          <h1>POPULAR GAMES</h1>
          <ul className="text-gray-500 text-center lg:text-start">
            <li>
              <a target="_blank" href="https://www.callofduty.com">
                Call of Duty
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.tonyhawkthegame.com">
                Tony Hawk Pro Skater
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.crashbandicoot.com">
                Crash Bandicoot
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.spyrothedragon.com">
                Spyro
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.sekirothegame.com">
                Sekiro
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center lg:items-start gap-3">
          <p className="">Company</p>

          <ul className="text-gray-500 text-center lg:text-start">
            <li>
              <a target="_blank" href="https://press.activision.com/">
                Press
              </a>
            </li>
            <li>
              <a target="_blank" href="https://research.activision.com">
                Research
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.activisionblizzard.com">
                Activision Blizzard
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://support.activision.com/contact_us"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center lg:items-start gap-3 mb-5">
          <p>LEGAL</p>

          <ul className="text-gray-500 text-center lg:text-start">
            <li>
              <a href="https://www.activision.com/legal/terms-of-use">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="https://www.activision.com/legal/privacy-policy">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="https://www.activision.com/legal/cookie-policy">
                Cookie Policy
              </a>
            </li>
            <li>
              <button
                className="optanon-toggle-display"
                data-ignore-geolocation="true"
              >
                Cookie Settings
              </button>
            </li>
            <li>
              <a href="https://www.activision.com/legal/online-safety-guide">
                Online Safety
              </a>
            </li>
            <li>
              <a href="https://www.activision.com/legal/applicant-privacy-policy">
                Applicant Privacy Policy
              </a>
            </li>
            <li className="privacy-check">
              <a href="https://support.activision.com/privacy" target="_blank">
                Your Privacy Choices
              </a>
            </li>
          </ul>
        </div>

        <ul className="flex gap-5 pb-5 lg:hidden">
          <li>
            <img
              className="w-20 h-15 "
              src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/common/footer/esrb-e-m.jpg"
              alt=""
            />
          </li>
          <li>
            <img className="w-10 h-15" src="ESRB_updated.jpg" alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
