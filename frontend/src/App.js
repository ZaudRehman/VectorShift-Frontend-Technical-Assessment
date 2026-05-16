import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      background: '#11111b',
      overflow: 'hidden',
    }}>
      {/* Top Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: '10px 20px',
        background: '#181825',
        borderBottom: '1px solid #313244',
        gap: 10,
      }}>
        <span style={{
          fontWeight: 800,
          fontSize: 16,
          color: '#cdd6f4',
          fontFamily: "'Inter', sans-serif",
          letterSpacing: '-0.02em',
        }}>
          <span style={{ color: '#6366f1' }}>Vector</span>Shift
        </span>
        <span style={{ color: '#45475a', fontSize: 12, fontFamily: 'monospace' }}>Pipeline Editor</span>
      </div>

      {/* Main */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <PipelineToolbar />
        <PipelineUI />
      </div>

      {/* Submit */}
      <SubmitButton />
    </div>
  );
}

export default App;