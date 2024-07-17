import React from "react";

export default function PersonalInfo() {
  const n = new Date();
  return (
    <div className="flex gap-4 mt-2 mb-2 flex-1">
      <div className="msg flex flex-col gap-4 justify-center items-start">
        <div className="flex gap-4 items-center">
          <div className="msgimg bg-gre w-10 rounded-full">
            <img src="./src/assets/images/User.png" alt="img" />
          </div>
          <h1 className="font-['CairoB']">Ali Mostafa</h1>
        </div>
        <div className="welc">
          <h3 className="font-[CairoL]">Good Day!</h3>
          <h2 className="font-[CairoM]">{n.toUTCString()}</h2>
        </div>
      </div>
      <div className="adv w-max rounded-2xl min-w-12 min-h-12 bg-gre flex-1 h-full">
        <img src="" alt="" />
      </div>
    </div>
  );
}
