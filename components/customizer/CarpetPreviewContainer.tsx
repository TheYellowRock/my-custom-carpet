import { FC, useState, useEffect, useRef } from 'react';
import { Stage, Layer, Rect, Text, Image as KonvaImage, Transformer } from 'react-konva';
import Konva from 'konva';
import { FaTrash } from 'react-icons/fa'; // Import trash icon from react-icons

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

interface CanvasElement {
  id: string;
  type: 'text' | 'logo';
  x: number;
  y: number;
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
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [elements, setElements] = useState<CanvasElement[]>([]);
  const [imageObj, setImageObj] = useState<HTMLImageElement | null>(null);
  const stageRef = useRef<Konva.Stage>(null);
  const transformerRef = useRef<Konva.Transformer>(null);
  const [multiplier, setMultiplier] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 480) {
        setMultiplier(1.5);
      } else if (screenWidth < 768) {
        setMultiplier(2);
      } else if (screenWidth < 1024) {
        setMultiplier(3);
      } else if (screenWidth < 1440) {
        setMultiplier(4);
      } else {
        setMultiplier(5);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const newElements: CanvasElement[] = [];
    if (text) {
      newElements.push({ id: 'text', type: 'text', x: 50, y: 50 });
    }
    if (logo) {
      newElements.push({ id: 'logo', type: 'logo', x: 100, y: 100 });
    }
    setElements(newElements);
  }, [text, logo]);

  useEffect(() => {
    if (logo) {
      const img = new window.Image();
      img.src = logo;
      img.onload = () => setImageObj(img);
    } else {
      setImageObj(null);
    }
  }, [logo]);

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

  const handleDelete = () => {
    setElements((prevElements) => prevElements.filter((el) => el.id !== selectedId));
    setSelectedId(null);
  };

  return (
    <div className="flex flex-col items-center justify-center" style={{ width: '100%', position: 'relative', overflow: 'hidden' }}>
      <Stage
        width={length * multiplier}
        height={width * multiplier}
        style={{
          backgroundImage: 'url(https://cdn.shopify.com/s/files/1/0768/3463/6043/files/concrete-textured-background.jpg?v=1730849145)',
          backgroundSize: 'cover',
          backgroundRepeat: 'repeat',
          border: '8px solid black',
        }}
        ref={stageRef}
        onMouseDown={(e) => { if (e.target === e.target.getStage()) setSelectedId(null); }}
        onTouchStart={(e) => { if (e.target === e.target.getStage()) setSelectedId(null); }}
      >
        <Layer>
          <Rect
            x={0}
            y={0}
            width={length * multiplier}
            height={width * multiplier}
            fill={color || 'black'}
            opacity={0.8}
          />
          {elements.map((element) =>
            element.type === 'text' ? (
              <Text
                key={element.id}
                id={element.id}
                x={element.x}
                y={element.y}
                text={text}
                fontSize={textSize}
                fill={textColor}
                fontFamily={fontFamily}
                draggable
                onClick={() => setSelectedId(element.id)}
                onDragEnd={(e) => {
                  setElements((prev) => prev.map((el) => el.id === element.id ? { ...el, x: e.target.x(), y: e.target.y() } : el));
                }}
              />
            ) : (
              imageObj && (
                <KonvaImage
                  key={element.id}
                  id={element.id}
                  x={element.x}
                  y={element.y}
                  width={100 * multiplier}
                  height={100 * multiplier}
                  draggable
                  image={imageObj}
                  onClick={() => setSelectedId(element.id)}
                  onDragEnd={(e) => {
                    setElements((prev) => prev.map((el) => el.id === element.id ? { ...el, x: e.target.x(), y: e.target.y() } : el));
                  }}
                />
              )
            )
          )}
          <Transformer ref={transformerRef} rotateEnabled={false} anchorSize={8} borderDash={[6, 2]} />
        </Layer>
      </Stage>

      {selectedId && (
        <button
          onClick={handleDelete}
          style={{
            position: 'absolute',
            top: elements.find((el) => el.id === selectedId)?.y || 0,
            left: (elements.find((el) => el.id === selectedId)?.x ?? 0),
            padding: '5px 10px',
            background: 'red',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 10,
          }}
        >
          <FaTrash />
        </button>
      )}
    </div>
  );
};

export default CarpetPreviewContainer;
