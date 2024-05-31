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
            apiKey: "AIzaSyD5t0No-t0vbTa4yloQVwdArYODMwRYvy0",
            authDomain: "lc-istanbul-website.firebaseapp.com",
            projectId: "lc-istanbul-website",
            storageBucket: "lc-istanbul-website.appspot.com",
            messagingSenderId: "1056298229064",
            appId: "1:1056298229064:web:746f7a8efe720e5571a77d",
            measurementId: "G-4MXH1TT1PY"
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
