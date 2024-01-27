import React, { useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import './PdfFlipbook.css'; 

const PdfFlipbook = () => {
  const dummyImageUrls = [
    'http://localhost:3000/img/photos/deneme.jpg',
    'http://localhost:3000/img/photos/pexels.jpeg',
    'http://localhost:3000/img/photos/pexels2.jpg',
    'http://localhost:3000/img/photos/deneme.jpg',
    'http://localhost:3000/img/photos/deneme.jpg',
    // ... Add more URLs for pages 4 to 39
  ];

  const [pages] = useState(dummyImageUrls);

  return (
    <div className="pdf-flipbook-container">
      <HTMLFlipBook
        width={150}  
        height={200} 
        size="stretch"
        minWidth={100} 
        minHeight={150} 
        flipOnTouch
        showHint
        autoSize
        maxShadowOpacity={0.5}
        maxAngle={45}
        duration={500}
      >
        {pages.map((imageUrl, index) => (
          <div key={index} className="page-container">
            <img src={imageUrl} alt={`Page ${index + 1}`} className="image-small" />
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
};

export default PdfFlipbook;
