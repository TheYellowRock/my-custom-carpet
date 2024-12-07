import { useState, ReactNode, ReactElement, cloneElement } from 'react';

interface AccordionSectionProps {
  title: string;
  children: ReactNode;
  isOpen?: boolean;
  onClick?: () => void;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({ title, children, isOpen = false, onClick = () => {} }) => {
  return (
    <div className="mb-4">
      <button
        onClick={onClick}
        className="w-full text-left font-medium text-lg py-2 flex justify-between items-center border-b"
      >
        {title}
        <span className="text-sm">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <div className="mt-2">{children}</div>}
    </div>
  );
};

interface AccordionProps {
  children: ReactElement<AccordionSectionProps>[]; // Children must be AccordionSection elements
}

const Accordion: React.FC<AccordionProps> = ({ children }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleSectionClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {children.map((child, index) => {
        return cloneElement(child, {
          key: index,
          isOpen: openIndex === index,
          onClick: () => handleSectionClick(index),
        });
      })}
    </div>
  );
};

export { Accordion, AccordionSection };