import { useState, ReactNode } from 'react';

interface AccordionSectionProps {
  title: string;
  children: ReactNode;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left font-medium text-lg py-2 flex justify-between items-center border-b"
      >
        {title}
        <span className="text-sm">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <div className="mt-2">{children}</div>}
    </div>
  );
};

export default AccordionSection;
