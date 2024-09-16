// lib/helpers.ts
import { Game, GameLangProps } from "@/lib/types";

// Convert GameSlidesinfo structure to Game structure
export const convertToGameType = (slide: any): Game => {
  return {
    id: slide.id,
    order: slide.order,
    gameName: slide.gameName,
    tags: slide.tags,
    category: slide.category,
    thumbnail: slide.backgroundUrl, // Assuming backgroundUrl will serve as the thumbnail
    langProps: slide.langProps as { [key: string]: GameLangProps },
    isFeatured: slide.isFeatured,
  };
};
