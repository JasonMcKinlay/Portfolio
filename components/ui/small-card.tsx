import React from "react";

export default function SmallCard(props: { text: string; color?: string }) {
  return (
    <div className={`bg-white/5 hover:bg-${props.color}-200/10 hover:backdrop-blur-md p-6 rounded-xl border border-white/20 hover:border-${props.color}-300/30 hover:scale-105 transition duration-300 shadow-lg shadow-black/20 hover:shadow-${props.color}-300/50`}>
      <img src={`/icons/${props.text.toLowerCase()}.png`} alt={`${props.text.toLowerCase()}-icon`} className="w-10 h-10 mx-auto mb-2" />
      <h3 className="text-md text-white font-extralight">{props.text}</h3>
    </div>
  );
}