import React from "react";
import home from "@/assets/images/Home.png";
import addUser from "@/assets/images/AddUser.png";
import logOut from "@/assets/images/logout.png";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        {/* LOGO */}
        <div className="flex lg:flex-col flex-row lg:gap-4 gap-8 items-center">
          <Logo />
          <Icon link="#" src={home} alt="img" />
          <Icon link="#" src={addUser} alt="img" />
        </div>
        <Icon link="#" src={logOut} alt="img" />
        {/* Exit Icon  */}
      </div>
    </div>
  );
}

function Logo() {
  return (
    <>
      <span className="logo">T.</span>
    </>
  );
}

interface Icon {
  src: string;
  alt: string;
  link: string;
}

function Icon({ src, alt, link }: Icon) {
  return (
    <>
      <div className="icon">
        <a href={link} className="flex justify-center items-center ">
          <img src={src} alt={alt} />
        </a>
      </div>
    </>
  );
}
