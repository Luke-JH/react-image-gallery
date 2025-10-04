type GalleryImageProps = {
    imageLocation: string;
    altText: string;
};

export default function GalleryImage({ imageLocation, altText }: GalleryImageProps) {
    return <img src={imageLocation} alt={altText} className="rounded-lg item" />;
}
