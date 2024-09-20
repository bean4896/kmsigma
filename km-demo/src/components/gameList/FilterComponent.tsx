import React from "react";
import ImgCategoryGlow from "@/assets/category_selection.png";
import Image from "next/image";
import { FilterComponentProps } from "@/lib/types";
import { translations } from "@/lib/constent";
import { useLanguage } from "@/context/LanguageContext";



const FilterComponent: React.FC<FilterComponentProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  const { selectedLanguage } = useLanguage();

  // Ensure translations exist for the selected language, fallback to English if not found
  const translatedCategories =
    translations.categories[selectedLanguage as keyof typeof translations.categories] ||
    translations.categories.English;

  return (
    <div className="flex flex-wrap justify-center category">
      {categories.map((category, index) => {
        const translatedCategory = translatedCategories[index] || category; // Fallback to the original category if translation is missing
        return (
          <button
            key={index}
            className={`flex-1 category relative font-bold ${category === selectedCategory
              ? "outline-none bg-gradient-to-r from-[#ffa100] to-[#ffde00] text-transparent bg-clip-text"
              : "text-white hover:text-white"
              }`}
            onClick={() => onSelectCategory(category)}
          >
            {translatedCategory}
            {category === selectedCategory && (
              <Image
                src={ImgCategoryGlow}
                alt={`${translatedCategory} glow`}
                layout="contain"
                className={`glowImg ${category === selectedCategory ? "visible" : "hidden"}`}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default FilterComponent;
