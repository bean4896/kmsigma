import React from "react";

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
          className={`flex-1 mr-2 mb-2 px-4 py-2 rounded text-md xl:text-xl font-bold ${
            category === selectedCategory
              ? "bg-neutral-900 text-white"
              : "bg-neutral-700 text-white"
          } hover:bg-neutral-900 hover:text-white`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterComponent;
