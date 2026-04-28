"use client"

export default function Footer() {
    return (
        <div className="w-full h-40 bg-black flex flex-col gap-5 justify-center px-20 max-md:px-10">
            <h1 className="text-4xl max-md:text-xl font-extrabold text-blue-400 pointer-events-none">
                ClickTheButtons
            </h1>

            <h1 className="text-sm max-md:text-[10px] text-blue-400">
                Created by Dimar Ilham Tamara
            </h1>
        </div>
    )
}