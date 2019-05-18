import React from "react";

import "./index.less";

interface Props {
  onClose: () => void;
}

class NotePad extends React.Component<Props> {
  render() {
    return (
      <div className="notePad">
        <div className="modal">写字板</div>
      </div>
    );
  }
}

export default NotePad;
