import { ReactMediaRecorder } from "react-media-recorder";
import { useState } from "react";
import RecordIcon from "./RecordIcon";

type Props = {
  handleStop: (blobUrl: string) => void;
};

const RecordMessage = ({ handleStop }: Props) => {
  const [recording, setRecording] = useState(false);

  // This function will be called when the button is clicked.
  // If recording is currently happening, it stops it, and vice versa.
  const toggleRecording = (start: () => void, stop: () => void) => {
    if (recording) {
      stop();  // stop recording if it's currently happening
    } else {
      start(); // start recording if it's currently stopped
    }
    setRecording(!recording); // update the recording state
  };

  return (
     <ReactMediaRecorder
        audio
        onStop={handleStop}
        render={({ status, startRecording, stopRecording }) => (
           <div className="mt-2">
             <button
                // Call the toggleRecording function when the button is clicked
                onClick={() => toggleRecording(startRecording, stopRecording)}
                className="bg-white p-4 rounded-full"
             >
               <RecordIcon
                  classText={
                    status === "recording"
                       ? "animate-pulse text-red-500"
                       : "text-sky-500"
                  }
               />
             </button>
             <p className="mt-2 text-white font-light">{status}</p>
           </div>
        )}
     />
  );
};

export default RecordMessage;
