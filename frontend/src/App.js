import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
        background:
          'radial-gradient(circle at top left, #f8eefe 0%, transparent 28%), radial-gradient(circle at top right, #e8f4ff 0%, transparent 30%), linear-gradient(180deg, #eef1f6 0%, #e9edf5 100%)',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <PipelineUI />
      </div>

      <div
        style={{
          position: 'absolute',
          top: 20,
          left: 20,
          right: 20,
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          padding: '14px 24px',
          background: 'linear-gradient(145deg, #f5f7fc, #e9edf5)',
          borderRadius: 22,
          boxShadow:
            '14px 14px 30px rgba(207, 214, 228, 0.85), -12px -12px 28px rgba(255,255,255,0.95)',
          gap: 12,
        }}
      >
        <span
          style={{
            fontWeight: 900,
            fontSize: 19,
            color: '#5d6780',
            letterSpacing: '-0.03em',
          }}
        >
          <span style={{ color: '#a8b8ff' }}>Vector</span>Shift
        </span>

        <div
          style={{
            width: 1,
            height: 18,
            background: '#d6deeb',
          }}
        />

        <span style={{ color: '#7b8497', fontSize: 13, fontWeight: 600 }}>
          Soft Canvas Editor
        </span>
      </div>

      <div
        style={{
          position: 'absolute',
          top: 92,
          left: 20,
          bottom: 20,
          zIndex: 10,
        }}
      >
        <PipelineToolbar />
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 30,
          right: 30,
          zIndex: 10,
        }}
      >
        <SubmitButton />
      </div>
    </div>
  );
}

export default App;