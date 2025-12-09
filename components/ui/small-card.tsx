import React from "react";

export default function SmallCard(props: { text: string }) {
  return (
    <div className="bg-white/5 hover:bg-white/10 hover:backdrop-blur-md p-6 rounded-xl border border-white/20 hover:border-white/30 hover:scale-105 transition duration-300 shadow-lg shadow-black/20 hover:shadow-slate-600/50">
      <h3 className="text-md font-bold text-white font-extralight">{props.text}</h3>
    </div>
  );
}