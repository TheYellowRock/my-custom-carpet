"use client";
import CarpetPreviewContainer from "@/components/customizer/CarpetPreviewContainer";
import ConfiguratorDrawer from "@/components/customizer/ConfiguratorDrawer";
import { useState } from "react";

const CarpetCustomizerPage = () => {
  const [width, setWidth] = useState(100); // Width in cm
  const [length, setLength] = useState(200); // Length in cm
  const [color, setColor] = useState("#e0e0e0"); // Default carpet color
  const [text, setText] = useState("Custom Text"); // Default text
  const [textSize, setTextSize] = useState(24); // Default text size in px
  const [textColor, setTextColor] = useState("#000000"); // Default text color
  const [logo, setLogo] = useState<string | null>(null); // Placeholder for logo image URL or null
  const [fontFamily, setFontFamily] = useState("Arial, sans-serif"); // Add default fontFamily

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100 p-4 md:p-8 relative gap-6">
  
      {/* Centered Carpet Preview */}
      <div className="flex-grow flex justify-center items-center mb-6 md:mb-0 w-full md:w-1/2">
        <CarpetPreviewContainer
          width={width}
          length={length}
          color={color}
          text={text}
          textSize={textSize}
          textColor={textColor}
          logo={logo}
          fontFamily={fontFamily}
        />
      </div>
  
      {/* Configurator Drawer */}
      <div className=" w-full bg-white p-4 md:w-1/3 md:bg-transparent md:p-0 shadow-md md:shadow-none">
        <ConfiguratorDrawer
          width={width}
          setWidth={setWidth}
          length={length}
          setLength={setLength}
          color={color}
          setColor={setColor}
          text={text}
          setText={setText}
          textSize={textSize}
          setTextSize={setTextSize}
          textColor={textColor}
          setTextColor={setTextColor}
          fontFamily={fontFamily} // Pass fontFamily state
          setFontFamily={setFontFamily} // Setter function to update fontFamily
          setLogo={setLogo}
        />
      </div>
    </div>
  );
  
};

export default CarpetCustomizerPage;
