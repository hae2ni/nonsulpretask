import { Worker } from "@react-pdf-viewer/core";
import PdfViewer from "./pdf/PdfViewer";

export default function App() {
  return (
    <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js">
      <PdfViewer />
    </Worker>
  );
}
