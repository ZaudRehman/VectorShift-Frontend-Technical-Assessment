import { Handle, Position } from 'reactflow';

const styles = {
  wrapper: (color, selected) => ({
    minWidth: 240,
    background: 'linear-gradient(145deg, #f8faff, #e7ecf5)',
    border: `1px solid ${selected ? color : 'rgba(255,255,255,0.75)'}`,
    borderRadius: 22,
    boxShadow: selected
      ? `0 0 0 4px ${color}33, 14px 14px 28px rgba(207, 214, 228, 0.9), -12px -12px 24px rgba(255,255,255,0.95)`
      : '12px 12px 24px rgba(207, 214, 228, 0.85), -10px -10px 22px rgba(255,255,255,0.95)',
    color: '#556074',
    position: 'relative',
    transition: 'box-shadow 0.2s ease, border-color 0.2s ease, transform 0.2s ease',
    overflow: 'visible',
  }),

  accentGlow: (color) => ({
    position: 'absolute',
    top: 12,
    right: 14,
    width: 10,
    height: 10,
    borderRadius: '50%',
    background: color,
    boxShadow: `0 0 0 5px ${color}33`,
  }),

  header: {
    padding: '16px 18px 10px',
    fontWeight: 700,
    fontSize: 13,
    letterSpacing: '0.02em',
    color: '#5b6578',
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },

  body: {
    padding: '8px 18px 18px',
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },

  handle: (color) => ({
    width: 14,
    height: 14,
    borderRadius: '50%',
    background: '#f4f7fb',
    border: `2px solid ${color}`,
    boxShadow:
      `3px 3px 6px rgba(207, 214, 228, 0.8), -2px -2px 5px rgba(255,255,255,0.95), 0 0 0 3px ${color}22`,
  }),

  handleLabel: (side) => ({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    [side === 'left' ? 'left' : 'right']: 18,
    fontSize: 10,
    fontWeight: 700,
    color: '#8891a4',
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
    lineHeight: 1,
  }),
};

export const BaseNode = ({
  id,
  label,
  color = '#b8b5ff',
  icon = '',
  inputs = [],
  outputs = [],
  children,
  selected,
  style = {},
}) => {
  return (
    <div style={{ ...styles.wrapper(color, selected), ...style }}>
      <div style={styles.accentGlow(color)} />

      <div style={styles.header}>
        {icon && <span style={{ fontSize: 15, lineHeight: 1 }}>{icon}</span>}
        <span>{label}</span>
      </div>

      <div style={styles.body}>{children}</div>

      {inputs.map((handle, i) => (
        <Handle
          key={handle.id}
          type="target"
          position={Position.Left}
          id={handle.id}
          style={{
            ...styles.handle(handle.color || color),
            top: `${((i + 1) / (inputs.length + 1)) * 100}%`,
            left: -8,
          }}
        >
          {handle.showLabel && handle.label && (
            <span style={styles.handleLabel('left')}>{handle.label}</span>
          )}
        </Handle>
      ))}

      {outputs.map((handle, i) => (
        <Handle
          key={handle.id}
          type="source"
          position={Position.Right}
          id={handle.id}
          style={{
            ...styles.handle(handle.color || color),
            top: `${((i + 1) / (outputs.length + 1)) * 100}%`,
            right: -8,
          }}
        >
          {handle.showLabel && handle.label && (
            <span style={styles.handleLabel('right')}>{handle.label}</span>
          )}
        </Handle>
      ))}
    </div>
  );
};

export const nodeInputStyle = {
  background: 'linear-gradient(145deg, #e9eef6, #f9fbff)',
  border: '1px solid rgba(255,255,255,0.8)',
  borderRadius: 12,
  color: '#5d6780',
  padding: '9px 12px',
  width: '100%',
  fontSize: 12,
  marginTop: 6,
  outline: 'none',
  transition: 'all 0.18s ease',
  boxShadow:
    'inset 3px 3px 6px rgba(207, 214, 228, 0.65), inset -2px -2px 5px rgba(255,255,255,0.92)',
};

export const nodeLabelStyle = {
  display: 'block',
};

export const nodeFieldTitleStyle = {
  display: 'block',
  marginBottom: 6,
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: '0.08em',
  color: '#8a93a8',
};

export const nodeHelperTextStyle = {
  fontSize: 10,
  color: '#98a1b3',
  lineHeight: 1.4,
};