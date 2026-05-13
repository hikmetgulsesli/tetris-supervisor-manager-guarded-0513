// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Over
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Circle, Menu, TriangleAlert } from "lucide-react";


export type GameOverActionId = "main-menu-1" | "play-again-2";

export interface GameOverProps {
  actions?: Partial<Record<GameOverActionId, () => void>>;
}

export function GameOver({ actions }: GameOverProps) {
  return (
    <>
      {/* Background Grid Effect to simulate the void */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{backgroundImage: "linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)", backgroundSize: "40px 40px", opacity: "0.1"}}></div>
      {/* The TopAppBar Shell (Suppressed based on logic - this is a transactional/modal state, but we'll include a muted version for context if needed. Actually, per logic, a Game Over screen is a dead end/transactional overlay. We suppress standard nav.) */}
      {/* Main Game Over Canvas */}
      <main className="flex-grow flex items-center justify-center relative z-10 px-margin-mobile md:px-margin-desktop py-8">
      {/* The Game Over Overlay Container */}
      <div className="w-full max-w-2xl bg-surface-container border border-error relative overflow-hidden flex flex-col shadow-[0_0_32px_rgba(147,0,10,0.3)]">
      {/* Structural Chamfered Tab */}
      <div className="absolute top-0 left-0 bg-error px-4 py-1 rounded-br-DEFAULT z-20">
      <span className="font-label-caps text-label-caps text-on-error">SYSTEM_FAILURE</span>
      </div>
      {/* Header Section */}
      <div className="pt-16 pb-8 px-8 text-center border-b border-outline-variant bg-error-container/20">
      <div className="flex justify-center items-center mb-4">
      <TriangleAlert  style={{fontSize: "48px", fontVariationSettings: "'FILL' 1"}} className="text-error" aria-hidden={true} focusable="false" />
      </div>
      <h1 className="font-display-lg text-display-lg text-error tracking-tighter uppercase">Game Over</h1>
      <p className="font-data-mono text-data-mono text-on-surface-variant mt-2">STRUCTURAL INTEGRITY COMPROMISED. BLOCK OUT DETECTED.</p>
      </div>
      {/* Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-outline-variant p-[1px]">
      {/* Stat: Score */}
      <div className="bg-surface-container-high p-6 flex flex-col items-center justify-center group hover:bg-surface transition-colors">
      <div className="w-full text-center border-b border-outline-variant pb-2 mb-4 relative">
      <span className="font-label-caps text-label-caps text-outline absolute left-0 top-0 hidden md:block">01</span>
      <span className="font-label-caps text-label-caps text-on-surface-variant">FINAL SCORE</span>
      </div>
      <div className="font-headline-md text-headline-md text-primary">124,500</div>
      </div>
      {/* Stat: Lines */}
      <div className="bg-surface-container-high p-6 flex flex-col items-center justify-center group hover:bg-surface transition-colors">
      <div className="w-full text-center border-b border-outline-variant pb-2 mb-4 relative">
      <span className="font-label-caps text-label-caps text-outline absolute left-0 top-0 hidden md:block">02</span>
      <span className="font-label-caps text-label-caps text-on-surface-variant">LINES CLEARED</span>
      </div>
      <div className="font-headline-md text-headline-md text-primary">87</div>
      </div>
      {/* Stat: Level */}
      <div className="bg-surface-container-high p-6 flex flex-col items-center justify-center group hover:bg-surface transition-colors relative">
      {/* High Score Badge (Contextual) */}
      <div className="absolute top-2 right-2 text-error">
      <Circle  style={{fontSize: "20px", fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      </div>
      <div className="w-full text-center border-b border-outline-variant pb-2 mb-4 relative">
      <span className="font-label-caps text-label-caps text-outline absolute left-0 top-0 hidden md:block">03</span>
      <span className="font-label-caps text-label-caps text-on-surface-variant">LEVEL REACHED</span>
      </div>
      <div className="font-headline-md text-headline-md text-primary">09</div>
      </div>
      </div>
      {/* High Score Achievement Banner */}
      <div className="bg-surface px-8 py-4 border-b border-outline-variant flex items-center justify-between">
      <div className="flex items-center gap-3">
      <div className="w-2 h-2 bg-error"></div>
      <span className="font-data-mono text-data-mono text-on-surface">NEW PERSONAL BEST RECORDED</span>
      </div>
      <Circle className="text-outline" aria-hidden={true} focusable="false" />
      </div>
      {/* Action Buttons */}
      <div className="p-8 flex flex-col sm:flex-row gap-4 justify-end bg-surface-container-low">
      <button className="h-touch-target px-8 bg-transparent border border-outline-variant text-primary font-label-caps text-label-caps hover:bg-surface hover:text-primary transition-colors focus:outline-none focus:border-primary flex items-center justify-center gap-2" type="button" data-action-id="main-menu-1" onClick={actions?.["main-menu-1"]}>
      <Menu  style={{fontSize: "18px"}} aria-hidden={true} focusable="false" />
                          MAIN MENU
                      </button>
      <button className="h-touch-target px-8 bg-primary text-on-primary font-label-caps text-label-caps border border-primary hover:bg-tertiary-fixed-dim transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface flex items-center justify-center gap-2 shadow-[0_0_8px_rgba(255,255,255,0.5)]" type="button" data-action-id="play-again-2" onClick={actions?.["play-again-2"]}>
      <Circle  style={{fontSize: "18px", fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                          PLAY AGAIN
                      </button>
      </div>
      {/* Bottom decorative scanline */}
      <div className="h-1 w-full bg-error opacity-50"></div>
      </div>
      </main>
    </>
  );
}
