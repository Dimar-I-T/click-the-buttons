import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="w-full min-h-screen px-30 max-md:px-2">
        <Hero/>
    </div>
  );
}
