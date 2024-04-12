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
    <div className="flex mb-4">
      <button
        className={`mr-2 px-4 py-2 rounded ${
          "" === selectedCategory
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-800"
        } hover:bg-blue-500 hover:text-white`}
        onClick={() => onSelectCategory("")}
      >
        All
      </button>
      {categories.map((category, index) => (
        <button
          key={index}
          className={`mr-2 px-4 py-2 rounded ${
            category === selectedCategory
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          } hover:bg-blue-500 hover:text-white`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterComponent;
