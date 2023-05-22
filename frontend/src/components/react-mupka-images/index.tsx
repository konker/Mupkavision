import React, { FunctionComponent, useState } from "react";
import "./index.css";

// --------------------------------------------------------------------------
export type MupkaImagesProps = {
  seconds?: boolean;
  twentyFourHour?: boolean;
};
export type MupkaImagesState = {
  // TODO
};

export const MupkaImages: FunctionComponent<MupkaImagesProps> = (props) => {
  const [state, setState] = useState<MupkaImagesState>({});

  return (
    <div className="mupka-images">
      <p>IMAGERY HERE</p>
    </div>
  );
};
