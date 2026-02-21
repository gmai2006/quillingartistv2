import React, { useState } from 'react';

const AccordionItem = ({ title, children, isOpen, onClick }) => (
    <div className="border border-gray-200 rounded mb-2 overflow-hidden">
        <button
            className={`w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 flex justify-between items-center transition-colors ${isOpen ? 'bg-gray-200' : ''}`}
            onClick={onClick}
        >
            <span className="font-heading font-medium text-lg text-black">{title}</span>
            <span>{isOpen ? '-' : '+'}</span>
        </button>
        {isOpen && (
            <div className="p-4 bg-white border-t border-gray-200 text-secondary">
                {children}
            </div>
        )}
    </div>
);

export const Accordion = ({ items }) => {
    // Items prop format: [{ title: "Header", content: <JSX /> }]
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="w-full">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    );
};