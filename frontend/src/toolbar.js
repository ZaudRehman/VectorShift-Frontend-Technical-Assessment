// toolbar.js
import { DraggableNode } from './draggableNode';

const nodeConfig = [
  { type: 'customInput',  label: 'Input',     color: '#89b4fa' },
  { type: 'customOutput', label: 'Output',    color: '#a6e3a1' },
  { type: 'llm',          label: 'LLM',       color: '#cba6f7' },
  { type: 'text',         label: 'Text',      color: '#f38ba8' },
  { type: 'api',          label: 'API Call',  color: '#fab387' },
  { type: 'condition',    label: 'Condition', color: '#eba0ac' },
  { type: 'transform',    label: 'Transform', color: '#b4befe' },
  { type: 'math',         label: 'Math',      color: '#94e2d5' },
  { type: 'note',         label: 'Note',      color: '#f9e2af' },
];

export const PipelineToolbar = () => (
  <div
    style={{
      padding: '14px 10px',
      background: '#181825',
      borderRight: '1px solid #313244',
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      minWidth: 130,
      overflowY: 'auto',
    }}
  >
    <div style={{ fontSize: 10, color: '#6c7086', letterSpacing: '0.1em', marginBottom: 6, paddingLeft: 2 }}>
      NODES
    </div>
    {nodeConfig.map((n) => (
      <DraggableNode key={n.type} type={n.type} label={n.label} color={n.color} />
    ))}
  </div>
);