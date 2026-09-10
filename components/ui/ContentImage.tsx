"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/cn";

type ContentImageProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  objectPosition?: string;
};

export function ContentImage({
  src,
  alt,
  className,
  sizes,
  priority = false,
  objectPosition = "center",
}: ContentImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className="absolute inset-0 bg-ivory-deep"
        role="img"
        aria-label={alt}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={cn("object-cover", className)}
      style={{ objectPosition }}
      onError={() => setFailed(true)}
    />
  );
}
