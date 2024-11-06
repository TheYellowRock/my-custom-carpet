"use client"
import CarpetPreviewContainer from '@/components/customizer/CarpetPreviewContainer';
import ConfiguratorDrawer from '@/components/customizer/ConfiguratorDrawer';
import { useState } from 'react';

const CarpetCustomizerPage = () => {
  const [width, setWidth] = useState(100); // Width in cm
  const [length, setLength] = useState(200); // Length in cm
  const [color, setColor] = useState("#e0e0e0"); // Default carpet color
  const [text, setText] = useState("Custom Text"); // Default text
  const [textSize, setTextSize] = useState(24); // Default text size in px
  const [textColor, setTextColor] = useState("#000000"); // Default text color
  const [logo, setLogo] = useState<string | null>(null); // Placeholder for logo image URL or null

  return (
    <div className="min-h-screen flex flex-row items-center justify-center bg-gray-100 p-8 relative">
      <h1 className="absolute top-4 text-3xl font-bold">Carpet Customizer</h1>
      
      {/* Centered Carpet Preview */}
      <div className="flex-grow flex justify-center items-center">
        <CarpetPreviewContainer
          width={width}
          length={length}
          color={color}
          text={text}
          textSize={textSize}
          textColor={textColor}
          logo={logo}
        />
      </div>

      {/* Configurator Drawer */}
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
        setLogo={setLogo}
      />
    </div>
  );
};

export default CarpetCustomizerPage;
