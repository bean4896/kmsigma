import React from "react";
import ImgCategoryGlow from "@/assets/category_selection.png";
import Image from "next/image";

interface FilterComponentProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex flex-wrap justify-center mb-4">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`flex-1 category relative mr-2 mb-2 px-4 py-2 text-md xl:text-[2rem] font-bold ${
            category === selectedCategory
              ? "text-white outline-none"
              : "text-white hover:text-white"
          }`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
          {category === selectedCategory && (
            <Image
              src={ImgCategoryGlow}
              alt={`${category} glow`}
              layout="contain"
              className={`glowImg ${
                category === selectedCategory ? "visible" : "hidden"
              }`}
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default FilterComponent;
