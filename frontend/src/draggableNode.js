// draggableNode.js
export const DraggableNode = ({ type, label, color = '#6366f1' }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, type)}
      onDragEnd={(e) => (e.currentTarget.style.opacity = '1')}
      onDragStartCapture={(e) => (e.currentTarget.style.opacity = '0.7')}
      style={{
        padding: '7px 12px',
        background: '#1e1e2e',
        border: `1px solid ${color}55`,
        borderLeft: `3px solid ${color}`,
        borderRadius: 6,
        fontSize: 12,
        color: '#cdd6f4',
        cursor: 'grab',
        userSelect: 'none',
        transition: 'background 0.15s, transform 0.1s',
        display: 'flex',
        alignItems: 'center',
        gap: 6,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = '#313244';
        e.currentTarget.style.transform = 'translateX(2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = '#1e1e2e';
        e.currentTarget.style.transform = 'translateX(0)';
      }}
    >
      <span
        style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: color,
          display: 'inline-block',
          flexShrink: 0,
        }}
      />
      {label}
    </div>
  );
};