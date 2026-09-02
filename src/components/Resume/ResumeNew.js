import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/CV CURTIL Maxime.pdf";
import coverLetterPdf from "../../Assets/Lettre de Motivation CURTIL Maxime.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import usePageTitle from "../../hooks/usePageTitle";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  usePageTitle("CV & Lettre de motivation | Maxime CURTIL");
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <h1 className="project-heading">
          Mon <strong className="purple">CV</strong>
        </h1>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "250px" }}>
            <AiOutlineDownload />
            &nbsp;Télécharger le CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <h1 className="project-heading">
          Ma <strong className="purple">Lettre de motivation</strong>
        </h1>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={coverLetterPdf} target="_blank" style={{ maxWidth: "250px" }}>
            <AiOutlineDownload />
            &nbsp;Télécharger la lettre de motivation
          </Button>
        </Row>

        <Row className="resume">
          <Document file={coverLetterPdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
