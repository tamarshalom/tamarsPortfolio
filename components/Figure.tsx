"use client";

import Image from "next/image";

interface FigureProps {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export function Figure({
  src,
  alt,
  caption,
  width = 800,
  height = 450,
  priority = false,
}: FigureProps) {
  const isExternal = src.startsWith("http");
  const imgSrc = isExternal ? src : src.startsWith("/") ? src : `/${src}`;

  return (
    <figure className="my-8">
      {isExternal ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imgSrc}
          alt={alt}
          className="w-full rounded-lg border border-accent-soft"
          loading={priority ? "eager" : "lazy"}
        />
      ) : (
        <div className="relative w-full overflow-hidden rounded-lg border border-accent-soft aspect-video">
          <Image
            src={imgSrc}
            alt={alt}
            width={width}
            height={height}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 672px"
            priority={priority}
          />
        </div>
      )}
      {caption && (
        <figcaption className="mt-3 text-caption text-muted text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
