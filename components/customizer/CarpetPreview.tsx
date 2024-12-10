import React, { useState, useRef, useEffect } from "react";
import { Stage, Layer, Text, Image, Transformer, Rect } from "react-konva";
import Konva from "konva";

interface CarpetPreviewProps {
  width: number;
  length: number;
  color: string;
  text: string;
  textSize: number;
  textColor: string;
  logo: string | null;
}

const CarpetPreview: React.FC<CarpetPreviewProps> = ({
  width,
  length,
  color,
  text,
  textSize,
  textColor,
  logo,
}) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [logoImage, setLogoImage] = useState<HTMLImageElement | null>(null);

  const stageRef = useRef<Konva.Stage>(null);
  const transformerRef = useRef<Konva.Transformer>(null);

  // Dynamically load the logo image
  useEffect(() => {
    if (logo) {
      const img = new window.Image();
      img.src = logo;
      img.onload = () => {
        setLogoImage(img);
      };
    } else {
      setLogoImage(null);
    }
  }, [logo]);

  // Update Transformer
  const updateTransformer = () => {
    const transformer = transformerRef.current;
    if (transformer && selectedId) {
      const selectedNode = stageRef.current?.findOne(`#${selectedId}`);
      if (selectedNode) {
        transformer.nodes([selectedNode]);
        transformer.getLayer()?.batchDraw();
      }
    } else {
      transformer?.nodes([]);
    }
  };

  useEffect(() => {
    updateTransformer();
  }, [selectedId]);

  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{
        width: `${width}px`,
        height: `${length}px`,
        border: "1px solid #ddd",
        overflow: "hidden",
      }}
    >
      <Stage
        width={width}
        height={length}
        style={{
          backgroundColor: color,
        }}
        ref={stageRef}
        onMouseDown={(e) => {
          if (e.target === e.target.getStage()) {
            setSelectedId(null);
          }
        }}
      >
        <Layer>
          {/* Background Rectangle */}
          <Rect
            x={0}
            y={0}
            width={width}
            height={length}
            fill={color}
          />

          {/* Draggable Text */}
          <Text
            id="text"
            x={50}
            y={50}
            text={text}
            fontSize={textSize}
            fill={textColor}
            draggable
            onClick={() => setSelectedId("text")}
          />

          {/* Draggable Logo */}
          {logoImage && (
            <Image
              id="logo"
              x={100}
              y={100}
              width={100}
              height={100}
              image={logoImage}
              draggable
              onClick={() => setSelectedId("logo")}
            />
          )}

          {/* Transformer */}
          <Transformer
            ref={transformerRef}
            rotateEnabled={false}
            anchorSize={8}
            borderDash={[6, 2]}
          />
        </Layer>
      </Stage>
    </div>
  );
};

export default CarpetPreview;
