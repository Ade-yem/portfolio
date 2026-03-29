"use client";

import { Logo, MenuLinks, SocialLinks } from "./ui/Logo";

export default function Footer() {
  return (
    <footer className="p-10 flex justify-center flex-col space-y-8" role="contentinfo">
      <Logo />
      <nav aria-label="Footer social links">
        <SocialLinks />
      </nav>
      <nav aria-label="Footer navigation">
        <MenuLinks />
      </nav>
      <p className="text-center text-xs text-slate-500 dark:text-slate-400 pt-4 border-t border-slate-200 dark:border-slate-700">
        &copy; {new Date().getFullYear()} Adeyemi Adejumo. All rights reserved.
      </p>
    </footer>
  );
}