import React from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', name: 'English', flag: 'us' },
  { code: 'fr', name: 'Français', flag: 'fr' },
  { code: 'hi', name: 'हिन्दी', flag: 'in' },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const selectedLang = languages.find((l) => l.code === i18n.language);

  return (
    <div className="relative flex items-center gap-2">
      <img
        src={`https://flagcdn.com/w40/${selectedLang?.flag}.png`}
        alt={`${selectedLang?.name} flag`}
        className="w-5 h-4 rounded-sm object-cover"
      />

      <select
        onChange={handleChange}
        value={i18n.language}
        className="appearance-none bg-white border border-gray-300 text-gray-800 text-sm rounded-md pl-2 pr-6 py-1.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>

      <div className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2">
        <svg
          className="w-3 h-3 text-gray-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
