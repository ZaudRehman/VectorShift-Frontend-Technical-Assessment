import { useState, useEffect, useMemo } from 'react';
import { BaseNode, nodeInputStyle } from './BaseNode';

const VAR_REGEX = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;

const fieldTitleStyle = {
  display: 'block',
  marginBottom: 6,
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: '0.08em',
  color: '#8a93a8',
};

const estimateSize = (text) => {
  const lines = text.split('\n');
  const longestLine = lines.reduce((max, line) => Math.max(max, line.length), 0);

  const width = Math.min(520, Math.max(240, longestLine * 7.2 + 48));
  const height = Math.min(320, Math.max(110, lines.length * 24 + 72));

  return { width, height };
};

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);

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

  const { width, height } = useMemo(() => estimateSize(text), [text]);

  return (
    <BaseNode
      id={id}
      label="Text"
      color="#f7c6d9"
      icon="✎"
      style={{
        width,
        minHeight: height,
      }}
      inputs={variables.map((varName) => ({
        id: `${id}-${varName}`,
        label: varName,
        color: '#b7dcff',
      }))}
      outputs={[{ id: `${id}-output`, label: 'output', color: '#bdeccf' }]}
    >
      <label style={{ display: 'block' }}>
        <span style={fieldTitleStyle}>CONTENT</span>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write text and reference variables like {{input}}"
          style={{
            ...nodeInputStyle,
            width: '100%',
            minHeight: Math.max(72, height - 92),
            resize: 'none',
            overflow: 'hidden',
            lineHeight: 1.5,
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
          }}
        />
      </label>

      {variables.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {variables.map((v) => (
            <span
              key={v}
              style={{
                background: 'linear-gradient(145deg, #edf2f8, #f9fbff)',
                border: '1px solid rgba(255,255,255,0.7)',
                borderRadius: 999,
                padding: '4px 8px',
                fontSize: 10,
                color: '#6f86c7',
                fontWeight: 700,
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                boxShadow:
                  '4px 4px 8px rgba(207, 214, 228, 0.45), -4px -4px 8px rgba(255,255,255,0.85)',
              }}
            >
              {`{{${v}}}`}
            </span>
          ))}
        </div>
      )}
    </BaseNode>
  );
};