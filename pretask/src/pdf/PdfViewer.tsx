import "@react-pdf-viewer/core/lib/styles/index.css";
import { Viewer } from "@react-pdf-viewer/core";
import file from "../assets/Kweon.pdf";

export default function PdfViewer() {
  return (
    <div
      style={{
        border: "1px solid rgba(0, 0, 0, 0.3)",
        height: "750px",
        width: "500px",
      }}>
      <Viewer fileUrl={file} />
    </div>
  );
}
