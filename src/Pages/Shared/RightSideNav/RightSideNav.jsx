import React from "react";
import { AiOutlineGoogle, AiOutlineGithub } from "react-icons/ai";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qzone1 from "../../../assets/qZone1.png"
import qzone2 from "../../../assets/qZone2.png"
import qzone3 from "../../../assets/qZone3.png"

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-2 mb-6">
        <h2 className="text-2xl font-bold">Login with</h2>
        <button className="btn btn-outline w-full">
          <AiOutlineGoogle></AiOutlineGoogle>
          Login With Google
        </button>
        <button className="btn btn-outline w-full">
          <AiOutlineGithub></AiOutlineGithub>
          Login With Github
        </button>
      </div>
      <div className="p-4 mb-6">
        <h2 className="text-2xl mb-4 font-bold">Find us on</h2>
        <a className="p-4 flex items-center gap-5 border rounded-t-lg text-lg" href="">
            <FaFacebook></FaFacebook>
            Facebook
        </a>
        <a className="p-4 flex items-center gap-5 border-x text-lg" href="">
            <FaTwitter></FaTwitter>
            Twitter
        </a>
        <a className="p-4 flex items-center gap-5 border rounded-b-lg text-lg" href="">
            <FaInstagram></FaInstagram>
            Instagram
        </a>
      </div>
      {/* Q -zone */}
      <div className="p-4 space-y-4 mb-6 bg-[#F3F3F3]">
        <h2 className="text-2xl font-bold">Q-ZONE</h2>
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
       
      </div>
    </div>
  );
};

export default RightSideNav;
