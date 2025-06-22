import React, { useRef } from 'react';
import './FileUpload.css';

const FileUpload = ({ onFileUpload }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onFileUpload(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="file-upload" onClick={handleClick}>
      <input
        type="file"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id="file-upload-input"
        ref={fileInputRef}
      />
      <label htmlFor="file-upload-input" className="file-upload-label">
        Upload Media
      </label>
    </div>
  );
};

export default FileUpload;
