import { useState } from 'react';
import { BaseNode, nodeInputStyle } from './BaseNode';

const labelStyle = { display: 'block' };
const fieldTitleStyle = {
  display: 'block',
  marginBottom: 6,
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: '0.08em',
  color: '#8a93a8',
};

const helperStyle = {
  fontSize: 10,
  color: '#98a1b3',
  lineHeight: 1.4,
};

export const LLMNode = ({ id, data }) => {
  const [model, setModel] = useState(data?.model || 'gpt-4o');

  return (
    <BaseNode
      id={id}
      label="LLM"
      color="#d8c7ff"
      icon="✦"
      inputs={[
        { id: `${id}-system`, label: 'system', color: '#f7c6d9' },
        { id: `${id}-prompt`, label: 'prompt', color: '#ffd6ba' },
      ]}
      outputs={[{ id: `${id}-response`, label: 'response', color: '#d8c7ff' }]}
    >
      <label style={labelStyle}>
        <span style={fieldTitleStyle}>MODEL</span>
        <select value={model} onChange={(e) => setModel(e.target.value)} style={nodeInputStyle}>
          <option>gpt-4o</option>
          <option>gpt-4o-mini</option>
          <option>claude-3-5-sonnet</option>
          <option>gemini-1.5-pro</option>
        </select>
      </label>

      <div style={helperStyle}>
        Takes system and prompt inputs, returns generated output.
      </div>
    </BaseNode>
  );
};