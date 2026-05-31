"use client";

import { useState } from "react";
import PhotoCard from "@/features/shared/components/PhotoCard";

type PhotoCardDemoProps = {
  imageUrl: string;
  imageAlt?: string;
  badge?: string;
  title: string;
  photographer: string;
  initialLiked?: boolean;
};

export default function PhotoCardDemo({
  initialLiked = false,
  ...props
}: PhotoCardDemoProps) {
  const [liked, setLiked] = useState(initialLiked);

  return (
    <PhotoCard
      {...props}
      liked={liked}
      onLikeToggle={() => setLiked((v) => !v)}
    />
  );
}
