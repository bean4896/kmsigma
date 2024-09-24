// lib/types.ts

export interface GameLangProps {
    gameName: string;
    thumbnailUrl?: string;
    gameUrl?: string;
    iframeUrl?: string;
    showScreenshot?: boolean;
    screenshotUrl?: string;
    placeholderUrl?: string;
  }
  
  export interface Game {
    id: number;
    order?: number;
    gameName: string;
    tags: string[];
    category: string;
    thumbnail?: string;
    showPlaceholder?: boolean;
    langProps: {
      [key: string]: GameLangProps;
    };
    isFeatured: boolean;
    hide?: boolean;
  }
  
  export interface GameListWithFilterProps {
    games: Game[];
    categories: string[];
  }
  
  export interface LanguageFilterProps {
    selectedLanguage: string;
    onSelectLanguage: (language: string) => void;
  }
  
  export interface FilterComponentProps {
    categories: string[];
    
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
  }
  
  export interface GameCardProps {
    game: Game;
  }
  
  export interface GameDialogProps {
    gameName: string;
    onClose: () => void;
    langProps: {
      [key: string]: GameLangProps | undefined;
    };
    game: Game;
    selectedLanguage: string;
  }