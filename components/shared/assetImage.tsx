import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

// Works for local files in /public and for image URLs coming from the API.
export default function AssetImage({ src, alt, width, height, className }: Props) {
  return <Image src={src} alt={alt} width={width} height={height} className={className} unoptimized />;
}