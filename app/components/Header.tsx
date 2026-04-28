"use client"

import { useRouter } from "next/navigation"
import { useState } from "react";

export default function Header() {
    const router = useRouter();
    const [dropdown, setDropdown] = useState<boolean>(false);

    return (
        <div className="fixed z-10 w-full bg-black h-20 max-md:h-15 flex flex-row justify-between items-center px-20 max-md:px-5">
            <button
                onClick={() => { router.push('/') }}
                className="bg-transparent flex justify-center items-center m-0">
                <h1 className="text-xl max-md:text-[15px] font-extrabold text-blue-400 select-none cursor-pointer">
                    ClickTheButtons
                </h1>
            </button>

            <button
                onClick={() => {setDropdown(!dropdown)}} 
                className="md:hidden flex flex-col gap-1 justify-center items-center w-5 h-5 cursor-pointer">
                <div className="w-full h-0.5 bg-blue-400" >
                </div>
                <div className="w-full h-0.5 bg-blue-400" >
                </div>
                <div className="w-full h-0.5 bg-blue-400" >
                </div>
            </button>

            {dropdown && 
                <div className="absolute bg-black/50 rounded-md w-20 flex flex-col justify-center py-2 items-center gap-2 top-0 right-0 mt-15">
                    <button 
                        onClick={() => { router.push('/cards') }}
                        className="text-sm bg-transparent text-blue-400 cursor-pointer ">
                        Cards
                    </button>

                    <button 
                        onClick={() => { router.push('/play') }}
                        className="text-sm bg-transparent text-blue-400 cursor-pointer">
                        Play
                    </button>

                    <button 
                        onClick={() => { router.push('/about') }}
                        className="text-sm bg-transparent text-blue-400 cursor-pointer">
                        About
                    </button>
                </div>
            }

            <div className="max-md:hidden flex flex-row gap-10 justify-center items-center">
                <button
                    onClick={() => { router.push('/cards') }}
                    className="bg-transparent flex justify-center items-center m-0">
                    <h1 className="text-10 text-blue-400 select-none cursor-pointer">
                        Cards
                    </h1>
                </button>

                <button
                    onClick={() => { router.push('/play') }}
                    className="bg-transparent flex justify-center items-center m-0">
                    <h1 className="text-10 text-blue-400 select-none cursor-pointer">
                        Play
                    </h1>
                </button>

                <button
                    onClick={() => { router.push('/about') }}
                    className="bg-transparent flex justify-center items-center m-0">
                    <h1 className="text-10 text-blue-400 select-none cursor-pointer">
                        About
                    </h1>
                </button>
            </div>
        </div>
    )
}