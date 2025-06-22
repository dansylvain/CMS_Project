import React from 'react';
import { formatMediaMarkdown } from '../utils/mediaUtils';
import FileUpload from './FileUpload';
import './MediaToolbar.css';

/**
 * MediaToolbar Component
 * 
 * This component provides a toolbar for inserting media into the markdown editor.
 * Currently, it supports inserting media via URL. In future iterations, it will
 * be expanded to support uploading files directly.
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onInsert - Callback function when media is inserted
 * @returns {JSX.Element} - The rendered MediaToolbar component
 */
const MediaToolbar = ({ onInsert }) => {
  const handleFileUpload = async (file) => {
    const formData = new FormData();
    formData.append('media', file);

    try {
      const response = await fetch('http://localhost:3002/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const data = await response.json();
      const markdownText = formatMediaMarkdown(data.path, file.name, file.type);
      onInsert(markdownText);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="media-toolbar">
      <FileUpload onFileUpload={handleFileUpload} />
    </div>
  );
};

export default MediaToolbar;
