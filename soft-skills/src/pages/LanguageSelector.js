import React, { useState } from "react";
import "../styles/LanguageSelector.css"; // Import the CSS styles

function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const languageOptions = [
    { value: "en", label: "English" },
    { value: "hi", label: "हिन्दी" },
    { value: "bn", label: "বাংলা" },
    { value: "te", label: "తెలుగు" },
    { value: "ta", label: "தமிழ்" },
    { value: "mr", label: "मराठी" },
    { value: "gu", label: "ગુજરાતી" },
    { value: "kn", label: "ಕನ್ನಡ" },
    { value: "ml", label: "മലയാളം" },
    { value: "pa", label: "ਪੰਜਾਬੀ" },
  ];

  return (
    <div className="language-selector">
      <select value={selectedLanguage} onChange={handleLanguageChange}>
        {languageOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {/* Render components in selected language here */}
    </div>
  );
}

export default LanguageSelector;
