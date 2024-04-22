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
    <div className="flex flex-wrap justify-center my-[4rem] category">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`flex-1 category relative text-[20px] md:text-[4rem] font-bold ${
            category === selectedCategory
              ? "outline-none bg-gradient-to-r from-[#ffa100] to-[#ffde00] text-transparent bg-clip-text"
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
