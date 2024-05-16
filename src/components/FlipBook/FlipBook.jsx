// src/components/FlipBook/FlipBook.js
import React, { useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import "./FlipBook.css";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { initializeApp } from 'firebase/app'; 
import { getStorage, ref, getDownloadURL } from 'firebase/storage'; 

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Pages = React.forwardRef((props, ref) => {
    return (
        <div className="demoPage" ref={ref} >
            <p>{props.children}</p>
            <p>Page number: {props.number}</p>
        </div>
    );
});

function FlipBook({ pdfUrl }) {
    const [numPages, setNumPages] = useState(null);
    const [pdf, setPdf] = useState(null); // Change setPdfUrl to setPdf

    useEffect(() => {
        // Initialize Firebase
        const firebaseConfig = {
          apiKey: "AIzaSyDz-2KAD5AwhQLr9BSNRHiyh-ilV_A_Wrg",
          authDomain: "fir-4cb62.firebaseapp.com",
          projectId: "fir-4cb62",
          storageBucket: "fir-4cb62.appspot.com",
          messagingSenderId: "459783996603",
          appId: "1:459783996603:web:3b95ceea1229a5bffed59e",
          measurementId: "G-F53FJRT1Y3"
        };
        const app = initializeApp(firebaseConfig);

        // Fetch PDF URL from Firebase Storage
        const fetchPdfUrl = async () => {
            try {
                const storage = getStorage(app);
                const pdfRef = ref(storage, pdfUrl);
                const url = await getDownloadURL(pdfRef);
                setPdf(url); // Update state with the fetched URL
            } catch (error) {
                console.error('Error fetching PDF:', error);
            }
        };

        fetchPdfUrl();
    }, [pdfUrl]);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    return (
        <div className="bg-gray-900 h-screen flex flex-col justify-end items-center md:justify-center scroll-mx-2 overflow-hidden">
            {pdf ? (
                <HTMLFlipBook width={350} height={500} showCover={true}>
                    {[...Array(numPages).keys()].map((n) => (
                        <Pages number={`${n + 1}`}>
                            <Document
                                file={pdf}
                                onLoadSuccess={onDocumentLoadSuccess}
                            >
                                <Page pageNumber={n + 1} renderAnnotationLayer={false} renderTextLayer={false} width={350} className='border-3 border-black' />
                            </Document>
                        </Pages>
                    ))}
                </HTMLFlipBook>
            ) : (
                <p>Loading PDF...</p>
            )}
        </div>
    );
}

export default FlipBook;
