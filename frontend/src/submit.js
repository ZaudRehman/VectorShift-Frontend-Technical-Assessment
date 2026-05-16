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
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '14px 0 10px',
        background: '#181825',
        borderTop: '1px solid #313244',
      }}
    >
      <button
        onClick={handleSubmit}
        style={{
          background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
          color: '#fff',
          border: 'none',
          borderRadius: 8,
          padding: '10px 36px',
          fontWeight: 700,
          fontSize: 13,
          letterSpacing: '0.04em',
          cursor: 'pointer',
          boxShadow: '0 4px 18px #6366f144',
          transition: 'transform 0.1s ease, box-shadow 0.1s ease',
        }}
        onMouseEnter={(e) => {
          e.target.style.boxShadow = '0 6px 24px #6366f166';
          e.target.style.transform = 'translateY(-1px)';
        }}
        onMouseLeave={(e) => {
          e.target.style.boxShadow = '0 4px 18px #6366f144';
          e.target.style.transform = 'translateY(0)';
        }}
        onMouseDown={(e) => (e.target.style.transform = 'scale(0.97)')}
        onMouseUp={(e) => (e.target.style.transform = 'scale(1)')}
      >
        Submit Pipeline
      </button>
    </div>
  );
};