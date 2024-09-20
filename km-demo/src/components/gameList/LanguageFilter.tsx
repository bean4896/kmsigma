// components/gameList/LanguageFilter.tsx

"use client";
import React, { useState } from "react";
import Image from "next/image";
import EnglishFlag from "@/assets/Flag_of_the_United_Kingdom.svg";
import SpanFlag from "@/assets/Flag_of_Spain.svg";
import BrazilFlag from "@/assets/Flag_of_Brazil.svg";
import ChinaFlag from "@/assets/Flag_of_China.svg";

interface LanguageFilterProps {
  selectedLanguage: string;
  onSelectLanguage: (language: string) => void;
}

const LanguageFilter: React.FC<LanguageFilterProps> = ({ selectedLanguage, onSelectLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Adding localizedName for each language
  const languages = [
    { name: "English", localizedName: "English", flag: EnglishFlag },
    { name: "Chinese", localizedName: "中文", flag: ChinaFlag },
    { name: "Portuguese", localizedName: "Português Brasileiro", flag: BrazilFlag },
    { name: "Spanish", localizedName: "Español", flag: SpanFlag },
  ];

  const handleLanguageSelect = (language: string) => {
    onSelectLanguage(language);
    setIsOpen(false);
  };

  const renderFlag = (language: string) => {
    switch (language.toLowerCase()) {
      case "english":
        return <Image src={EnglishFlag} alt="English" width={20} height={20} className="mr-2" />;
      case "chinese":
        return <Image src={ChinaFlag} alt="Chinese" width={20} height={20} className="mr-2" />;
      case "portuguese":
        return <Image src={BrazilFlag} alt="Portuguese" width={20} height={20} className="mr-2" />;
      case "spanish":
        return <Image src={SpanFlag} alt="Spanish" width={20} height={20} className="mr-2" />;
      default:
        return null;
    }
  };

  // Find the localized name for the selected language
  const selectedLanguageLocalized = languages.find(lang => lang.name === selectedLanguage)?.localizedName || selectedLanguage;

  return (
    <div className="ml-10 relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md bg-stone-800 text-white text-sm flex items-center border-[#9b7a35] border-2"
      >
        {renderFlag(selectedLanguage)}
        <span>{selectedLanguageLocalized}</span>
        <svg
          className="w-4 h-4 ml-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <ul className="absolute mt-2 bg-stone-800 rounded-md text-white text-sm border-2 border-[#9b7a35]">
          {languages.map((language) => (
            <li
              key={language.name}
              className="flex items-center p-2 cursor-pointer hover:bg-stone-700"
              onClick={() => handleLanguageSelect(language.name)}
            >
              <Image src={language.flag} alt={language.name} width={20} height={20} className="mr-2" />
              <span>{language.localizedName}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageFilter;
