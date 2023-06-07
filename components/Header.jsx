import React from "react";
import Image from "next/image";
import Link from "next/link";
import Profile from "@/components/Profile";

function Header() {
  return (
    <header className="flex justify-between items-center py-2 px-10">
      <div className="left">
        <Link href={"/"}>
          <Image
            src={"/assets/images/logo.png"}
            width={70}
            height={50}
            alt="Logo"
            className="object-contain"
          />
        </Link>
      </div>
      <div className="right flex gap-5 items-center">
        <Link href={"/about"} className="btn">
          About
        </Link>
        <Link href={"/contact"} className="btn">
          Contact
        </Link>
        <div className="inline-block">
          <Profile />
        </div>
      </div>
    </header>
  );
}

export default Header;
