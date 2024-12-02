"use client";

import { Logo, MenuLinks, SocialLinks } from "./ui/Logo";

export default function Footer() {
  return(
    <div className="p-10 flex justify-center flex-col space-y-8">
      <Logo/>
      <SocialLinks/>
      <MenuLinks/>
    </div>
  )
}