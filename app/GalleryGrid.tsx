"use client";

import GalleryImage from "./GalleryImage";
import { useState } from "react";

type ImageData = {
    imageLocation: string;
    altText: string;
};

export default function GalleryGrid() {
    const [imagesState, setImagesState] = useState<ImageData[]>([
        { imageLocation: "/IMG_0150.JPEG", altText: "A snowy wall" },
        { imageLocation: "/IMG_1460.JPEG", altText: "A sandy reservoir" },
        { imageLocation: "/IMG_1474.JPEG", altText: "A rocky hillside" },
        { imageLocation: "/IMG_1503.JPEG", altText: "Some plants and rocks" },
        { imageLocation: "/IMG_1537.JPEG", altText: "A big rock" },
        { imageLocation: "/IMG_1554.JPEG", altText: "A wall through a field" },
        { imageLocation: "/IMG_1818.JPEG", altText: "A pond with a walkway" },
    ]);
    return (
        <div className="container">
            <div className="carousel">
                {imagesState.map((image, index) => (
                    <GalleryImage
                        key={index}
                        imageLocation={image.imageLocation}
                        altText={image.altText}
                    />
                ))}
            </div>
        </div>
    );
}
