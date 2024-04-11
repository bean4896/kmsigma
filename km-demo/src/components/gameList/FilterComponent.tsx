import React from "react";

interface FilterComponentProps {
  categories: string[];
  onSelectCategory: (category: string) => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({
  categories,
  onSelectCategory,
}) => {
  return (
    <div className="flex mb-4">
      <label className="mr-2">Filter by Category:</label>
      <select
        onChange={(e) => onSelectCategory(e.target.value)}
        className="p-2 border"
      >
        <option value="">All</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterComponent;
