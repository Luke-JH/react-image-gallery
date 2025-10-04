import Image from "next/image";
import GalleryImage from "./GalleryImage";
import GalleryGrid from "./GalleryGrid";

export default function Home() {
    return (
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <header className="flex items-center flex-col pt-80 gap-5">
                <h1 className="text-7xl">Welcome to the Image Gallery</h1>
                <h2 className="text-2xl text-gray-400">
                    A free and open source React.js/Next.js based image gallery template
                </h2>
            </header>
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <GalleryGrid />
            </main>
            <footer className="flex gap-2 flex-wrap items-center flex-col justify-center">
                <p>MIT Licensed {new Date().getFullYear()}</p>
                <a className="text-blue-300" href="https://github.com/Luke-JH/react-image-gallery">
                    See the GitHub repo here
                </a>
            </footer>
        </div>
    );
}
