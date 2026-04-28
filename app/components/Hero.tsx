'use client'
import { useRouter } from "next/navigation"

export default function Hero() {
    const router = useRouter();

    return (
        <div className="flex justify-center items-center w-full h-screen">
            <div className="bg-black/30 rounded-xl w-full h-[400px] max-md:h-auto max-md:py-10 flex flex-col justify-center items-center p-5 gap-10 max-md:gap-5">
                <h1 className="text-4xl max-md:text-2xl font-extrabold text-blue-400 pointer-events-none">
                    ClickTheButtons
                </h1>

                <div className="w-[900px] max-lg:w-full">
                    <p className="text-gray-50 text-center">
                        This is a really simple website where you've been challenged to click the buttons as fast as you can. Click all the buttons shown as fast as you can and beat your high score!
                    </p>
                </div>

                <button
                    onClick={() => { router.push('/play') }}
                    className="bg-black/50 w-35 h-15 rounded-xl text-xl font-extrabold text-blue-400 select-none cursor-pointer">
                    Play
                </button>
            </div>
        </div>
    )
}