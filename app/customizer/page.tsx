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
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center bg-gray-100 p-4 py-10 md:p-8 md:py-14 gap-6">
      {/* Centered Carpet Preview */}
      <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-center items-center w-full">
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
      <div className="col-span-1 md:col-span-1 lg:col-span-1 w-full bg-white shadow-md md:shadow-none md:bg-transparent md:p-0">
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
          fontFamily={fontFamily}
          setFontFamily={setFontFamily}
          setLogo={setLogo}
        />
      </div>
    </div>
  );
};

export default CarpetCustomizerPage;
