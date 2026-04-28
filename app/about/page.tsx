'use client'

export default function About() {
    return (
        <div className="w-full min-h-screen flex justify-center items-center px-30 max-md:px-2">
            <div className="bg-black/30 rounded-xl w-full h-auto max-md:h-auto max-md:py-5 max-md:px-5 flex flex-col px-8 pt-6 pb-8 gap-5 max-md:gap-2">
                <h1 className="text-4xl max-md:text-2xl font-extrabold text-blue-400 pointer-events-none">
                    About ClickTheButtons
                </h1>

                <div className="w-[900px] max-lg:w-full">
                    <p className="text-gray-50">
                        This is a really simple website where you've been challenged to click the buttons as fast as you can. You can choose how many blocks you wanna play. This game saves your best time elapsed. Click all the buttons shown as fast as you can and beat your high score! 
                    </p>
                </div>

                <h1 className="text-4xl max-md:text-2xl font-extrabold text-blue-400 pointer-events-none text-right max-md:mt-5">
                    About Dimar
                </h1>

                <div className="w-full flex justify-end">
                    <p className="text-gray-50 text-center text-right">
                        He's a student at University of Indonesia majoring in Computer Engineering. He has a huge passion in the field of technology, especially in software engineering. 
                    </p>
                </div>
            </div>
        </div>
    )
}