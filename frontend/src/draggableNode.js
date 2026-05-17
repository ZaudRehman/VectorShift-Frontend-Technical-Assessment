// draggableNode.js
export const DraggableNode = ({ type, label, color = '#b8b5ff' }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, type)}
      onDragEnd={(e) => {
        e.currentTarget.style.opacity = '1';
        e.currentTarget.style.transform = 'translateX(0)';
      }}
      onDragStartCapture={(e) => {
        e.currentTarget.style.opacity = '0.75';
      }}
      style={{
        padding: '11px 14px',
        background: 'linear-gradient(145deg, #f8faff, #e4eaf4)',
        border: '1px solid rgba(255,255,255,0.75)',
        borderRadius: 16,
        fontSize: 13,
        fontWeight: 600,
        color: '#5d6780',
        cursor: 'grab',
        userSelect: 'none',
        transition: 'transform 0.15s ease, box-shadow 0.15s ease',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        boxShadow:
          '6px 6px 14px rgba(207, 214, 228, 0.75), -6px -6px 14px rgba(255,255,255,0.92)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateX(3px)';
        e.currentTarget.style.boxShadow =
          '8px 8px 18px rgba(207, 214, 228, 0.85), -6px -6px 16px rgba(255,255,255,0.95)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateX(0)';
        e.currentTarget.style.boxShadow =
          '6px 6px 14px rgba(207, 214, 228, 0.75), -6px -6px 14px rgba(255,255,255,0.92)';
      }}
    >
      <span
        style={{
          width: 10,
          height: 10,
          borderRadius: '50%',
          background: color,
          display: 'inline-block',
          flexShrink: 0,
          boxShadow: `0 0 0 4px ${color}55`,
        }}
      />
      {label}
    </div>
  );
};