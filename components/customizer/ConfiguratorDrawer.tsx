import { Dispatch, SetStateAction, useState } from "react";
import { AccordionSection, Accordion } from "./AccordionSection";
import { SketchPicker } from "react-color";
import { InputNumber } from "antd";

interface ConfiguratorDrawerProps {
  width: number;
  setWidth: Dispatch<SetStateAction<number>>;
  length: number;
  setLength: Dispatch<SetStateAction<number>>;
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  textSize: number;
  setTextSize: Dispatch<SetStateAction<number>>;
  textColor: string;
  setTextColor: Dispatch<SetStateAction<string>>;
  fontFamily: string;
  setFontFamily: Dispatch<SetStateAction<string>>;
  setLogo: Dispatch<SetStateAction<string | null>>;
}

const ConfiguratorDrawer: React.FC<ConfiguratorDrawerProps> = ({
  width,
  setWidth,
  length,
  setLength,
  color,
  setColor,
  text,
  setText,
  textSize,
  setTextSize,
  textColor,
  setTextColor,
  fontFamily,
  setFontFamily,
  setLogo,
}) => {
  const [selectedColor, setSelectedColor] = useState(color);
  const [selectedTextColor, setSelectedTextColor] = useState(textColor);

  // Font options for the dropdown
  const fontOptions = [
    { label: "Arial", value: "Arial, sans-serif" },
    { label: "Times New Roman", value: '"Times New Roman", serif' },
    { label: "Courier New", value: '"Courier New", monospace' },
    { label: "Georgia", value: "Georgia, serif" },
    { label: "Verdana", value: "Verdana, sans-serif" },
  ];

  const calculatePrice = () => ((width * length) / 60).toFixed(2);

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setLogo(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full md:w-80  bg-white shadow-lg p-6 overflow-y-auto">
      <h2 className=" text-2xl font-sans mb-4 text-center">
      Personnalisez Votre Tapis
      </h2>

      {/* Size Section */}
      <Accordion>
        <AccordionSection title="Taille">
          <label className="block text-sm font-medium font-sans mb-1">Largeur (cm)</label>
          <div className="mb-4">
            <div style={{ width: "100%" }}>
              <InputNumber
                min={1}
                max={1000}
                value={width}
                onChange={(value: number | null) => setWidth(value ?? 0)}
              />
            </div>
          </div>

          <label className="block text-sm font-medium font-sans mb-1">Longueur (cm)</label>
          <div className="mb-4">
            <div style={{ width: "100%" }}>
              <InputNumber
                min={1}
                max={1000}
                value={length}
                onChange={(value: number | null) => setLength(value ?? 0)}
              />
            </div>
          </div>
        </AccordionSection>

        {/* Color Section */}
        <AccordionSection title="Couleur">
          <label className="block text-sm font-medium font-sans mb-1">Couleur du Tapis</label>
          <SketchPicker
            color={selectedColor}
            onChange={(color) => {
              setSelectedColor(color.hex);
              setColor(color.hex);
            }}
            className="mb-4"
          />


        </AccordionSection>

        {/* Text Styling Section */}
        <AccordionSection title="Style du Texte">
          <label className="block text-sm font-medium font-sans mb-1">Texte</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full p-2 border rounded mb-4"
          />

          <label className="block text-sm font-medium font-sans mb-1">Taille du Texte</label>
          <div className="mb-4">
            <div style={{ width: "100%" }}>
              <InputNumber
                min={1}
                max={100}
                value={textSize}
                onChange={(value: number | null) => setTextSize(value ?? 0)}
              />
            </div>
          </div>

          <label className="block text-sm font-medium font-sans mb-1">Police</label>
          <select
            value={fontFamily}
            onChange={(e) => setFontFamily(e.target.value)}
            className="w-full p-2 border rounded mb-4"
          >
            {fontOptions.map((font) => (
              <option key={font.value} value={font.value}>
                {font.label}
              </option>
            ))}
          </select>
          <label className="block text-sm font-medium font-sans mb-1">Couleur du Texte</label>
          <SketchPicker
            color={selectedTextColor}
            onChange={(color) => {
              setSelectedTextColor(color.hex);
              setTextColor(color.hex);
            }}
            className="mb-4"
          />
        </AccordionSection>

        {/* Logo Section */}
        <AccordionSection title="Logo">
          <label className="block text-sm font-medium mb-1 font-sans">Télécharger le Logo</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleLogoUpload}
            className="w-full p-2 border rounded mb-4"
          />
        </AccordionSection>
      </Accordion>

      {/* Price Summary & Checkout */}
      <div className="mt-6 pt-4 border-t">
        <div className="text-lg font-semibold mb-2">
          Total:  €{calculatePrice()}
        </div>
        <button
          onClick={() => {
            /* Handle checkout logic here */
          }}
          className="mt-4 w-full bg-customBlue-base text-white p-2  hover:bg-customRed-base"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default ConfiguratorDrawer;
