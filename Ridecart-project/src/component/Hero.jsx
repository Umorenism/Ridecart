

// import React from "react";
// import riderLeft from "../assets/take.svg";
// import riderRight from "../assets/take-right.svg";
// import googlePlay from "../assets/google.svg";
// import appStore from "../assets/app-store.svg";
// import zig from '../assets/zig1.svg'
// import zig2 from '../assets/zigleftlong.svg'
// import zig3 from '../assets/zigright.svg'
// import zig4 from '../assets/rightrid2.svg'
// import Services from "./Service";
// const Hero = () => {
//   return (
//     <>
//     <section className="relative bg-[#f5f5f5]  min-h-[750px] py-[150px] text-center">
     
 
//       {/* Riders */}
//       <img
//         src={riderLeft}
//         alt="Left Rider"
//         className="absolute top-[100px] left-[180px] w-[70px] z-10"
//       />
//     <img src={zig} alt=""
//      className="absolute top-[160px] left-[0px] w-[250px] z-10"
//     />
//     <img src={zig2} alt=""
//      className="absolute top-[58px] right-[0px] ml-3 w-[1008px] z-10"
//     />



//     {/* right own */}
//       <img
//         src={riderRight}
//         alt="Right Rider"
//         className="absolute bottom-[180px] right-[500px] w-[70px] z-10"
//       />
//       <img src={zig3} alt="" className="absolute bottom-[30px] h-[650px] right-[0] w-[560px] z-10"/>
//       <img src={zig4} alt="" className="absolute bottom-[38px] h-[420px] left-[0] w-[697px] z-10"/>

//       {/* Center Content */}
//       <div className="relative z-20 max-w-2xl mx-auto mt-5 px-4">
//         <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
//           One App, Endless <br /> Possibilities
//         </h1>
//         <p className="text-gray-500 mt-4 text-base md:text-lg">
//           Unavailable to run your personal errands? Need to send something? Do
//           both with ease! Our dispatch service connects you to rides and
//           deliveries in one seamless app.
//         </p>
//         <div className="flex justify-center gap-4 mt-6">
//           <img src={googlePlay} alt="Google Play" className="w-36" />
//           <img src={appStore} alt="App Store" className="w-36" />
//         </div>
//       </div>
//     </section>
//     <Services/>
//     </>
//   );
// };

// export default Hero;









import React from "react";
import riderLeft from "../assets/take.svg";
import riderRight from "../assets/take-right.svg";
import googlePlay from "../assets/google.svg";
import appStore from "../assets/app-store.svg";
import zig from "../assets/zig1.svg";
import zig2 from "../assets/zigleftlong.svg";
import zig3 from "../assets/zigright.svg";
import zig4 from "../assets/rightrid2.svg";
import Services from "./Services";
import AboutUs from "./About";
import Why from "./Why";
import Download from "./Download";


const Hero = () => {
  return (
    <>
      <section className="relative bg-[#f5f5f5] min-h-[750px] py-[150px] text-center">
        {/* Riders */}
        <img
          src={riderLeft}
          alt="Left Rider"
          className="absolute hidden sm:block w-[50px] z-10 
            left-[50%] top-[80px] transform -translate-x-1/2
            md:top-[100px] md:left-[320px] md:translate-x-0 md:w-[70px]"
        />

        <img
          src={zig}
          alt=""
          className="absolute hidden sm:block w-[200px] z-10 
            top-[140px] left-[50%] transform -translate-x-1/2
            md:top-[160px] md:left-[0px] md:translate-x-0 md:w-[390px]"
        />

        <img
          src={zig2}
          alt=""
          className="absolute hidden sm:block w-[350px] z-10 
            top-[240px] right-[50%] transform translate-x-1/2
            md:top-[58px] md:right-[0px] md:translate-x-0 md:w-[1008px]"
        />

        {/* Right Side */}
        <img
          src={riderRight}
          alt="Right Rider"
          className="absolute hidden sm:block w-[50px] z-10 
            bottom-[180px] left-[50%] transform -translate-x-1/2
            md:bottom-[180px] md:right-[500px] md:left-auto md:translate-x-0 md:w-[70px]"
        />

        <img
          src={zig3}
          alt=""
          className="absolute hidden sm:block w-[300px] h-auto z-10 
            bottom-[20px] right-[50%] transform translate-x-1/2 
            md:bottom-[30px] md:right-[0] md:translate-x-0 md:w-[560px] md:h-[650px]"
        />

        <img
          src={zig4}
          alt=""
          className="absolute hidden sm:block w-[300px] h-auto z-10 
            bottom-[90px] left-[50%] transform -translate-x-1/2
            md:bottom-[51px] md:left-[0] md:translate-x-0 md:w-[837px] md:h-[420px]"
        />

        {/* Center Content */}
        <div className="relative z-20 max-w-2xl mx-auto mt-5 px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            One App, Endless <br /> Possibilities
          </h1>
          <p className="text-gray-500 mt-4 text-base md:text-lg">
            Unavailable to run your personal errands? Need to send something? Do
            both with ease! Our dispatch service connects you to rides and
            deliveries in one seamless app.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
            <img src={googlePlay} alt="Google Play" className="w-36" />
            <img src={appStore} alt="App Store" className="w-36" />
          </div>
        </div>
      </section>
      <Services />
      <AboutUs/>
      <Why/>
      <Download/>
    </>
  );
};

export default Hero;







