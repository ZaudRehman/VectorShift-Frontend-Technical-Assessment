// toolbar.js
import { DraggableNode } from './draggableNode';

const nodeConfig = [
  { type: 'customInput', label: 'Input', color: '#b7dcff' },
  { type: 'customOutput', label: 'Output', color: '#bdeccf' },
  { type: 'llm', label: 'LLM', color: '#d8c7ff' },
  { type: 'text', label: 'Text', color: '#f7c6d9' },
  { type: 'api', label: 'API Call', color: '#ffd6ba' },
  { type: 'condition', label: 'Condition', color: '#f3c7ce' },
  { type: 'transform', label: 'Transform', color: '#cfd3ff' },
  { type: 'math', label: 'Math', color: '#bfe9e1' },
  { type: 'note', label: 'Note', color: '#f7e8b2' },
];

export const PipelineToolbar = () => (
  <div
    style={{
      padding: '18px',
      background: 'linear-gradient(145deg, #f5f7fc, #e9edf5)',
      borderRadius: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      width: 230,
      height: '100%',
      boxShadow:
        '14px 14px 32px rgba(207, 214, 228, 0.85), -12px -12px 28px rgba(255,255,255,0.95)',
    }}
  >
    <div
      style={{
        fontSize: 11,
        color: '#7b8497',
        fontWeight: 700,
        letterSpacing: '0.12em',
        marginBottom: 8,
        paddingLeft: 4,
      }}
    >
      COMPONENTS
    </div>

    {nodeConfig.map((n) => (
      <DraggableNode key={n.type} type={n.type} label={n.label} color={n.color} />
    ))}
  </div>
);