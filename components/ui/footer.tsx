import React from "react";

export default function Footer() {
  return (
    <footer className="w-full pt-6 text-center text-sm text-neutral-500">
        <div className="pb-6 w-full flex justify-center">
            <div className="w-full max-w-6xl border-t border-white/20"></div>
        </div>
      &copy; {new Date().getFullYear()} Jason McKinlay
    </footer>
  );
}