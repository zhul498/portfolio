import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const documents = [
  {
    title: 'Resume',
    pdfUrl: '/assets/Resume.pdf',
    imgUrl: '/assets/ResumePreview.png',
  },
  {
    title: 'Unofficial Transcript',
    pdfUrl: '/assets/Transcript.pdf',
    imgUrl: '/assets/TranscriptPreview.png',
  },
];

const DocuCard = () => {
  const handleClick = (pdfUrl) => {
    window.open(pdfUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
      {documents.map((doc, index) => (
        <div key={index} className="flex flex-col space-y-4">
          {/* Document Title */}
          <button
            onClick={() => handleClick(doc.pdfUrl)}
            className="text-lg font-semibold text-left text-blue-600 hover:underline duration-200"
          >
            {doc.title}
          </button>

          {/* Zoomable Image */}
          <Zoom>
            <img
              src={doc.imgUrl}
              alt={`${doc.title} preview`}
              className="w-full h-auto object-contain rounded-lg shadow-lg cursor-zoom-in"
            />
          </Zoom>

        </div>
      ))}
    </div>
  );
};

export default DocuCard;
