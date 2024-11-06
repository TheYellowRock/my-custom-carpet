import { FC, useState } from 'react';
import { Rnd } from 'react-rnd';

interface CarpetPreviewContainerProps {
  width: number;
  length: number;
  color: string;
  text: string;
  textSize: number;
  textColor: string;
  logo: string | null;
}

const CarpetPreviewContainer: FC<CarpetPreviewContainerProps> = ({
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
        width: `${length*5}px`,
        height: `${width*5}px`,
        position: 'relative',
        border: '1px solid #ddd',
        overflow: 'hidden',
      }}
    >
      {/* Background image for carpet texture */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(https://cdn.shopify.com/s/files/1/0768/3463/6043/files/concrete-textured-background.jpg?v=1730849145)', // Add your image path here
          backgroundSize: 'cover',
          zIndex: 1,
        }}
      />

      {/* Color overlay with 90% opacity */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: color,
          opacity: 0.9,
          zIndex: 2,
        }}
      />

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
          <img
            src={logo}
            alt="Logo"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </Rnd>
      )}
    </div>
  );
};

export default CarpetPreviewContainer;
