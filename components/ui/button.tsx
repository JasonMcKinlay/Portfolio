import React from 'react';

export default function Button(props : { text: string }) {
    return (
        <button className="bg-black dark:bg-white/10 dark:backdrop-blur-md dark:border-white/20 rounded-full w-fit ring-2 dark:ring-white/20 hover:ring-white text-white hover:text-black px-4 py-2 hover:scale-105 hover:bg-gray-800 dark:hover:bg-gray-200 transition mt-4 px-6 mx-2 shadow-black/20 shadow-lg hover:shadow-slate-600 duration-275">
            {props.text}
        </button>
    )
}