// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Pause Overlay
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Pause, Play, RotateCw, Settings } from "lucide-react";


export type PauseOverlayActionId = "button-1-1" | "button-2-2" | "button-3-3" | "resume-4" | "restart-5" | "settings-6" | "quit-to-menu-7";

export interface PauseOverlayProps {
  actions?: Partial<Record<PauseOverlayActionId, () => void>>;
}

export function PauseOverlay({ actions }: PauseOverlayProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-surface dark:bg-surface text-primary dark:text-primary docked full-width top-0 border-b border-outline-variant flat no shadows flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop h-touch-target z-10 shrink-0">
      <div className="font-headline-md text-headline-md text-primary tracking-tighter">
                  TETRIS_SUPERVISOR
              </div>
      <div className="flex items-center gap-gutter">
      <button aria-label="settings" className="text-outline hover:text-primary hover:bg-surface-variant transition-colors duration-150 active:scale-95 p-2 rounded flex items-center justify-center h-touch-target w-touch-target" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <button aria-label="pause" className="text-primary font-bold cyber-glow border border-primary p-2 rounded flex items-center justify-center h-touch-target w-touch-target transition-colors duration-150 active:scale-95" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Pause aria-hidden={true} focusable="false" />
      </button>
      <button aria-label="help_outline" className="text-outline hover:text-primary hover:bg-surface-variant transition-colors duration-150 active:scale-95 p-2 rounded flex items-center justify-center h-touch-target w-touch-target" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      <div className="flex-1 flex relative">
      {/* SideNavBar */}
      <nav className="bg-surface-container-low dark:bg-surface-container-low text-primary dark:text-primary docked left-0 h-full w-64 border-r border-outline-variant flat no shadows hidden md:flex flex-col h-full fixed left-0 top-0 pt-16 z-0">
      <div className="p-6 border-b border-outline-variant">
      <div className="font-label-caps text-label-caps text-outline mb-2">Supervisor Profile</div>
      <div className="font-headline-md text-headline-md text-primary">SUPERVISOR_01</div>
      <div className="font-data-mono text-data-mono text-emerald-500 mt-1 flex items-center gap-2">
      <div className="w-2 h-2 bg-emerald-500 rounded-sm cyber-glow text-emerald-500"></div>
                          STATUS: OPERATIONAL
                      </div>
      </div>
      <div className="flex flex-col py-4 font-data-mono text-data-mono">
      <a className="text-outline px-4 py-3 hover:bg-surface-container hover:text-primary transition-colors duration-200 ease-in-out flex items-center gap-3" href="#">
      <Circle aria-hidden={true} focusable="false" />
                          Dashboard
                      </a>
      <a className="text-outline px-4 py-3 hover:bg-surface-container hover:text-primary transition-colors duration-200 ease-in-out flex items-center gap-3" href="#">
      <Circle aria-hidden={true} focusable="false" />
                          Analytics
                      </a>
      <a className="bg-surface-container-highest text-primary border-l-4 border-primary px-4 py-3 hover:bg-surface-container hover:text-primary transition-colors duration-200 ease-in-out flex items-center gap-3" href="#">
      <Circle aria-hidden={true} focusable="false" />
                          Controls
                      </a>
      <a className="text-outline px-4 py-3 hover:bg-surface-container hover:text-primary transition-colors duration-200 ease-in-out flex items-center gap-3" href="#">
      <Circle aria-hidden={true} focusable="false" />
                          System
                      </a>
      </div>
      </nav>
      {/* Main Content Area with Pause Overlay */}
      <main className="flex-1 md:ml-64 relative bg-[#0F172A] bg-grid">
      {/* Simulated Game Board Background (Dimmed) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center">
      <div className="w-[320px] h-[640px] border border-outline-variant grid grid-cols-10 grid-rows-20 gap-[1px] bg-surface">
      {/* Simulated blocks */}
      <div className="col-start-4 row-start-19 col-span-4 h-full bg-cyan-500"></div>
      <div className="col-start-3 row-start-20 col-span-2 h-full bg-blue-500"></div>
      </div>
      </div>
      {/* PAUSE OVERLAY */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-20 flex flex-col items-center justify-center p-4">
      <div className="border border-outline-variant bg-surface/90 p-8 md:p-12 max-w-md w-full shadow-2xl relative">
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary"></div>
      {/* Header */}
      <div className="text-center mb-10">
      <div className="font-data-mono text-data-mono text-emerald-500 flex items-center justify-center gap-2 mb-4">
      <div className="w-2 h-2 bg-emerald-500 rounded-sm cyber-glow text-emerald-500"></div>
                                  SYSTEM SUSPENDED
                              </div>
      <h1 className="font-display-lg text-display-lg text-primary tracking-widest uppercase cyber-glow text-primary inline-block">PAUSED</h1>
      </div>
      {/* Session Stats */}
      <div className="grid grid-cols-2 gap-4 mb-10 border-t border-b border-outline-variant py-6">
      <div className="text-center border-r border-outline-variant">
      <div className="font-label-caps text-label-caps text-outline mb-1">SCORE</div>
      <div className="font-data-mono text-data-mono text-tertiary text-xl">042,910</div>
      </div>
      <div className="text-center">
      <div className="font-label-caps text-label-caps text-outline mb-1">LEVEL</div>
      <div className="font-data-mono text-data-mono text-tertiary text-xl">09</div>
      </div>
      </div>
      {/* Actions */}
      <div className="flex flex-col gap-4">
      <button className="h-touch-target w-full bg-primary text-on-primary font-data-mono text-data-mono border border-primary hover:bg-tertiary-fixed transition-colors active:scale-95 flex items-center justify-center gap-2 cyber-glow" type="button" data-action-id="resume-4" onClick={actions?.["resume-4"]}>
      <Play className="text-[18px]" aria-hidden={true} focusable="false" />
                                  RESUME
                              </button>
      <button className="h-touch-target w-full bg-transparent text-primary font-data-mono text-data-mono border border-outline-variant hover:border-primary hover:text-primary hover:bg-surface-variant transition-colors active:scale-95 flex items-center justify-center gap-2" type="button" data-action-id="restart-5" onClick={actions?.["restart-5"]}>
      <Circle className="text-[18px]" aria-hidden={true} focusable="false" />
                                  RESTART
                              </button>
      <button className="h-touch-target w-full bg-transparent text-primary font-data-mono text-data-mono border border-outline-variant hover:border-primary hover:text-primary hover:bg-surface-variant transition-colors active:scale-95 flex items-center justify-center gap-2" type="button" data-action-id="settings-6" onClick={actions?.["settings-6"]}>
      <Settings className="text-[18px]" aria-hidden={true} focusable="false" />
                                  SETTINGS
                              </button>
      <button className="h-touch-target w-full mt-4 bg-transparent text-error font-data-mono text-data-mono border border-error/50 hover:border-error hover:bg-error/10 transition-colors active:scale-95 flex items-center justify-center gap-2" type="button" data-action-id="quit-to-menu-7" onClick={actions?.["quit-to-menu-7"]}>
      <Circle className="text-[18px]" aria-hidden={true} focusable="false" />
                                  QUIT TO MENU
                              </button>
      </div>
      </div>
      </div>
      </main>
      </div>
      {/* BottomNavBar */}
      <nav className="bg-surface-container-lowest dark:bg-surface-container-lowest text-primary dark:text-primary font-label-caps text-label-caps docked full-width bottom-0 border-t border-outline-variant flat no shadows fixed bottom-0 w-full z-50 flex justify-around items-center px-4 h-20 md:hidden">
      <a className="flex flex-col items-center justify-center text-outline pt-2 hover:bg-surface-container-high active:bg-primary active:text-on-primary transition-colors w-full h-full" href="#">
      <Circle className="mb-1" aria-hidden={true} focusable="false" />
                  Navigate
              </a>
      <a className="flex flex-col items-center justify-center text-outline pt-2 hover:bg-surface-container-high active:bg-primary active:text-on-primary transition-colors w-full h-full" href="#">
      <RotateCw className="mb-1" aria-hidden={true} focusable="false" />
                  Rotate
              </a>
      <a className="flex flex-col items-center justify-center text-primary border-t-2 border-primary pt-2 hover:bg-surface-container-high active:bg-primary active:text-on-primary transition-colors w-full h-full" href="#">
      <Circle className="mb-1" aria-hidden={true} focusable="false" />
                  Drop
              </a>
      <a className="flex flex-col items-center justify-center text-outline pt-2 hover:bg-surface-container-high active:bg-primary active:text-on-primary transition-colors w-full h-full" href="#">
      <Circle className="mb-1" aria-hidden={true} focusable="false" />
                  Hold
              </a>
      </nav>
    </>
  );
}
