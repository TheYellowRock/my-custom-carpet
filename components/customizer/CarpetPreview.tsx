import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import Image from 'next/image';

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
  const [isTextSelected, setIsTextSelected] = useState(false);
  const [isLogoSelected, setIsLogoSelected] = useState(false);
  const [textDimensions, setTextDimensions] = useState({ width: 150, height: 50 });

  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{
        width: `${width}px`,
        height: `${length}px`,
        backgroundColor: color,
        position: 'relative',
        border: '1px solid #ddd',
        overflow: 'hidden',
      }}
    >
      {/* Draggable and Resizable Text */}
      <Rnd
        bounds="parent"
        enableResizing
        size={{ width: textDimensions.width, height: textDimensions.height }}
        onResizeStop={(e, direction, ref) => {
          setTextDimensions({
            width: ref.offsetWidth,
            height: ref.offsetHeight,
          });
        }}
        onDragStop={() => setIsTextSelected(false)}
        onClick={() => setIsTextSelected(true)}
        style={{
          color: textColor,
          fontSize: `${textSize}px`,
          fontWeight: 'bold',
          border: isTextSelected ? '1px dashed #333' : 'none',
          cursor: 'move',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 3,
        }}
      >
        <div
          style={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          }}
        >
          {text}
        </div>
      </Rnd>

      {/* Draggable and Resizable Logo */}
      {logo && (
        <Rnd
          bounds="parent"
          enableResizing
          default={{
            width: 100,
            height: 100,
            x: width / 4,
            y: length / 4,
          }}
          onResizeStop={() => setIsLogoSelected(true)}
          onDragStop={() => setIsLogoSelected(false)}
          onClick={() => setIsLogoSelected(true)}
          style={{
            border: isLogoSelected ? '1px dashed #333' : 'none',
            cursor: 'move',
            zIndex: 3,
          }}
        >
          <Image
            src={logo}
            alt="Logo"
            layout="fill"
            objectFit="contain"
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </Rnd>
      )}
    </div>
  );
};

export default CarpetPreview;
