import { useStore } from './store';

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    try {
      const res = await fetch('https://studious-succotash-qr6qwv4jw9pfgx4-8000.app.github.dev/pipelines/parse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nodes, edges }),
      });

      if (!res.ok) throw new Error(`Server error: ${res.status}`);

      const data = await res.json();

      alert(
        `━━━━━━━━━━━━━━━━━━━━━━━\n` +
        `  Pipeline Analysis\n` +
        `━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
        `  Nodes   : ${data.num_nodes}\n` +
        `  Edges   : ${data.num_edges}\n` +
        `  Valid DAG: ${data.is_dag ? '✅  Yes' : '❌  No — cycle detected'}\n`
      );
    } catch (err) {
      alert(`❌ Error: ${err.message}\n\nMake sure the backend is running:\nuvicorn main:app --reload`);
    }
  };

  return (
    <button
      onClick={handleSubmit}
      style={{
        background: 'linear-gradient(145deg, #f8faff, #e4eaf4)',
        color: '#5d6780',
        border: 'none',
        borderRadius: 999,
        padding: '14px 28px',
        fontWeight: 700,
        fontSize: 14,
        letterSpacing: '0.02em',
        cursor: 'pointer',
        boxShadow:
          '8px 8px 18px rgba(207, 214, 228, 0.85), -8px -8px 18px rgba(255,255,255,0.95)',
        transition: 'all 0.18s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-1px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.boxShadow =
          'inset 4px 4px 8px rgba(207, 214, 228, 0.9), inset -4px -4px 8px rgba(255,255,255,0.95)';
        e.currentTarget.style.transform = 'scale(0.985)';
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.boxShadow =
          '8px 8px 18px rgba(207, 214, 228, 0.85), -8px -8px 18px rgba(255,255,255,0.95)';
        e.currentTarget.style.transform = 'translateY(-1px)';
      }}
    >
      Run Pipeline
    </button>
  );
};