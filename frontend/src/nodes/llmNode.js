import { useState } from 'react';
import { BaseNode, nodeInputStyle } from './BaseNode';

export const LLMNode = ({ id, data }) => {
  const [model, setModel] = useState(data?.model || 'gpt-4o');

  return (
    <BaseNode
      id={id}
      label="LLM"
      color="#cba6f7"
      icon="✦"
      inputs={[
        { id: `${id}-system`, label: 'system', color: '#f38ba8' },
        { id: `${id}-prompt`, label: 'prompt', color: '#fab387' },
      ]}
      outputs={[
        { id: `${id}-response`, label: 'response', color: '#cba6f7' },
      ]}
    >
      <label style={{ display: 'block' }}>
        <span style={{ color: '#a6adc8', fontSize: 11 }}>MODEL</span>
        <select
          value={model}
          onChange={(e) => setModel(e.target.value)}
          style={nodeInputStyle}
        >
          <option>gpt-4o</option>
          <option>gpt-4o-mini</option>
          <option>claude-3-5-sonnet</option>
          <option>gemini-1.5-pro</option>
        </select>
      </label>
    </BaseNode>
  );
};
