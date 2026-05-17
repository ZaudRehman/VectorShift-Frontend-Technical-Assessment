import { useState } from 'react';
import { BaseNode, nodeInputStyle } from './BaseNode';

const labelStyle = {
  display: 'block',
};

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

const previewCardStyle = (color) => ({
  marginTop: 2,
  padding: '10px 12px',
  borderRadius: 14,
  background: 'linear-gradient(145deg, #edf2f8, #f9fbff)',
  boxShadow:
    'inset 2px 2px 4px rgba(207, 214, 228, 0.55), inset -2px -2px 4px rgba(255,255,255,0.9)',
  color,
  fontSize: 12,
  fontWeight: 700,
});

export const ApiNode = ({ id, data }) => {
  const [url, setUrl] = useState(data?.url || 'https://api.example.com/v1');
  const [method, setMethod] = useState(data?.method || 'GET');

  return (
    <BaseNode
      id={id}
      label="API Call"
      color="#ffd6ba"
      icon="⚡"
      inputs={[{ id: `${id}-body`, label: 'body', color: '#ffd6ba' }]}
      outputs={[
        { id: `${id}-response`, label: 'response', color: '#bdeccf' },
        { id: `${id}-status`, label: 'status', color: '#f7e8b2' },
      ]}
    >
      <label style={labelStyle}>
        <span style={fieldTitleStyle}>ENDPOINT URL</span>
        <input value={url} onChange={(e) => setUrl(e.target.value)} style={nodeInputStyle} />
      </label>

      <label style={labelStyle}>
        <span style={fieldTitleStyle}>METHOD</span>
        <select value={method} onChange={(e) => setMethod(e.target.value)} style={nodeInputStyle}>
          {['GET', 'POST', 'PUT', 'PATCH', 'DELETE'].map((m) => (
            <option key={m}>{m}</option>
          ))}
        </select>
      </label>

      <div style={previewCardStyle('#d28a57')}>
        {method} request
      </div>
    </BaseNode>
  );
};

export const ConditionNode = ({ id, data }) => {
  const [expr, setExpr] = useState(data?.expr || 'value > 0');

  return (
    <BaseNode
      id={id}
      label="Condition"
      color="#f3c7ce"
      icon="⑂"
      inputs={[{ id: `${id}-input`, label: 'input', color: '#f3c7ce' }]}
      outputs={[
        { id: `${id}-true`, label: 'true', color: '#bdeccf' },
        { id: `${id}-false`, label: 'false', color: '#f7c6d9' },
      ]}
    >
      <label style={labelStyle}>
        <span style={fieldTitleStyle}>EXPRESSION</span>
        <input
          value={expr}
          onChange={(e) => setExpr(e.target.value)}
          style={{ ...nodeInputStyle, fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}
          placeholder="e.g. value > 0"
        />
      </label>

      <div style={helperStyle}>
        Routes flow based on a boolean expression.
      </div>
    </BaseNode>
  );
};

export const TransformNode = ({ id, data }) => {
  const [op, setOp] = useState(data?.op || 'JSON.parse');

  return (
    <BaseNode
      id={id}
      label="Transform"
      color="#cfd3ff"
      icon="⇄"
      inputs={[{ id: `${id}-input`, label: 'input', color: '#cfd3ff' }]}
      outputs={[{ id: `${id}-output`, label: 'output', color: '#cfd3ff' }]}
    >
      <label style={labelStyle}>
        <span style={fieldTitleStyle}>OPERATION</span>
        <select value={op} onChange={(e) => setOp(e.target.value)} style={nodeInputStyle}>
          {['JSON.parse', 'JSON.stringify', 'toUpperCase', 'toLowerCase', 'trim', 'parseInt', 'parseFloat'].map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </label>

      <div style={previewCardStyle('#7a83c7')}>
        {op}
      </div>
    </BaseNode>
  );
};

export const NoteNode = ({ id, data }) => {
  const [note, setNote] = useState(data?.note || '');

  return (
    <BaseNode id={id} label="Note" color="#f7e8b2" icon="✎">
      <label style={labelStyle}>
        <span style={fieldTitleStyle}>ANNOTATION</span>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Add context, instructions, or reminders..."
          style={{
            ...nodeInputStyle,
            minHeight: 88,
            resize: 'vertical',
            fontFamily: 'inherit',
            lineHeight: 1.5,
          }}
        />
      </label>

      <div style={helperStyle}>
        Visual note only — this node does not participate in execution.
      </div>
    </BaseNode>
  );
};

export const MathNode = ({ id, data }) => {
  const [operator, setOperator] = useState(data?.operator || '+');

  return (
    <BaseNode
      id={id}
      label="Math"
      color="#bfe9e1"
      icon="∑"
      inputs={[
        { id: `${id}-a`, label: 'a', color: '#bfe9e1' },
        { id: `${id}-b`, label: 'b', color: '#bfe9e1' },
      ]}
      outputs={[{ id: `${id}-result`, label: 'result', color: '#bfe9e1' }]}
    >
      <label style={labelStyle}>
        <span style={fieldTitleStyle}>OPERATOR</span>
        <select value={operator} onChange={(e) => setOperator(e.target.value)} style={nodeInputStyle}>
          {['+', '-', '×', '÷', '%', '**', 'max', 'min'].map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </label>

      <div
        style={{
          textAlign: 'center',
          fontSize: 20,
          color: '#4aa99a',
          fontWeight: 800,
          padding: '6px 0 2px',
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
        }}
      >
        a {operator} b
      </div>
    </BaseNode>
  );
};