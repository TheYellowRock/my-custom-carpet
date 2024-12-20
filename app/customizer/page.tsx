"use client";
import CarpetPreviewContainer from "@/components/customizer/CarpetPreviewContainer";
import ConfiguratorDrawer from "@/components/customizer/ConfiguratorDrawer";
import { useState } from "react";

const CarpetCustomizerPage = () => {
  const [width, setWidth] = useState(100); // Width in cm
  const [length, setLength] = useState(200); // Length in cm
  const [color, setColor] = useState("#e0e0e0"); // Default carpet color
  const [text, setText] = useState(""); // Default text
  const [textSize, setTextSize] = useState(24); // Default text size in px
  const [textColor, setTextColor] = useState("#000000"); // Default text color
  const [logo, setLogo] = useState<string | null>(null); // Placeholder for logo image URL or null
  const [fontFamily, setFontFamily] = useState("Arial, sans-serif"); // Add default fontFamily

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center bg-white p-4 py-10 md:p-8 md:py-14 gap-6">
      {/* Centered Carpet Preview */}
      <div className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col justify-center items-center w-full">
        <div className="flex items-center text-gray-700 text-sm md:text-base font-sans p-4 md:p-8 bg-blue-100 border border-blue-200 rounded-lg mb-4 md:mb-8 lg:mb-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-blue-500 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
            />
          </svg>
          <span>
            Personnalisez votre tapis à l&apos;aide des paramètres. Si vous ne
            trouvez pas le résultat souhaité, passez une commande avec les
            dimensions uniquement et contactez-nous par email pour toute
            assistance.
          </span>
        </div>
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
