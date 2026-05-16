import { useState, useEffect, useRef } from 'react';
import { Handle, Position } from 'reactflow';

const VAR_REGEX = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);
  const MIN_WIDTH = 220;
  const MIN_HEIGHT = 70;

  // Extract unique, valid JS variable names from {{ }} patterns
  useEffect(() => {
    const found = [];
    const seen = new Set();
    let match;
    const regex = new RegExp(VAR_REGEX.source, 'g');
    while ((match = regex.exec(text)) !== null) {
      if (!seen.has(match[1])) {
        seen.add(match[1]);
        found.push(match[1]);
      }
    }
    setVariables(found);
  }, [text]);

  // Auto-resize textarea
  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.width = 'auto';
    const newH = Math.max(MIN_HEIGHT, el.scrollHeight);
    const newW = Math.max(MIN_WIDTH - 28, el.scrollWidth);
    el.style.height = `${newH}px`;
    el.style.width = `${newW}px`;
  }, [text]);

  return (
    <div
      style={{
        minWidth: MIN_WIDTH,
        background: '#1e1e2e',
        border: '2px solid #f38ba8',
        borderRadius: 12,
        boxShadow: '0 0 16px #f38ba822',
        fontFamily: "'Inter', sans-serif",
        color: '#cdd6f4',
        position: 'relative',
      }}
    >
      {/* Header */}
      <div
        style={{
          background: '#f38ba8',
          padding: '8px 14px',
          borderRadius: '10px 10px 0 0',
          fontWeight: 700,
          fontSize: 12,
          letterSpacing: '0.06em',
          color: '#1e1e2e',
          textTransform: 'uppercase',
        }}
      >
        ✎ Text
      </div>

      {/* Body */}
      <div style={{ padding: '12px 14px' }}>
        <span style={{ color: '#a6adc8', fontSize: 11 }}>CONTENT</span>
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            display: 'block',
            marginTop: 4,
            background: '#313244',
            border: '1px solid #45475a',
            borderRadius: 6,
            color: '#cdd6f4',
            padding: '6px 8px',
            fontSize: 12,
            fontFamily: 'monospace',
            resize: 'none',
            overflow: 'hidden',
            minWidth: MIN_WIDTH - 28,
            minHeight: MIN_HEIGHT,
            lineHeight: 1.5,
            outline: 'none',
          }}
        />
        {variables.length > 0 && (
          <div style={{ marginTop: 8, display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            {variables.map((v) => (
              <span
                key={v}
                style={{
                  background: '#313244',
                  border: '1px solid #89b4fa55',
                  borderRadius: 4,
                  padding: '1px 6px',
                  fontSize: 10,
                  color: '#89b4fa',
                  fontFamily: 'monospace',
                }}
              >
                {`{{${v}}}`}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Dynamic variable input handles (left) */}
      {variables.map((varName, i) => (
        <Handle
          key={varName}
          type="target"
          position={Position.Left}
          id={`${id}-${varName}`}
          style={{
            top: `${60 + i * 26}px`,
            background: '#89b4fa',
            width: 10,
            height: 10,
            border: '2px solid #1e1e2e',
            borderRadius: '50%',
          }}
        >
          <span
            style={{
              position: 'absolute',
              left: 14,
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: 10,
              color: '#89b4fa',
              whiteSpace: 'nowrap',
              pointerEvents: 'none',
            }}
          >
            {varName}
          </span>
        </Handle>
      ))}

      {/* Static output handle (right) */}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        style={{
          background: '#a6e3a1',
          width: 10,
          height: 10,
          border: '2px solid #1e1e2e',
          borderRadius: '50%',
        }}
      />
    </div>
  );
};