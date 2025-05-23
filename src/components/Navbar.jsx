import { Link } from "react-router";

function Navbar() {
  const nav_list = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "about",
    },
    {
      title: "Careers",
      path: "careers",
    },
  ];

  return (
    <div>
      <nav className="bg-black text-white flex justify-around items-center h-15">
        <img className="h-8" src="https://www.activision.com/content/dam/atvi/global/firstparty/activision/activision_logo_white-text.png" alt="" />
        <ul className="hidden lg:flex justify-between gap-3 text-gray-400">
          {nav_list.map((item, index) => (
            <li key={index}>
              <Link className="hover:text-white" to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex gap-3">
          <button className="font-bold bg-[#04385e]  rounded-3xl w-20 h-8 border-2 border-[#0768af]">SIGN UP</button>
          <button>LOGIN</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
