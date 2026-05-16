/**
 * customNodes.js — 5 custom nodes built on BaseNode abstraction.
 * Each node is ~20-40 lines. BaseNode handles all shared structure,
 * handles, styling, and layout. These nodes only define their config.
 */
import { useState } from 'react';
import { BaseNode, nodeInputStyle } from './BaseNode';

// ─── 1. API Call Node ───────────────────────────────────────────────────────
export const ApiNode = ({ id, data }) => {
  const [url, setUrl] = useState(data?.url || 'https://api.example.com/v1');
  const [method, setMethod] = useState(data?.method || 'GET');

  return (
    <BaseNode
      id={id}
      label="API Call"
      color="#fab387"
      icon="⚡"
      inputs={[{ id: `${id}-body`, label: 'body', color: '#fab387' }]}
      outputs={[
        { id: `${id}-response`, label: 'response', color: '#a6e3a1' },
        { id: `${id}-status`, label: 'status', color: '#f9e2af' },
      ]}
    >
      <label style={{ display: 'block' }}>
        <span style={{ color: '#a6adc8', fontSize: 11 }}>ENDPOINT URL</span>
        <input value={url} onChange={(e) => setUrl(e.target.value)} style={nodeInputStyle} />
      </label>
      <label style={{ display: 'block' }}>
        <span style={{ color: '#a6adc8', fontSize: 11 }}>METHOD</span>
        <select value={method} onChange={(e) => setMethod(e.target.value)} style={nodeInputStyle}>
          {['GET', 'POST', 'PUT', 'PATCH', 'DELETE'].map((m) => <option key={m}>{m}</option>)}
        </select>
      </label>
    </BaseNode>
  );
};

// ─── 2. Condition / If-Else Node ────────────────────────────────────────────
export const ConditionNode = ({ id, data }) => {
  const [expr, setExpr] = useState(data?.expr || 'value > 0');

  return (
    <BaseNode
      id={id}
      label="Condition"
      color="#eba0ac"
      icon="⑂"
      inputs={[{ id: `${id}-input`, label: 'input', color: '#eba0ac' }]}
      outputs={[
        { id: `${id}-true`, label: 'true ✓', color: '#a6e3a1' },
        { id: `${id}-false`, label: 'false ✗', color: '#f38ba8' },
      ]}
    >
      <label style={{ display: 'block' }}>
        <span style={{ color: '#a6adc8', fontSize: 11 }}>EXPRESSION</span>
        <input
          value={expr}
          onChange={(e) => setExpr(e.target.value)}
          style={{ ...nodeInputStyle, fontFamily: 'monospace' }}
          placeholder="e.g. value > 0"
        />
      </label>
    </BaseNode>
  );
};

// ─── 3. Data Transform Node ─────────────────────────────────────────────────
export const TransformNode = ({ id, data }) => {
  const [op, setOp] = useState(data?.op || 'JSON.parse');

  return (
    <BaseNode
      id={id}
      label="Transform"
      color="#b4befe"
      icon="⇄"
      inputs={[{ id: `${id}-input`, label: 'input', color: '#b4befe' }]}
      outputs={[{ id: `${id}-output`, label: 'output', color: '#b4befe' }]}
    >
      <label style={{ display: 'block' }}>
        <span style={{ color: '#a6adc8', fontSize: 11 }}>OPERATION</span>
        <select value={op} onChange={(e) => setOp(e.target.value)} style={nodeInputStyle}>
          {['JSON.parse', 'JSON.stringify', 'toUpperCase', 'toLowerCase', 'trim', 'parseInt', 'parseFloat'].map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </label>
    </BaseNode>
  );
};

// ─── 4. Note / Annotation Node ──────────────────────────────────────────────
export const NoteNode = ({ id, data }) => {
  const [note, setNote] = useState(data?.note || 'Add a note...');

  return (
    <BaseNode id={id} label="Note" color="#f9e2af" icon="✎">
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Add a note..."
        style={{
          ...nodeInputStyle,
          minHeight: 60,
          resize: 'vertical',
          fontFamily: 'inherit',
          lineHeight: 1.5,
        }}
      />
      <span style={{ fontSize: 10, color: '#6c7086' }}>No connections — annotation only</span>
    </BaseNode>
  );
};

// ─── 5. Math / Arithmetic Node ──────────────────────────────────────────────
export const MathNode = ({ id, data }) => {
  const [operator, setOperator] = useState(data?.operator || '+');

  return (
    <BaseNode
      id={id}
      label="Math"
      color="#94e2d5"
      icon="∑"
      inputs={[
        { id: `${id}-a`, label: 'a', color: '#94e2d5' },
        { id: `${id}-b`, label: 'b', color: '#94e2d5' },
      ]}
      outputs={[{ id: `${id}-result`, label: 'result', color: '#94e2d5' }]}
    >
      <label style={{ display: 'block' }}>
        <span style={{ color: '#a6adc8', fontSize: 11 }}>OPERATOR</span>
        <select value={operator} onChange={(e) => setOperator(e.target.value)} style={nodeInputStyle}>
          {['+', '-', '×', '÷', '%', '**', 'max', 'min'].map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </label>
      <div style={{
        textAlign: 'center',
        fontSize: 20,
        color: '#94e2d5',
        fontWeight: 700,
        padding: '4px 0',
        fontFamily: 'monospace',
      }}>
        a {operator} b
      </div>
    </BaseNode>
  );
};