import { FC, useState, useEffect } from 'react';
import { Rnd } from 'react-rnd';

interface CarpetPreviewContainerProps {
  width: number;
  length: number;
  color: string;
  text: string;
  textSize: number;
  textColor: string;
  fontFamily: string;
  logo: string | null;
}

const CarpetPreviewContainer: FC<CarpetPreviewContainerProps> = ({
  width,
  length,
  color,
  text,
  textSize,
  textColor,
  fontFamily,
  logo,
}) => {
  const [isTextSelected, setIsTextSelected] = useState(false);
  const [isLogoSelected, setIsLogoSelected] = useState(false);
  const [textDimensions, setTextDimensions] = useState({ width: 150, height: 50 });

  const [multiplier, setMultiplier] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 480) { // Small mobile
        setMultiplier(1.5);
      } else if (screenWidth < 768) { // Mobile
        setMultiplier(2);
      } else if (screenWidth < 1024) { // Tablet
        setMultiplier(3);
      } else if (screenWidth < 1440) { // Small desktop
        setMultiplier(4);
      } else { // Large desktop
        setMultiplier(5);
      }
    };

    // Initial check
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{
        width: `${length*multiplier}px`,
        height: `${width*multiplier}px`,
        position: 'relative',
        border: '1px solid #ddd',
        overflow: 'hidden',
      }}
    >
      {/* Background image for carpet texture */}
      <div
        className="border-8 border-gray-800 box-border p-8 absolute w-full h-full"
        style={{
          top: 0,
          left: 0,
          backgroundImage: 'url(https://cdn.shopify.com/s/files/1/0768/3463/6043/files/concrete-textured-background.jpg?v=1730849145)',
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
          fontFamily,
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
