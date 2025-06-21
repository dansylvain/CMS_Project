import React from 'react';
import './PublishToolbar.css';

const PublishToolbar = ({ markdown }) => {
  const handlePublish = (platform) => {
    console.log(`Publishing to ${platform}:`);
    console.log(markdown);
  };

  return (
    <div className="publish-toolbar">
      <button onClick={() => handlePublish('Medium')} className="publish-button">
        Publish to Medium
      </button>
      <button onClick={() => handlePublish('LinkedIn')} className="publish-button">
        Publish to LinkedIn
      </button>
    </div>
  );
};

export default PublishToolbar;
