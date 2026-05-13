// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Main Menu
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Play, Settings } from "lucide-react";


export type MainMenuActionId = "start-game-1" | "settings-2" | "controls-3" | "high-scores-4";

export interface MainMenuProps {
  actions?: Partial<Record<MainMenuActionId, () => void>>;
}

export function MainMenu({ actions }: MainMenuProps) {
  return (
    <>
      {/* Dimmed Game Background Overlay */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none"></div>
      <div className="absolute inset-0 bg-surface/80 backdrop-blur-sm pointer-events-none z-0"></div>
      {/* Main Menu Container */}
      <main className="relative z-10 flex flex-col items-center justify-center w-full max-w-md p-8 border border-outline-variant bg-surface-container-low shadow-[0_0_15px_rgba(255,255,255,0.05)]">
      {/* Header / Brand */}
      <div className="mb-12 text-center">
      <h1 className="font-display-lg text-display-lg text-primary tracking-tighter uppercase border-b-2 border-primary pb-2 mb-2 shadow-[0_4px_10px_-4px_rgba(255,255,255,0.3)]">TETRIS<br />SUPERVISOR</h1>
      <p className="font-label-caps text-label-caps text-outline uppercase tracking-widest">System Ready</p>
      </div>
      {/* Menu Buttons */}
      <div className="flex flex-col w-full gap-4">
      {/* Primary Action */}
      <button className="h-touch-target flex items-center justify-between px-6 bg-primary text-on-primary border border-primary hover:bg-surface-variant hover:text-primary transition-colors duration-150 active:scale-95 group shadow-[0_0_8px_rgba(255,255,255,0.2)]" type="button" data-action-id="start-game-1" onClick={actions?.["start-game-1"]}>
      <span className="font-data-mono text-data-mono uppercase font-bold tracking-widest">START GAME</span>
      <Play className="group-hover:translate-x-1 transition-transform" aria-hidden={true} focusable="false" />
      </button>
      {/* Secondary Actions */}
      <button className="h-touch-target flex items-center justify-between px-6 bg-transparent text-primary border border-outline-variant hover:bg-surface-container-high hover:border-primary transition-colors duration-150 active:scale-95 group" type="button" data-action-id="settings-2" onClick={actions?.["settings-2"]}>
      <span className="font-data-mono text-data-mono uppercase tracking-widest">SETTINGS</span>
      <Settings className="opacity-50 group-hover:opacity-100 transition-opacity" aria-hidden={true} focusable="false" />
      </button>
      <button className="h-touch-target flex items-center justify-between px-6 bg-transparent text-primary border border-outline-variant hover:bg-surface-container-high hover:border-primary transition-colors duration-150 active:scale-95 group" type="button" data-action-id="controls-3" onClick={actions?.["controls-3"]}>
      <span className="font-data-mono text-data-mono uppercase tracking-widest">CONTROLS</span>
      <Circle className="opacity-50 group-hover:opacity-100 transition-opacity" aria-hidden={true} focusable="false" />
      </button>
      <button className="h-touch-target flex items-center justify-between px-6 bg-transparent text-primary border border-outline-variant hover:bg-surface-container-high hover:border-primary transition-colors duration-150 active:scale-95 group" type="button" data-action-id="high-scores-4" onClick={actions?.["high-scores-4"]}>
      <span className="font-data-mono text-data-mono uppercase tracking-widest">HIGH SCORES</span>
      <Circle className="opacity-50 group-hover:opacity-100 transition-opacity" aria-hidden={true} focusable="false" />
      </button>
      </div>
      {/* Footer Info */}
      <div className="mt-12 w-full flex justify-between items-center border-t border-outline-variant pt-4 opacity-60">
      <div className="flex items-center gap-2">
      <div className="w-2 h-2 bg-green-500 rounded-none shadow-[0_0_5px_rgba(34,197,94,0.8)]"></div>
      <span className="font-label-caps text-label-caps text-on-surface-variant">ONLINE</span>
      </div>
      <span className="font-label-caps text-label-caps text-on-surface-variant">V 2.4.1</span>
      </div>
      </main>
    </>
  );
}
