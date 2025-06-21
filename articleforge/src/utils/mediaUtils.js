/**
 * Media Utility Functions
 * 
 * This file contains utility functions for handling media in the markdown editor.
 * These functions will be expanded in future iterations to support uploading
 * and managing media files.
 */

/**
 * Checks if a URL is an image
 * @param {string} url - The URL to check
 * @param {string} [type=''] - The MIME type of the content
 * @returns {boolean} - True if the URL is an image
 */
export const isImageUrl = (url, type = '') => {
  if (!url) return false;

  if (type.startsWith('image/')) {
    return true;
  }
  
  // Check for common image extensions in the URL (ignoring query parameters)
  if (/\.(jpeg|jpg|gif|png|webp|svg)/i.test(url)) {
    return true;
  }
  
  // Special case for placeholder.com which serves images
  if (url.includes('placeholder.com') || url.includes('placekitten.com') || url.includes('picsum.photos')) {
    return true;
  }
  
  return false;
};

/**
 * Checks if a URL is a video
 * @param {string} url - The URL to check
 * @param {string} [type=''] - The MIME type of the content
 * @returns {boolean} - True if the URL is a video
 */
export const isVideoUrl = (url, type = '') => {
  if (!url) return false;

  if (type.startsWith('video/')) {
    return true;
  }
  
  // Check for common video extensions in the URL (ignoring query parameters)
  if (/\.(mp4|webm|ogg|mov)/i.test(url)) {
    return true;
  }
  
  // Special case for video hosting services
  if (url.includes('youtube.com/watch') || 
      url.includes('youtu.be/') || 
      url.includes('vimeo.com/') ||
      url.includes('dailymotion.com/video/')) {
    return true;
  }
  
  return false;
};

/**
 * Formats a media URL for insertion into markdown
 * @param {string} url - The media URL
 * @param {string} altText - Alternative text for the media
 * @param {string} [type=''] - The MIME type of the content
 * @returns {string} - Formatted markdown for the media
 */
export const formatMediaMarkdown = (url, altText = 'Media', type = '') => {
  if (isImageUrl(url, type)) {
    return `![${altText}](${url})`;
  } else if (isVideoUrl(url, type)) {
    // For videos, we'll use HTML since markdown doesn't directly support video embedding
    return `<video controls src="${url}" alt="${altText}" style="max-width: 100%;"></video>`;
  }
  // Default to a link if not recognized
  return `[${altText}](${url})`;
};

/**
 * Placeholder function for future media upload functionality
 * This will be implemented in future iterations
 * @param {File} file - The file to upload
 * @returns {Promise<string>} - Promise resolving to the URL of the uploaded file
 */
export const uploadMedia = async (file) => {
  // This is a placeholder for future implementation
  console.log('Media upload will be implemented in future iterations', file);
  
  // For now, we'll just return a placeholder URL
  return 'https://via.placeholder.com/300';
};
