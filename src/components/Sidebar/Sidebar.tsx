import React from "react";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        {/* LOGO */}
        <div className="flex flex-col gap-4 items-center">
          <Logo />
          <Icon link="#" src="./src/assets/images/Home.png" alt="img" />
          <Icon link="#" src="./src/assets/images/AddUser.png" alt="img" />
        </div>
        <Icon link="#" src="./src/assets/images/logout.png" alt="img" />
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
