import React, { useState } from 'react';
import markdownit from 'markdown-it';
import DOMPurify from 'dompurify';

function Converter() {
  const [md, setMd] = useState('');
  const mdText = markdownit();
  const result = mdText.render(md || '# Write something in the box');
  const clean = DOMPurify.sanitize(result);

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        padding: '20px',
        boxSizing: 'border-box',
        backgroundColor: '#f9f9f9',
        gap: '20px',
      }}
    >
      {/* Editor */}
      <textarea
        value={md}
        onChange={(e) => setMd(e.target.value)}
        placeholder="# Write your markdown here..."
        style={{
          flex: 1,
          resize: 'none',
          fontSize: '16px',
          lineHeight: '1.5',
          padding: '20px',
          border: 'none',
          outline: 'none',
          backgroundColor: 'white',
          boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        }}
      />

      {/* Preview */}
      <div
        style={{
          flex: 1,
          padding: '20px',
          backgroundColor: 'white',
          overflowY: 'auto',
          fontSize: '16px',
          lineHeight: '1.5',
          boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        }}
        dangerouslySetInnerHTML={{ __html: clean }}
      />
    </div>
  );
}

export default Converter;
