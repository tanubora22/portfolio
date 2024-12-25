import React, { useEffect, useState } from "react";
import {  pdfjs } from "react-pdf";
import { FaDownload } from "react-icons/fa";
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import resumePDF from "../assets/resume.pdf"; // Make sure the path is correct

// Setup PDF.js worker (Make sure it's correct for your environment)
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString();

const Resume = () => {
  const [wid, setWid] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const handleResize = () => setWid(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "My_Resume.pdf";
    link.click();
  };

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  });

  return (
    <section className="py-16 bg-gradient-to-r from-gray-500 to-gray-800" id="resume">
      <div className="max-w-screen-xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-white text-center mb-6">
          My <strong className="text-yellow-400">Resume</strong>
        </h1>
        <p className="text-center text-white mb-8 text-lg">
          View my professional resume or download it below.
        </p>

        <div className="flex justify-center mb-8">
          <div className="w-full max-w-3xl bg-white p-4 rounded-lg shadow-lg">
            <Document
              file={resumePDF}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={(error) => console.error("Error loading document:", error)}
            >
              <Page
                pageNumber={pageNumber}
                scale={wid < 700 ? (wid > 475 ? 0.7 : 0.5) : 1}
              />
            </Document>
          </div>
        </div>

        {numPages && (
          <div className="flex justify-center mb-8">
            <p className="text-white">
              Page {pageNumber} of {numPages}
            </p>
          </div>
        )}

        <div className="flex justify-center">
          <button
            onClick={downloadResume}
            className="flex items-center px-6 py-3 bg-yellow-400 text-white font-bold text-lg rounded-lg hover:bg-yellow-500 transition-all duration-300"
          >
            <FaDownload className="mr-2" /> Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resume;
