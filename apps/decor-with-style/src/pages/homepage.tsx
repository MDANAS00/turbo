import HomePage from "../../public/Homepage.jpg";

const Homepage = () => {
  const navOptions = ["Work", "About", "Blog"];
  const projects = [
    {
      name: "BATLA HOUSE",
      link: "https://www.google.com/",
    },
    {
      name: "Shaheen Bagh",
      link: "https://www.google.com/",
    },
    {
      name: "Mahrani Bagh",
      link: "https://www.google.com/",
    },
    {
      name: "Abu Fazal",
      link: "https://www.google.com/",
    },
    {
      name: "Zakir Nagar",
      link: "https://www.google.com/",
    },
    {
      name: "BATLA HOUSE",
      link: "https://www.google.com/",
    },
    {
      name: "Shaheen Bagh",
      link: "https://www.google.com/",
    },
    {
      name: "Mahrani Bagh",
      link: "https://www.google.com/",
    },
    {
      name: "Abu Fazal",
      link: "https://www.google.com/",
    },
    {
      name: "Zakir Nagar",
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
        <div className="flex items-center gap-3 font-semibold ">
          {navOptions.map((val, i) => (
            <div key={i}>{val}</div>
          ))}
        </div>
        <div className="font-semibold md:text-4xl font-serif">
          DECOR WITH STYLE
        </div>
        <div className="flex items-center font-mono ">
          decorwithstyle44@gmail.com
        </div>
      </div>

      <div className="flex justify-center py-10 ">
        <div className="max-w-7xl ">
          <h1 className="text-center font-semibold text-8xl ">
            Interiors that reflect
          </h1>
          <div className="flex justify-end items-center gap-2 pt-3">
            <h1 className="font-serif border-2 rounded-full p-4">Since 2022</h1>
            <h1 className="font-semibold text-8xl flex justify-center items-center ">
              your style
            </h1>
          </div>
        </div>
      </div>

      <div className="h-10" />

      <div className="max-w-7xl mx-auto ">
        <img src={HomePage} />
      </div>

      <div className="h-20" />

      <div className="flex justify-center px-5 ">
        <div className="flex justify-between font-semibold pb-2 w-full max-w-7xl border-b-2 ">
          <h3 className="font-semibold">ABOUT</h3>
          <h3>/ 001</h3>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-full max-w-7xl px-10">
          <div className="font-mono py-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            repudiandae quo, magni nihil ab cumque laudantium doloribus iusto
            perspiciatis deleniti expedita eveniet aut laboriosam repellat ullam
            dignissimos quisquam! Modi, eaque. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Dicta officia quisquam natus,
            excepturi hic veniam unde optio adipisci laboriosam asperiores.
            Amet, aperiam culpa fuga suscipit sed labore quaerat ea rem! Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Ab, dolorem
            consectetur cum unde molestiae vitae incidunt nesciunt eos, velit
            reprehenderit ad nisi soluta enim sunt vero saepe, dolores obcaecati
            iure. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, enim. Suscipit quaerat quos recusandae, aliquid tempore
            autem accusamus impedit dignissimos quo! Nisi blanditiis, a tenetur
            sapiente perferendis dolor asperiores doloremque.
          </div>
        </div>
      </div>

      <div className="h-20" />

      <div className="flex justify-center px-5 ">
        <div className="flex justify-between font-semibold pb-2 w-full max-w-7xl border-b-2 ">
          <h3 className="font-semibold">COOL PROJECTS</h3>
          <h3>/ 002</h3>
        </div>
      </div>

      <div className="flex justify-center ">
        <div className="w-full max-w-7xl px-10 py-4 grid md:grid-cols-3 grid-cols-1 gap-2">
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

      <div className="h-10" />

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

      <div className="h-10" />

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

      <div className="h-10" />

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
            Block J, Jamia Nagar, Okhla, New Delhi, Delhi 110025.
          </div>
          <div className="pt-7">
            <div className="font-sans md:text-7xl text-5xl ">Let's</div>
            <div className="font-sans md:text-8xl text-7xl ">Connect</div>
          </div>
        </div>
      </div>

      <div className="h-10" />
    </div>
  );
};

export default Homepage;
