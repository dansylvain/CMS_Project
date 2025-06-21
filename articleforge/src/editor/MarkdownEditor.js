import React, { useState, useRef, useEffect } from 'react';
import MDEditor from '@uiw/react-md-editor';
import MediaToolbar from '../components/MediaToolbar';
import PublishToolbar from '../components/PublishToolbar';
import './MarkdownEditor.css';

/**
 * MarkdownEditor Component
 * 
 * This component provides a markdown editor with live preview functionality.
 * It uses @uiw/react-md-editor for the core editing and preview capabilities.
 * 
 * Features:
 * - Markdown editing with syntax highlighting
 * - Live preview of rendered markdown
 * - Support for embedding images and other media
 * 
 * @returns {JSX.Element} The rendered MarkdownEditor component
 */
const MarkdownEditor = () => {
  // State to store the markdown content, initialized from local storage
  const [markdown, setMarkdown] = useState(
    () => localStorage.getItem('markdownContent') || '# Hello, Markdown!\n\nStart writing your article here...\n\n## Adding Images\n\nYou can add images like this:\n\n![Alt text](https://via.placeholder.com/150)\n\n## Adding Videos\n\nFor videos, you can use markdown image syntax with video URLs or embed HTML directly in preview mode.'
  );
  
  // Reference to the editor to get cursor position
  const editorRef = useRef(null);

  // Effect to save markdown to local storage on change
  useEffect(() => {
    localStorage.setItem('markdownContent', markdown);
  }, [markdown]);
  
  /**
   * Handles inserting media at the current cursor position
   * @param {string} mediaMarkdown - The markdown text for the media
   */
  const handleMediaInsert = (mediaMarkdown) => {
    // For now, we'll just append the media to the end of the current content
    // In a future iteration, we could enhance this to insert at cursor position
    setMarkdown((prevMarkdown) => `${prevMarkdown}\n\n${mediaMarkdown}`);
  };

  return (
    <div className="markdown-editor-container">
      <h2>Article Editor</h2>
      <MediaToolbar onInsert={handleMediaInsert} />
      <div className="editor-wrapper">
        <MDEditor
          value={markdown}
          onChange={setMarkdown}
          height={400}
          preview="edit"
          // This enables the live preview side-by-side with the editor
          visibleDragbar={true}
        />
      </div>
      
      <div className="preview-section">
        <h3>Full Preview</h3>
        <div className="preview-container">
          <MDEditor.Markdown source={markdown} />
        </div>
      </div>
      <PublishToolbar markdown={markdown} />
    </div>
  );
};

export default MarkdownEditor;
