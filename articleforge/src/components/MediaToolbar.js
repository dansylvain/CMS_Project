import React, { useState } from 'react';
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
  const [mediaUrl, setMediaUrl] = useState('');
  const [altText, setAltText] = useState('');
  const [showForm, setShowForm] = useState(false);

  /**
   * Handles the insertion of media into the markdown editor
   * @param {Event} e - The form submission event
   */
  const handleInsert = (e) => {
    e.preventDefault();
    
    if (!mediaUrl.trim()) return;
    
    // Format the media URL as markdown and pass it to the parent component
    const markdownText = formatMediaMarkdown(mediaUrl, altText || 'Media');
    onInsert(markdownText);
    
    // Reset the form
    setMediaUrl('');
    setAltText('');
    setShowForm(false);
  };

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
      {!showForm ? (
        <button 
          className="media-toolbar-button"
          onClick={() => setShowForm(true)}
        >
          Insert Media
        </button>
      ) : (
        <form className="media-form" onSubmit={handleInsert}>
          <div className="form-group">
            <label htmlFor="media-url">Media URL:</label>
            <input
              id="media-url"
              type="text"
              value={mediaUrl}
              onChange={(e) => setMediaUrl(e.target.value)}
              placeholder="https://example.com/image.jpg"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="alt-text">Alt Text:</label>
            <input
              id="alt-text"
              type="text"
              value={altText}
              onChange={(e) => setAltText(e.target.value)}
              placeholder="Description of the media"
            />
          </div>
          
          <div className="form-actions">
            <button type="submit" className="insert-button">
              Insert
            </button>
            <button 
              type="button" 
              className="cancel-button"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
      <FileUpload onFileUpload={handleFileUpload} />
    </div>
  );
};

export default MediaToolbar;
