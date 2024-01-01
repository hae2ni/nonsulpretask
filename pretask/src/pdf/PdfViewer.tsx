import "@react-pdf-viewer/core/lib/styles/index.css";
import { Viewer } from "@react-pdf-viewer/core";
import { getFilePlugin } from "@react-pdf-viewer/get-file";
import file from "../assets/Kweon.pdf";
import { RenderDownloadProps } from "@react-pdf-viewer/get-file";

export default function PdfViewer() {
  const getFilePluginInstance = getFilePlugin();
  const { Download } = getFilePluginInstance;
  return (
    <>
      <Download>
        {(props: RenderDownloadProps) => (
          <button
            style={{ height: "300px", width: "200px" }}
            onClick={props.onClick}>
            DOWNLOAD
          </button>
        )}
      </Download>
      <div
        style={{
          border: "1px solid rgba(0, 0, 0, 0.3)",
          height: "750px",
          width: "500px",
        }}>
        <Viewer plugins={[getFilePluginInstance]} fileUrl={file} />
      </div>
    </>
  );
}
