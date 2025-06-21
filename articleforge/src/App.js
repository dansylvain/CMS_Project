import React from 'react';
import MarkdownEditor from './editor/MarkdownEditor';
import './App.css';

/**
 * App Component
 * 
 * The main application component that serves as the entry point for the ArticleForge app.
 * Currently, it renders the MarkdownEditor component as the primary interface.
 * 
 * In future iterations, this component will be expanded to include:
 * - Navigation
 * - Article management (saving, loading, etc.)
 * - User authentication
 * - Publishing to external platforms
 * 
 * @returns {JSX.Element} The rendered App component
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ArticleForge</h1>
        <p>A powerful markdown editor for creating and managing articles</p>
      </header>
      <main className="App-main">
        <MarkdownEditor />
      </main>
      <footer className="App-footer">
        <p>ArticleForge &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
