import { useState, useEffect } from 'preact/hooks';
import './main.css';
import Emulator from './emulator';
import Entrypoint from './entrypoint';
import SettingsModal from './settings';

export function Main() {
  const [emulating, setEmulating] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const startEmulating = async () => {
    setEmulating(true);
  };

  const stopEmulating = async () => {
    setEmulating(false);
  };

  const onOpenSettings = () => {
    setSettingsOpen(true);
  };

  const onCloseSettings = () => {
    setSettingsOpen(false);
  };

  // autoLoadRom에서 호출할 수 있도록 글로벌 콜백 등록
  useEffect(() => {
    (window as any).__startEmulating = () => {
      setEmulating(true);
    };
    return () => {
      delete (window as any).__startEmulating;
    };
  }, []);

  return (
    <>
      <div className="demo-page-container place-content-center">
        {emulating ? (
          <Emulator
            onOpenSettings={onOpenSettings}
            stopEmulating={stopEmulating}
          />
        ) : (
          <Entrypoint 
            onStartEmulating={startEmulating} 
            onOpenSettings={onOpenSettings}
          />
        )}
      </div>
      <SettingsModal
        showing={settingsOpen}
        onClose={onCloseSettings}
      />
    </>
  )
}
