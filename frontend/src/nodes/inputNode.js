import { useState } from 'react';
import { BaseNode, nodeInputStyle } from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [name, setName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [type, setType] = useState(data?.inputType || 'Text');

  return (
    <BaseNode
      id={id}
      label="Input"
      color="#89b4fa"
      icon="→"
      outputs={[{ id: `${id}-value`, label: 'value', color: '#89b4fa' }]}
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
          <option>Number</option>
        </select>
      </label>
    </BaseNode>
  );
};
