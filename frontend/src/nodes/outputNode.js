import { useState } from 'react';
import { BaseNode, nodeInputStyle } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [name, setName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [type, setType] = useState(data?.outputType || 'Text');

  return (
    <BaseNode
      id={id}
      label="Output"
      color="#a6e3a1"
      icon="⬡"
      inputs={[{ id: `${id}-value`, label: 'value', color: '#a6e3a1' }]}
    >
      <label style={{ display: 'block' }}>
        <span style={{ color: '#a6adc8', fontSize: 11 }}>NAME</span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={nodeInputStyle}
        />
      </label>
      <label style={{ display: 'block' }}>
        <span style={{ color: '#a6adc8', fontSize: 11 }}>TYPE</span>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={nodeInputStyle}
        >
          <option>Text</option>
          <option>File</option>
          <option>Image</option>
        </select>
      </label>
    </BaseNode>
  );
};
