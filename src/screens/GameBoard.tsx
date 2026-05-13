// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Board
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Pause, RotateCw, Settings, User } from "lucide-react";


export type GameBoardActionId = "button-1-1" | "button-2-2" | "button-3-3" | "l-r-4" | "rot-5" | "drop-6" | "hold-7";

export interface GameBoardProps {
  actions?: Partial<Record<GameBoardActionId, () => void>>;
}

export function GameBoard({ actions }: GameBoardProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-surface dark:bg-surface text-primary dark:text-primary border-b border-outline-variant transition-colors duration-150 docked full-width top-0 z-50 flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop h-touch-target">
      <div className="flex items-center gap-4">
      <span className="font-headline-md text-headline-md text-primary tracking-tighter">TETRIS_SUPERVISOR</span>
      <div className="hidden md:flex items-center gap-2 border border-outline-variant px-2 py-1 bg-surface-container-low ml-4">
      <div className="w-2 h-2 bg-green-500"></div>
      <span className="font-label-caps text-label-caps text-on-surface">OPERATIONAL</span>
      </div>
      </div>
      <nav className="hidden md:flex items-center h-full gap-gutter">
      {/* Suppressed nav items as this is the main operational screen (Destination) but we want to show the header actions */}
      </nav>
      <div className="flex items-center gap-2">
      <button className="w-touch-target h-touch-target flex items-center justify-center text-outline hover:text-primary hover:bg-surface-variant transition-colors duration-150 active:scale-95 border border-transparent hover:border-outline-variant" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <button className="w-touch-target h-touch-target flex items-center justify-center text-outline hover:text-primary hover:bg-surface-variant transition-colors duration-150 active:scale-95 border border-transparent hover:border-outline-variant" type="button" data-action-id="button-2-2" onClick={actions?.["button-2-2"]}>
      <Pause aria-hidden={true} focusable="false" />
      </button>
      <button className="w-touch-target h-touch-target flex items-center justify-center text-outline hover:text-primary hover:bg-surface-variant transition-colors duration-150 active:scale-95 border border-transparent hover:border-outline-variant" type="button" data-action-id="button-3-3" onClick={actions?.["button-3-3"]}>
      <Circle aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* SideNavBar (Hidden on Mobile) */}
      <aside className="bg-surface-container-low dark:bg-surface-container-low text-primary dark:text-primary font-data-mono text-data-mono border-r border-outline-variant docked left-0 h-full w-64 hidden md:flex flex-col fixed top-0 pt-[calc(var(--spacing-touch-target)+var(--spacing-margin-desktop))] z-40">
      <div className="px-4 pb-6 mb-4 border-b border-outline-variant">
      <div className="w-12 h-12 bg-surface-variant border border-outline-variant mb-3 flex items-center justify-center overflow-hidden">
      <User className="text-primary" aria-hidden={true} focusable="false" />
      </div>
      <div className="font-headline-md text-headline-md text-primary mb-1">SUPERVISOR_01</div>
      <div className="font-label-caps text-label-caps text-on-surface flex items-center gap-2">
      <div className="w-2 h-2 bg-green-500"></div>
                      STATUS: OPERATIONAL
                  </div>
      </div>
      <nav className="flex-1 flex flex-col gap-1">
      <a className="bg-surface-container-highest text-primary border-l-4 border-primary px-4 py-3 flex items-center gap-3 transition-colors duration-200 ease-in-out" href="#">
      <Circle aria-hidden={true} focusable="false" />
      <span>Dashboard</span>
      </a>
      <a className="text-outline px-4 py-3 flex items-center gap-3 hover:bg-surface-container hover:text-primary transition-colors duration-200 ease-in-out" href="#">
      <Circle aria-hidden={true} focusable="false" />
      <span>Analytics</span>
      </a>
      <a className="text-outline px-4 py-3 flex items-center gap-3 hover:bg-surface-container hover:text-primary transition-colors duration-200 ease-in-out" href="#">
      <Circle aria-hidden={true} focusable="false" />
      <span>Controls</span>
      </a>
      <a className="text-outline px-4 py-3 flex items-center gap-3 hover:bg-surface-container hover:text-primary transition-colors duration-200 ease-in-out" href="#">
      <Circle aria-hidden={true} focusable="false" />
      <span>System</span>
      </a>
      </nav>
      </aside>
      {/* Main Content Area */}
      <main className="flex-1 relative md:ml-64 pt-touch-target flex flex-col md:flex-row items-center justify-center p-margin-mobile md:p-margin-desktop gap-gutter h-[calc(100vh-var(--spacing-touch-target))] md:h-[1024px]">
      {/* Background decorative elements for the "void" */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-surface-variant via-[#0F172A] to-[#0F172A]"></div>
      {/* Left Panel: Hold Box */}
      <div className="hidden md:flex flex-col w-32 shrink-0 z-10 gap-4 mt-12 self-start">
      <div className="bg-surface-container-low border border-outline-variant relative p-2">
      <div className="absolute -top-3 -left-[1px] bg-surface border border-outline-variant px-2 py-0.5 z-10 border-b-surface">
      <span className="font-label-caps text-label-caps text-outline">HOLD</span>
      </div>
      <div className="w-full aspect-square bg-surface flex items-center justify-center border border-outline-variant p-2 mt-2">
      {/* 'T' Tetromino in Hold */}
      <div className="grid grid-cols-3 grid-rows-2 gap-[1px] w-full h-auto p-2">
      <div className="col-start-2 bg-tetromino-t w-full aspect-square border border-surface"></div>
      <div className="row-start-2 col-span-3 grid grid-cols-3 gap-[1px]">
      <div className="bg-tetromino-t w-full aspect-square border border-surface"></div>
      <div className="bg-tetromino-t w-full aspect-square border border-surface"></div>
      <div className="bg-tetromino-t w-full aspect-square border border-surface"></div>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Center Playfield */}
      <div className="relative z-10 flex flex-col items-center">
      {/* Active Neon Border wrapping the game board */}
      <div className="p-[2px] bg-surface border border-tetromino-i shadow-tetromino-i relative">
      {/* 10x20 Grid */}
      <div className="w-[240px] h-[480px] bg-grid-pattern bg-[#0F172A] relative overflow-hidden border border-[#334155]">
      {/* Placed Blocks (Example scenario) */}
      {/* Bottom Row */}
      <div className="absolute bottom-0 left-0 w-[24px] h-[24px] bg-tetromino-j border border-surface"></div>
      <div className="absolute bottom-0 left-[24px] w-[24px] h-[24px] bg-tetromino-j border border-surface"></div>
      <div className="absolute bottom-[24px] left-[24px] w-[24px] h-[24px] bg-tetromino-j border border-surface"></div>
      <div className="absolute bottom-[48px] left-[24px] w-[24px] h-[24px] bg-tetromino-j border border-surface"></div>
      {/* Ghost Piece (I-Piece) */}
      <div className="absolute bottom-[24px] left-[72px] w-[96px] h-[24px] grid grid-cols-4 gap-0">
      <div className="ghost-piece w-[24px] h-[24px]"></div>
      <div className="ghost-piece w-[24px] h-[24px]"></div>
      <div className="ghost-piece w-[24px] h-[24px]"></div>
      <div className="ghost-piece w-[24px] h-[24px]"></div>
      </div>
      {/* Active Piece (I-Piece falling) */}
      <div className="absolute top-[96px] left-[72px] w-[96px] h-[24px] grid grid-cols-4 gap-0 shadow-tetromino-i z-20">
      <div className="bg-tetromino-i w-[24px] h-[24px] border border-surface"></div>
      <div className="bg-tetromino-i w-[24px] h-[24px] border border-surface"></div>
      <div className="bg-tetromino-i w-[24px] h-[24px] border border-surface"></div>
      <div className="bg-tetromino-i w-[24px] h-[24px] border border-surface"></div>
      </div>
      </div>
      </div>
      </div>
      {/* Right Panel: Queue & Stats */}
      <div className="hidden md:flex flex-col w-48 shrink-0 z-10 gap-6 mt-12 self-start">
      {/* NEXT Queue */}
      <div className="bg-surface-container-low border border-outline-variant relative p-2 pb-4">
      <div className="absolute -top-3 -left-[1px] bg-surface border border-outline-variant px-2 py-0.5 z-10 border-b-surface">
      <span className="font-label-caps text-label-caps text-outline">NEXT</span>
      </div>
      <div className="flex flex-col gap-2 mt-4">
      {/* Queue 1: O-Piece */}
      <div className="w-full h-16 bg-surface border border-outline-variant flex items-center justify-center">
      <div className="grid grid-cols-2 gap-[1px] w-10 h-10">
      <div className="bg-tetromino-o border border-surface"></div>
      <div className="bg-tetromino-o border border-surface"></div>
      <div className="bg-tetromino-o border border-surface"></div>
      <div className="bg-tetromino-o border border-surface"></div>
      </div>
      </div>
      {/* Queue 2: Z-Piece */}
      <div className="w-full h-16 bg-surface border border-outline-variant flex items-center justify-center opacity-70">
      <div className="grid grid-cols-3 grid-rows-2 gap-[1px] w-12 h-8">
      <div className="col-span-2 grid grid-cols-2 gap-[1px]"><div className="bg-tetromino-z border border-surface"></div><div className="bg-tetromino-z border border-surface"></div></div>
      <div className="col-start-2 col-span-2 grid grid-cols-2 gap-[1px] row-start-2"><div className="bg-tetromino-z border border-surface"></div><div className="bg-tetromino-z border border-surface"></div></div>
      </div>
      </div>
      {/* Queue 3: L-Piece */}
      <div className="w-full h-16 bg-surface border border-outline-variant flex items-center justify-center opacity-40">
      <div className="grid grid-cols-3 grid-rows-2 gap-[1px] w-12 h-8 p-1">
      <div className="col-start-3 bg-tetromino-l w-full aspect-square border border-surface"></div>
      <div className="row-start-2 col-span-3 grid grid-cols-3 gap-[1px]">
      <div className="bg-tetromino-l w-full aspect-square border border-surface"></div>
      <div className="bg-tetromino-l w-full aspect-square border border-surface"></div>
      <div className="bg-tetromino-l w-full aspect-square border border-surface"></div>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Stats Boxes */}
      <div className="flex flex-col gap-2">
      <div className="bg-surface-container-low border border-outline-variant relative p-3">
      <div className="font-label-caps text-label-caps text-outline mb-1">SCORE</div>
      <div className="font-data-mono text-headline-md text-primary tracking-widest text-right">014,520</div>
      </div>
      <div className="bg-surface-container-low border border-outline-variant relative p-3">
      <div className="font-label-caps text-label-caps text-outline mb-1">LEVEL</div>
      <div className="font-data-mono text-headline-md text-primary tracking-widest text-right">08</div>
      </div>
      <div className="bg-surface-container-low border border-outline-variant relative p-3">
      <div className="font-label-caps text-label-caps text-outline mb-1">LINES</div>
      <div className="font-data-mono text-headline-md text-primary tracking-widest text-right">084</div>
      </div>
      </div>
      </div>
      </main>
      {/* BottomNavBar (Mobile Controls) */}
      <nav className="bg-surface-container-lowest dark:bg-surface-container-lowest text-primary dark:text-primary font-label-caps text-label-caps border-t border-outline-variant fixed bottom-0 w-full z-50 flex justify-around items-center px-4 h-24 md:hidden">
      <button className="flex flex-col items-center justify-center text-outline pt-2 w-16 h-16 active:bg-primary active:text-on-primary transition-colors border border-outline-variant bg-surface" type="button" data-action-id="l-r-4" onClick={actions?.["l-r-4"]}>
      <Circle className="text-2xl mb-1" aria-hidden={true} focusable="false" />
      <span className="text-[10px]">L/R</span>
      </button>
      <button className="flex flex-col items-center justify-center text-outline pt-2 w-16 h-16 active:bg-primary active:text-on-primary transition-colors border border-outline-variant bg-surface shadow-tetromino-i border-tetromino-i" type="button" data-action-id="rot-5" onClick={actions?.["rot-5"]}>
      <RotateCw className="text-2xl mb-1" aria-hidden={true} focusable="false" />
      <span className="text-[10px]">ROT</span>
      </button>
      <button className="flex flex-col items-center justify-center text-outline pt-2 w-16 h-16 active:bg-primary active:text-on-primary transition-colors border border-outline-variant bg-surface" type="button" data-action-id="drop-6" onClick={actions?.["drop-6"]}>
      <Circle className="text-2xl mb-1" aria-hidden={true} focusable="false" />
      <span className="text-[10px]">DROP</span>
      </button>
      <button className="flex flex-col items-center justify-center text-outline pt-2 w-16 h-16 active:bg-primary active:text-on-primary transition-colors border border-outline-variant bg-surface" type="button" data-action-id="hold-7" onClick={actions?.["hold-7"]}>
      <Circle className="text-2xl mb-1" aria-hidden={true} focusable="false" />
      <span className="text-[10px]">HOLD</span>
      </button>
      </nav>
    </>
  );
}
