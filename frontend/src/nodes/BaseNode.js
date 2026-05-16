// BaseNode.js — Shared node abstraction for all VectorShift pipeline nodes
import { Handle, Position } from 'reactflow';

const styles = {
  wrapper: (color) => ({
    minWidth: 220,
    background: '#1e1e2e',
    border: `2px solid ${color}`,
    borderRadius: 12,
    boxShadow: `0 0 16px ${color}22`,
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    color: '#cdd6f4',
    position: 'relative',
  }),
  header: (color) => ({
    background: color,
    padding: '8px 14px',
    borderRadius: '10px 10px 0 0',
    fontWeight: 700,
    fontSize: 12,
    letterSpacing: '0.06em',
    color: '#1e1e2e',
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    gap: 6,
  }),
  body: {
    padding: '12px 14px',
    fontSize: 12,
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  handle: (color) => ({
    background: color,
    width: 10,
    height: 10,
    border: '2px solid #1e1e2e',
    borderRadius: '50%',
  }),
  handleLabel: (side) => ({
    position: 'absolute',
    [side === 'left' ? 'left' : 'right']: 14,
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: 10,
    color: '#a6adc8',
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
  }),
};

/**
 * BaseNode — Reusable node shell for React Flow pipeline nodes.
 *
 * @param {string}   id       - React Flow node ID
 * @param {string}   label    - Node display name
 * @param {string}   color    - Accent color hex (header + border + glow)
 * @param {string}   icon     - Optional emoji or text icon in the header
 * @param {Array}    inputs   - [{ id, label?, color? }] — left-side target handles
 * @param {Array}    outputs  - [{ id, label?, color? }] — right-side source handles
 * @param {ReactNode} children - Node body content
 */
export const BaseNode = ({
  id,
  label,
  color = '#6366f1',
  icon = '',
  inputs = [],
  outputs = [],
  children,
}) => {
  return (
    <div style={styles.wrapper(color)}>
      {/* Header */}
      <div style={styles.header(color)}>
        {icon && <span style={{ fontSize: 14 }}>{icon}</span>}
        {label}
      </div>

      {/* Body */}
      <div style={styles.body}>{children}</div>

      {/* Input (target) Handles — left side */}
      {inputs.map((handle, i) => (
        <Handle
          key={handle.id}
          type="target"
          position={Position.Left}
          id={handle.id}
          style={{
            ...styles.handle(handle.color || '#89b4fa'),
            top: `${((i + 1) / (inputs.length + 1)) * 100}%`,
          }}
        >
          {handle.label && (
            <span style={styles.handleLabel('left')}>{handle.label}</span>
          )}
        </Handle>
      ))}

      {/* Output (source) Handles — right side */}
      {outputs.map((handle, i) => (
        <Handle
          key={handle.id}
          type="source"
          position={Position.Right}
          id={handle.id}
          style={{
            ...styles.handle(handle.color || '#a6e3a1'),
            top: `${((i + 1) / (outputs.length + 1)) * 100}%`,
          }}
        >
          {handle.label && (
            <span style={styles.handleLabel('right')}>{handle.label}</span>
          )}
        </Handle>
      ))}
    </div>
  );
};

// Shared input style — import this in any node file
export const nodeInputStyle = {
  background: '#313244',
  border: '1px solid #45475a',
  borderRadius: 6,
  color: '#cdd6f4',
  padding: '4px 8px',
  width: '100%',
  fontSize: 12,
  marginTop: 3,
  outline: 'none',
};
