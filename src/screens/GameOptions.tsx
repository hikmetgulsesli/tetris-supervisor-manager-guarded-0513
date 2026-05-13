// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Options
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowLeft, Circle, Pause, RotateCw, Settings } from "lucide-react";


export type GameOptionsActionId = "button-1-1" | "button-2-2" | "button-3-3" | "easy-4" | "normal-5" | "hard-6" | "clear-high-scores-7";

export interface GameOptionsProps {
  actions?: Partial<Record<GameOptionsActionId, () => void>>;
}

export function GameOptions({ actions }: GameOptionsProps) {
  return (
    <>
      {/* SideNavBar (Desktop) */}
      <nav className="hidden md:flex flex-col h-full fixed left-0 top-0 pt-16 bg-surface-container-low border-r border-outline-variant docked h-full w-64 z-40 transition-colors duration-200 ease-in-out">
      <div className="px-4 mb-8">
      <h2 className="font-headline-md text-headline-md text-primary">SUPERVISOR_01</h2>
      <p className="font-data-mono text-data-mono text-outline mt-1">STATUS: OPERATIONAL</p>
      </div>
      <ul className="flex-1 font-data-mono text-data-mono">
      <li>
      <a className="flex items-center gap-3 text-outline px-4 py-3 hover:bg-surface-container hover:text-primary transition-colors" href="#">
      <Circle aria-hidden={true} focusable="false" />
                          Dashboard
                      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 text-outline px-4 py-3 hover:bg-surface-container hover:text-primary transition-colors" href="#">
      <Circle aria-hidden={true} focusable="false" />
                          Analytics
                      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 text-outline px-4 py-3 hover:bg-surface-container hover:text-primary transition-colors" href="#">
      <Circle aria-hidden={true} focusable="false" />
                          Controls
                      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 bg-surface-container-highest text-primary border-l-4 border-primary px-4 py-3 hover:bg-surface-container hover:text-primary transition-colors" href="#">
      <Circle aria-hidden={true} focusable="false" />
                          System
                      </a>
      </li>
      </ul>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:ml-64 relative min-h-screen">
      {/* TopAppBar (Mobile & Desktop Header) */}
      <header className="bg-surface border-b border-outline-variant docked full-width top-0 z-30 sticky flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop h-touch-target min-h-[64px]">
      <div className="flex items-center gap-4">
      <a className="md:hidden text-primary" href="#">
      <ArrowLeft aria-hidden={true} focusable="false" />
      </a>
      <h1 className="font-headline-md text-headline-md text-primary tracking-tighter">TETRIS_SUPERVISOR</h1>
      </div>
      <div className="flex items-center gap-2 text-primary">
      <button className="p-2 hover:bg-surface-variant transition-colors duration-150 active:scale-95 text-primary font-bold" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <button className="p-2 hover:bg-surface-variant transition-colors duration-150 active:scale-95 text-outline" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Pause aria-hidden={true} focusable="false" />
      </button>
      <button className="p-2 hover:bg-surface-variant transition-colors duration-150 active:scale-95 text-outline" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Page Content */}
      <main className="p-margin-mobile md:p-margin-desktop max-w-container-max mx-auto w-full pb-32 md:pb-8 flex-1">
      <div className="mb-8 border-b border-outline-variant pb-4">
      <h2 className="font-display-lg text-display-lg text-primary uppercase">System Configuration</h2>
      <p className="font-data-mono text-data-mono text-outline mt-2">// MODIFY OPERATIONAL PARAMETERS</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
      {/* Audio Controls */}
      <section className="bg-surface-container-low border border-outline-variant p-6 relative">
      <div className="absolute top-0 left-0 bg-outline-variant px-2 py-1 transform -translate-y-1/2 ml-4">
      <span className="font-label-caps text-label-caps text-surface">AUDIO_PROTOCOL</span>
      </div>
      <div className="space-y-8 mt-4">
      <div>
      <div className="flex justify-between mb-2">
      <label className="font-data-mono text-data-mono text-primary">MASTER_VOLUME</label>
      <span className="font-data-mono text-data-mono text-outline">80%</span>
      </div>
      <input className="w-full h-2 bg-surface-variant appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-primary accent-primary" max="100" min="0" type="range" value="80" />
      </div>
      <div>
      <div className="flex justify-between mb-2">
      <label className="font-data-mono text-data-mono text-primary">MUSIC_LEVEL</label>
      <span className="font-data-mono text-data-mono text-outline">65%</span>
      </div>
      <input className="w-full h-2 bg-surface-variant appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-primary accent-primary" max="100" min="0" type="range" value="65" />
      </div>
      </div>
      </section>
      {/* Gameplay Variables */}
      <section className="bg-surface-container-low border border-outline-variant p-6 relative">
      <div className="absolute top-0 left-0 bg-outline-variant px-2 py-1 transform -translate-y-1/2 ml-4">
      <span className="font-label-caps text-label-caps text-surface">GAMEPLAY_VARS</span>
      </div>
      <div className="mt-4 space-y-6">
      <div>
      <label className="font-data-mono text-data-mono text-primary block mb-3">DIFFICULTY_MATRIX</label>
      <div className="flex gap-2">
      <button className="flex-1 bg-surface border border-outline-variant text-outline py-2 font-label-caps text-label-caps hover:bg-surface-variant transition-colors" type="button" data-action-id="easy-4" onClick={actions?.["easy-4"]}>EASY</button>
      <button className="flex-1 bg-surface border border-primary text-primary py-2 font-label-caps text-label-caps shadow-[0_0_8px_#ffffff] transition-colors" type="button" data-action-id="normal-5" onClick={actions?.["normal-5"]}>NORMAL</button>
      <button className="flex-1 bg-surface border border-outline-variant text-outline py-2 font-label-caps text-label-caps hover:bg-surface-variant transition-colors" type="button" data-action-id="hard-6" onClick={actions?.["hard-6"]}>HARD</button>
      </div>
      </div>
      <div className="border-t border-outline-variant pt-4 flex items-center justify-between">
      <label className="font-data-mono text-data-mono text-primary flex items-center gap-2">
      <Circle className="text-outline" aria-hidden={true} focusable="false" />
                                      GHOST_PIECE_PROJECTION
                                  </label>
      <label className="relative inline-flex items-center cursor-pointer">
      <input checked={true} className="sr-only peer" type="checkbox" value="" />
      <div className="w-11 h-6 bg-surface-variant border border-outline-variant peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-primary peer-checked:bg-primary peer-checked:border-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface after:border-surface after:border after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
      </label>
      </div>
      <div className="border-t border-outline-variant pt-4 flex items-center justify-between">
      <label className="font-data-mono text-data-mono text-primary flex items-center gap-2">
      <Circle className="text-outline" aria-hidden={true} focusable="false" />
                                      MATRIX_GRID_LINES
                                  </label>
      <label className="relative inline-flex items-center cursor-pointer">
      <input checked={true} className="sr-only peer" type="checkbox" value="" />
      <div className="w-11 h-6 bg-surface-variant border border-outline-variant peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-primary peer-checked:bg-primary peer-checked:border-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface after:border-surface after:border after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
      </label>
      </div>
      </div>
      </section>
      {/* Data Management */}
      <section className="bg-surface-container-low border border-error-container p-6 relative lg:col-span-2 mt-4">
      <div className="absolute top-0 left-0 bg-error-container px-2 py-1 transform -translate-y-1/2 ml-4">
      <span className="font-label-caps text-label-caps text-on-error-container">DANGER_ZONE</span>
      </div>
      <div className="mt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div>
      <h3 className="font-data-mono text-data-mono text-error">PURGE_DATA_RECORDS</h3>
      <p className="font-body-md text-body-md text-outline mt-1">This action will permanently erase all local high score records. This cannot be undone.</p>
      </div>
      <button className="bg-surface border border-error text-error px-6 py-3 font-label-caps text-label-caps hover:bg-error-container hover:text-on-error-container transition-colors whitespace-nowrap" type="button" data-action-id="clear-high-scores-7" onClick={actions?.["clear-high-scores-7"]}>
                                  CLEAR HIGH SCORES
                              </button>
      </div>
      </section>
      </div>
      </main>
      </div>
      {/* BottomNavBar (Mobile Only) */}
      <nav className="fixed bottom-0 w-full z-50 flex justify-around items-center px-4 h-20 md:hidden bg-surface-container-lowest border-t border-outline-variant">
      <a className="flex flex-col items-center justify-center text-outline pt-2 hover:bg-surface-container-high active:bg-primary active:text-on-primary transition-colors flex-1 h-full" href="#">
      <Circle className="mb-1" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Navigate</span>
      </a>
      <a className="flex flex-col items-center justify-center text-outline pt-2 hover:bg-surface-container-high active:bg-primary active:text-on-primary transition-colors flex-1 h-full" href="#">
      <RotateCw className="mb-1" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Rotate</span>
      </a>
      <a className="flex flex-col items-center justify-center text-outline pt-2 hover:bg-surface-container-high active:bg-primary active:text-on-primary transition-colors flex-1 h-full" href="#">
      <Circle className="mb-1" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Drop</span>
      </a>
      <a className="flex flex-col items-center justify-center text-primary border-t-2 border-primary pt-2 hover:bg-surface-container-high active:bg-primary active:text-on-primary transition-colors flex-1 h-full" href="#">
      <Circle className="mb-1" aria-hidden={true} focusable="false" />
      <span className="font-label-caps text-label-caps">Hold</span>
      </a>
      </nav>
    </>
  );
}
