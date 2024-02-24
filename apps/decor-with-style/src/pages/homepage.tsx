import HomePage from "../../public/HomePage.jpg";
import LogoTransparent from "../../public/LogoTransparent.png";

const Homepage = () => {
  const navOptions = ["Work", "About", "Blog"];
  const projects = [
    {
      name: "DLF Capital Green",
      link: "https://www.google.com/",
    },
    {
      name: "Defence Colony",
      link: "https://www.google.com/",
    },
    {
      name: "Sky Barge",
      link: "https://www.google.com/",
    },
    {
      name: "Eldeco Aamantran",
      link: "https://www.google.com/",
    },
    {
      name: "Sarvodaya Enclave",
      link: "https://www.google.com/",
    },
    {
      name: "Panchsheel Enclave",
      link: "https://www.google.com/",
    },
    {
      name: "GK 2",
      link: "https://www.google.com/",
    },
    {
      name: "Other Projects",
      link: "https://www.google.com/",
    },
  ];

  const social = [
    {
      name: "Instagram",
      link: "https://www.instagram.com/decorwith.style?igsh=MWswOWQ4anp5cTFrNg==",
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/decorwithstyle44?mibextid=2JQ9oc",
    },
    {
      name: "Youtube",
      link: "https://www.youtube.com/@DecorWithStyle",
    },
    {
      name: "Maps",
      link: "https://maps.app.goo.gl/fKqMuBwv3zeDJP7RA",
    },
  ];

  return (
    <div className="bg-orange-50 text-black min-h-screen ">
      <div className="flex justify-between py-3 px-2 overflow-hidden ">
        <div className="flex items-center gap-3 font-semibold w-10 md:w-24 ">
          <img src={LogoTransparent} height={100} width={100} />
        </div>
        <div className="font-semibold md:text-4xl font-serif">
          DECOR WITH STYLE
        </div>
        <div className="md:flex md:gap-3 gap-1 font-semibold md:text-base text-xs ">
          {navOptions.map((val, i) => (
            <div className="md:text-left text-right" key={i}>
              {val}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center ">
        <div className="max-w-7xl ">
          <h1 className="text-center font-semibold md:text-8xl text-4xl ">
            Interiors that reflect
          </h1>
          <div className="flex justify-end items-center gap-2 md:pt-3 pt-1">
            <h1 className="font-serif md:text-5xl text-xl border-2 text-center rounded-full p-4">
              Since 2022
            </h1>
            <h1 className="font-semibold md:text-8xl text-4xl flex justify-center items-center ">
              your style
            </h1>
          </div>
        </div>
      </div>

      <div className="md:h-10 h-5 " />

      <div className="max-w-7xl mx-auto px-5 ">
        <img src={HomePage} />
      </div>

      <div className="md:h-20 h-10 " />

      <div className="flex justify-center px-5 ">
        <div className="flex justify-between font-semibold pb-2 w-full max-w-7xl border-b-2 ">
          <h3 className="font-semibold">ABOUT</h3>
          <h3>/ 001</h3>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-full max-w-7xl px-10">
          <div className="font-mono md:text-2xl py-4">
            Decor With Style is a company that provides inspiration, tips, and
            ideas for interior design and home decor. We offer articles, guides,
            and resources to help people enhance their living spaces with style.
            Whether you're looking for advice on color schemes, furniture
            arrangement, or DIY projects, Decor With Style aims to provide
            valuable information to help you create a home that reflects your
            personal taste and aesthetic preferences.
          </div>
        </div>
      </div>

      <div className="md:h-20 h-10 " />

      <div className="flex justify-center px-5 ">
        <div className="flex justify-between font-semibold pb-2 w-full max-w-7xl border-b-2 ">
          <h3 className="font-semibold">COOL PROJECTS</h3>
          <h3>/ 002</h3>
        </div>
      </div>

      <div className="flex justify-center ">
        <div className="w-full max-w-7xl px-10 py-4 grid md:grid-cols-3 grid-cols-1 gap-4">
          {projects.map((val) => (
            <div
              onClick={() => window.open(val.link)}
              className="py-2 font-mono md:text-4xl text-2xl text-center text-gray-600 cursor-pointer hover:bg-orange-100 rounded-2xl "
            >
              {val.name}
            </div>
          ))}
        </div>
      </div>

      <div className="md:h-10 h-5 " />

      <div className="flex justify-center px-5 ">
        <div className="flex justify-between font-semibold pb-2 w-full max-w-7xl border-b-2 ">
          <h3 className="font-semibold">OUR DESIGN PHILOSOPHY</h3>
          <h3>/ 003</h3>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-full max-w-7xl px-10">
          <div className="font-mono md:text-2xl pt-4">
            At Decor With Style, we believe that great design should be
            accessible to everyone. We strive to create spaces that are not only
            aesthetically pleasing, but also functional and comfortable.
          </div>
          <div className="font-mono md:text-2xl pb-4">
            We work closely with out clients to understand their needs and
            preferences, and use our expertise to bring their vision to life
          </div>
        </div>
      </div>

      <div className="md:h-10 h-5 " />

      <div className="flex justify-center px-5 ">
        <div className="flex justify-between font-semibold pb-2 w-full max-w-7xl border-b-2 ">
          <h3 className="font-semibold">OUR DESIGN PHILOSOPHY</h3>
          <h3>/ 004</h3>
        </div>
      </div>

      <div className="flex justify-center ">
        <div className="w-full max-w-7xl px-10 py-4 grid md:grid-cols-2 grid-cols-1 gap-2">
          {social.map((val) => (
            <div
              onClick={() => window.open(val.link)}
              className="py-2 font-mono md:text-4xl text-2xl text-center text-gray-600 cursor-pointer hover:bg-orange-100 rounded-full"
            >
              {val.name}
            </div>
          ))}
        </div>
      </div>

      <div className="md:h-10 h-5 " />

      <div className="flex justify-center px-5 ">
        <div className="flex justify-between font-semibold pb-2 w-full max-w-7xl border-b-2 ">
          <h3 className="font-semibold">CONTACT</h3>
          <h3>/ 005</h3>
        </div>
      </div>

      <div className="flex justify-center ">
        <div className="w-full max-w-7xl px-10 py-4 ">
          <div className="font-sans md:text-xl ">+91 97160 23614</div>
          <div className="font-sans md:text-xl ">+91 90152 69875</div>
          <div className="font-sans md:text-xl py-3 ">
            decorwithstyle44@gmail.com
          </div>
          <div className="font-sans md:text-xl ">
            N-128/A, Abul Fazal Enclave Part 1
          </div>
          <div className="font-sans md:text-xl ">
            Jamia Nagar, Okhla, New Delhi, Delhi 110025.
          </div>
          <div className="pt-7">
            <div className="font-sans md:text-7xl text-5xl ">Let's</div>
            <div className="font-sans md:text-8xl text-7xl ">Connect</div>
          </div>
        </div>
      </div>
      <div className="md:h-10 h-5 " />
    </div>
  );
};

export default Homepage;
