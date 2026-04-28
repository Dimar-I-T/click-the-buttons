'use client'
import { useEffect, useState } from "react"

export type GameState = "menu" | "play" | "finish"

interface Block {
    top: number
    left: number,
    isClicked: boolean,
}

export default function Play() {
    const [currentState, setCurrentState] = useState<GameState>("menu")
    const [freq, setFreq] = useState<number>(5)
    const [clicked, setClicked] = useState<number>(0)
    const [highscore, setHighscore] = useState<number>(Infinity);
    const [blocks, setBlocks] = useState<Block[]>([])
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const [stopwatch, setStopWatch] = useState<number>(0)

    useEffect(() => {
        const randomize = () => {
            let blocksList: Block[] = []
            const maxWidth = window.innerWidth - 500 * window.innerWidth / 1920;
            const maxHeight = window.innerHeight - 200 * window.innerHeight / 900;

            const minWidth = 1 * window.innerWidth / 1920;
            const minHeight = 100 * window.innerHeight/ 900;

            for (let x = 0; x < freq; x++) {
                const randomTop = minHeight + Math.random() * maxHeight;
                const randomLeft = minWidth + Math.random() * maxWidth;
                const block: Block = {
                    top: randomTop,
                    left: randomLeft,
                    isClicked: false
                }

                blocksList.push(block);
            }

            setBlocks(blocksList);
        }

        randomize();
    }, [currentState, freq])

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isPlaying) {
            interval = setInterval(() => {
                setStopWatch((prevTime) => prevTime + 10);
            }, 10)
        }

        return () => clearInterval(interval)
    }, [isPlaying])

    useEffect(() => {
        if (clicked == freq) {
            handleStop();
        }
    }, [clicked])

    const handleStart = () => {
        setCurrentState("play");
        setIsPlaying(true);
    }

    const handleStop = () => {
        const timeElapsed = minutes * 60 + seconds + miliseconds / 1000;
        if (highscore > timeElapsed) {
            setHighscore(timeElapsed);
        }

        setCurrentState("finish");
        setIsPlaying(false);
    }

    const handleReset = () => {
        setCurrentState("menu");
        setClicked(0);
        setIsPlaying(false);
        setStopWatch(0);
    }

    const minutes = Math.floor(stopwatch / 60000);
    const seconds = Math.floor((stopwatch % 60000) / 1000);
    const miliseconds = Math.floor((stopwatch % 1000) / 10);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(e.target.value);
        setFreq(newValue);
    };

    const handleClick = (index: number) => {
        if (!blocks) {
            return;
        }

        const updatedBlocks = blocks;
        if (!updatedBlocks[index].isClicked) {
            setClicked(prev => prev + 1);
            updatedBlocks[index].isClicked = true;
        }

        setBlocks(updatedBlocks);
    }

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center px-30 max-md:px-2 py-10 overflow-y-hidden select-none">
            {currentState == "menu" &&
                <div className="bg-black/30 rounded-xl w-full h-[400px] max-md:h-auto gap-5 max-md:py-10 flex flex-col justify-center items-center p-5 gap-10 max-md:gap-5">
                    <div className="w-50 flex flex-col justify-center items-center">
                        <h1 className="text-xl text-blue-400">
                            How Many Blocks?
                        </h1>

                        <input
                            type="number"
                            value={freq}
                            onChange={e => handleChange(e)}
                            className="w-full mt-5 rounded-lg border border-blue-300 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        onClick={handleStart}
                        className="bg-black/50 w-35 h-15 rounded-xl text-xl font-extrabold text-blue-400 select-none cursor-pointer">
                        Start
                    </button>
                </div>
            }

            {currentState == "play" &&
                <div className="relative w-full min-h-screen justify-center flex">
                    <div className="text-2xl font-bold opacity-50 -z-10 mt-30">
                        {minutes.toString().padStart(2, "0")}:
                        {seconds.toString().padStart(2, "0")}.
                        {miliseconds.toString().padStart(2, "0")}
                    </div>

                    {blocks?.map((isi, index) => (
                        <button
                            onClick={() => handleClick(index)}
                            key={index}
                            className={`absolute ${isi.isClicked ? "bg-green-400" : "bg-blue-400"} rounded-xl w-15 h-15 max-md:w-10 max-md:h-10`}
                            style={{
                                top: `${isi.top}px`,
                                left: `${isi.left}px`
                            }}>
                        </button>
                    ))}
                </div>
            }

            {currentState == "finish" &&
                <div className="bg-black/30 rounded-xl w-full h-[400px] max-md:h-auto gap-5 max-md:py-10 flex flex-col justify-center items-center p-5 gap-10 max-md:gap-5">
                    <div className="w-50 flex flex-col justify-center items-center">
                        <h1 className="text-xl text-blue-400">
                            Nice One!
                        </h1>

                        <h1 className="text-[16px] mt-5">
                            Time elapsed: {(minutes * 60 + seconds + miliseconds / 100).toFixed(2)} seconds
                        </h1>

                        <h1 className="text-[16px]">
                            Best time: {highscore.toFixed(2)} seconds
                        </h1>
                    </div>

                    <button
                        onClick={handleReset}
                        className="bg-black/50 w-35 h-15 rounded-xl text-xl font-extrabold text-blue-400 select-none cursor-pointer">
                        Done
                    </button>
                </div>
            }
        </div>
    )
}