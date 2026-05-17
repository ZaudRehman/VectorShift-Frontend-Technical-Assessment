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

export const OutputNode = ({ id, data }) => {
  const [name, setName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [type, setType] = useState(data?.outputType || 'Text');

  return (
    <BaseNode
      id={id}
      label="Output"
      color="#bdeccf"
      icon="⬡"
      inputs={[{ id: `${id}-value`, label: 'value', color: '#bdeccf' }]}
    >
      <label style={labelStyle}>
        <span style={fieldTitleStyle}>NAME</span>
        <input value={name} onChange={(e) => setName(e.target.value)} style={nodeInputStyle} />
      </label>

      <label style={labelStyle}>
        <span style={fieldTitleStyle}>TYPE</span>
        <select value={type} onChange={(e) => setType(e.target.value)} style={nodeInputStyle}>
          <option>Text</option>
          <option>File</option>
          <option>Image</option>
        </select>
      </label>
    </BaseNode>
  );
};