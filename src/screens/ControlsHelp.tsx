// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Controls Help
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Circle, MousePointerClick, X } from "lucide-react";


export type ControlsHelpActionId = "button-1-1" | "acknowledge-2";

export interface ControlsHelpProps {
  actions?: Partial<Record<ControlsHelpActionId, () => void>>;
}

export function ControlsHelp({ actions }: ControlsHelpProps) {
  return (
    <>
      {/* Modal Overlay Container */}
      <div className="fixed inset-0 bg-surface-container-lowest/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      {/* Modal Content */}
      <main className="bg-surface border border-outline-variant w-full max-w-4xl max-h-[921px] overflow-y-auto flex flex-col relative">
      {/* Modal Header */}
      <header className="flex justify-between items-center p-6 border-b border-outline-variant sticky top-0 bg-surface z-10">
      <div className="flex items-center gap-4">
      <Circle  style={{fontVariationSettings: "'FILL' 1"}} className="text-primary text-3xl" aria-hidden={true} focusable="false" />
      <h1 className="font-headline-md text-headline-md text-primary tracking-tighter uppercase">Controls Database</h1>
      </div>
      <button aria-label="Close" className="w-touch-target h-touch-target flex items-center justify-center text-outline hover:text-primary transition-colors border border-transparent hover:border-outline-variant bg-surface-container hover:bg-surface-variant" type="button" data-action-id="button-1-1" onClick={actions?.["button-1-1"]}>
      <X aria-hidden={true} focusable="false" />
      </button>
      </header>
      {/* Main Content Grid */}
      <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Keyboard Controls Section */}
      <section className="flex flex-col gap-6">
      <div className="flex items-center gap-3 mb-2">
      <div className="w-2 h-2 bg-secondary rounded-sm"></div>
      <h2 className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">Hardware Interface (Keyboard)</h2>
      </div>
      {/* Keyboard Layout Representation */}
      <div className="bg-surface-container-low border border-outline-variant p-6 flex flex-col gap-8 relative overflow-hidden">
      {/* Subtle grid background effect */}
      <div className="absolute inset-0 opacity-10" style={{backgroundImage: "linear-gradient(to right, #444749 1px, transparent 1px), linear-gradient(to bottom, #444749 1px, transparent 1px)", backgroundSize: "24px 24px"}}></div>
      {/* Action Keys */}
      <div className="grid grid-cols-2 gap-4 relative z-10">
      {/* Hold */}
      <div className="flex items-center gap-4 group">
      <div className="w-12 h-12 border border-outline-variant bg-surface-container flex items-center justify-center font-data-mono text-data-mono text-primary group-hover:border-primary group-hover:bg-surface-variant transition-colors shadow-[0_0_0_rgba(255,255,255,0)] group-hover:shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                                          C
                                      </div>
      <div className="flex flex-col">
      <span className="font-data-mono text-data-mono text-primary">HOLD PIECE</span>
      <span className="font-body-md text-sm text-outline">Swap active/reserve</span>
      </div>
      </div>
      {/* Pause */}
      <div className="flex items-center gap-4 group">
      <div className="w-12 h-12 border border-outline-variant bg-surface-container flex items-center justify-center font-data-mono text-data-mono text-primary group-hover:border-primary group-hover:bg-surface-variant transition-colors shadow-[0_0_0_rgba(255,255,255,0)] group-hover:shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                                          P
                                      </div>
      <div className="flex flex-col">
      <span className="font-data-mono text-data-mono text-primary">PAUSE SYSTEM</span>
      <span className="font-body-md text-sm text-outline">Halt execution</span>
      </div>
      </div>
      </div>
      {/* Movement Keys */}
      <div className="flex flex-col items-center gap-4 relative z-10 mt-4">
      {/* Up Arrow */}
      <div className="flex items-center gap-4 group w-full justify-center">
      <div className="flex flex-col items-end text-right mr-4 w-32 hidden md:flex">
      <span className="font-data-mono text-data-mono text-primary">ROTATE RIGHT</span>
      <span className="font-body-md text-sm text-outline">90° clockwise</span>
      </div>
      <div className="w-12 h-12 border border-outline-variant bg-surface-container flex items-center justify-center text-primary group-hover:border-primary group-hover:bg-surface-variant transition-colors shadow-[0_0_0_rgba(255,255,255,0)] group-hover:shadow-[0_0_8px_rgba(255,255,255,0.3)]">
      <ArrowUp aria-hidden={true} focusable="false" />
      </div>
      <div className="flex flex-col text-left ml-4 w-32 md:hidden">
      <span className="font-data-mono text-data-mono text-primary">ROTATE RIGHT</span>
      </div>
      </div>
      {/* Middle Row Arrows */}
      <div className="flex gap-4 items-center justify-center w-full">
      {/* Left Arrow */}
      <div className="flex flex-col items-center group">
      <div className="w-12 h-12 border border-outline-variant bg-surface-container flex items-center justify-center text-primary group-hover:border-primary group-hover:bg-surface-variant transition-colors mb-2 shadow-[0_0_0_rgba(255,255,255,0)] group-hover:shadow-[0_0_8px_rgba(255,255,255,0.3)]">
      <ArrowLeft aria-hidden={true} focusable="false" />
      </div>
      <span className="font-data-mono text-[10px] text-primary">MOVE LEFT</span>
      </div>
      {/* Down Arrow */}
      <div className="flex flex-col items-center group">
      <div className="w-12 h-12 border border-outline-variant bg-surface-container flex items-center justify-center text-primary group-hover:border-primary group-hover:bg-surface-variant transition-colors mb-2 shadow-[0_0_0_rgba(255,255,255,0)] group-hover:shadow-[0_0_8px_rgba(255,255,255,0.3)]">
      <ArrowDown aria-hidden={true} focusable="false" />
      </div>
      <span className="font-data-mono text-[10px] text-primary">SOFT DROP</span>
      </div>
      {/* Right Arrow */}
      <div className="flex flex-col items-center group">
      <div className="w-12 h-12 border border-outline-variant bg-surface-container flex items-center justify-center text-primary group-hover:border-primary group-hover:bg-surface-variant transition-colors mb-2 shadow-[0_0_0_rgba(255,255,255,0)] group-hover:shadow-[0_0_8px_rgba(255,255,255,0.3)]">
      <ArrowRight aria-hidden={true} focusable="false" />
      </div>
      <span className="font-data-mono text-[10px] text-primary">MOVE RIGHT</span>
      </div>
      </div>
      </div>
      {/* Spacebar */}
      <div className="flex flex-col items-center gap-2 relative z-10 w-full mt-4 group">
      <div className="w-full max-w-[240px] h-12 border border-outline-variant bg-surface-container flex items-center justify-center font-data-mono text-data-mono text-primary group-hover:border-primary group-hover:bg-surface-variant transition-colors shadow-[0_0_0_rgba(255,255,255,0)] group-hover:shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                                      SPACE
                                  </div>
      <span className="font-data-mono text-data-mono text-error uppercase mt-2">Hard Drop</span>
      <span className="font-body-md text-sm text-outline text-center">Instant placement &amp; lock</span>
      </div>
      </div>
      </section>
      {/* Touch Controls Section */}
      <section className="flex flex-col gap-6">
      <div className="flex items-center gap-3 mb-2">
      <div className="w-2 h-2 bg-secondary rounded-sm"></div>
      <h2 className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">Tactile Interface (Touch)</h2>
      </div>
      <div className="flex flex-col gap-4">
      {/* Swipe Horizontal */}
      <div className="group border border-outline-variant bg-surface-container-low p-4 flex items-center gap-6 hover:bg-surface-container-high hover:border-primary transition-colors">
      <div className="w-16 h-16 flex items-center justify-center border border-outline border-dashed text-primary bg-surface group-hover:shadow-[0_0_8px_rgba(255,255,255,0.2)]">
      <Circle className="text-3xl" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex flex-col flex-grow">
      <span className="font-data-mono text-data-mono text-primary mb-1">SWIPE LEFT/RIGHT</span>
      <span className="font-body-md text-sm text-outline">Translates piece horizontally across the grid.</span>
      </div>
      </div>
      {/* Tap */}
      <div className="group border border-outline-variant bg-surface-container-low p-4 flex items-center gap-6 hover:bg-surface-container-high hover:border-primary transition-colors">
      <div className="w-16 h-16 flex items-center justify-center border border-outline border-dashed text-primary bg-surface group-hover:shadow-[0_0_8px_rgba(255,255,255,0.2)]">
      <MousePointerClick className="text-3xl" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex flex-col flex-grow">
      <span className="font-data-mono text-data-mono text-primary mb-1">SINGLE TAP</span>
      <span className="font-body-md text-sm text-outline">Rotates the current piece 90° clockwise.</span>
      </div>
      </div>
      {/* Swipe Down */}
      <div className="group border border-outline-variant bg-surface-container-low p-4 flex items-center gap-6 hover:bg-surface-container-high hover:border-primary transition-colors">
      <div className="w-16 h-16 flex items-center justify-center border border-outline border-dashed text-primary bg-surface group-hover:shadow-[0_0_8px_rgba(255,255,255,0.2)]">
      <Circle className="text-3xl" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex flex-col flex-grow">
      <span className="font-data-mono text-data-mono text-primary mb-1">SWIPE DOWN</span>
      <span className="font-body-md text-sm text-outline">Accelerates downward descent (Soft Drop).</span>
      </div>
      </div>
      {/* Swipe Up */}
      <div className="group border border-outline-variant bg-surface-container-low p-4 flex items-center gap-6 hover:bg-surface-container-high hover:border-error transition-colors relative overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-1 bg-error"></div>
      <div className="w-16 h-16 flex items-center justify-center border border-outline border-dashed text-error bg-surface group-hover:shadow-[0_0_8px_rgba(255,180,171,0.2)]">
      <Circle className="text-3xl" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex flex-col flex-grow">
      <span className="font-data-mono text-data-mono text-error mb-1">SWIPE UP</span>
      <span className="font-body-md text-sm text-outline">Instantly locks piece at lowest available position (Hard Drop).</span>
      </div>
      </div>
      {/* Long Press */}
      <div className="group border border-outline-variant bg-surface-container-low p-4 flex items-center gap-6 hover:bg-surface-container-high hover:border-primary transition-colors">
      <div className="w-16 h-16 flex items-center justify-center border border-outline border-dashed text-primary bg-surface group-hover:shadow-[0_0_8px_rgba(255,255,255,0.2)]">
      <Circle className="text-3xl" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex flex-col flex-grow">
      <span className="font-data-mono text-data-mono text-primary mb-1">LONG PRESS</span>
      <span className="font-body-md text-sm text-outline">Swaps active piece with hold reserve.</span>
      </div>
      </div>
      </div>
      </section>
      </div>
      {/* Footer Action */}
      <footer className="p-6 border-t border-outline-variant bg-surface flex justify-end">
      <button className="bg-primary text-on-primary font-data-mono text-data-mono px-8 py-3 border border-transparent hover:bg-surface hover:text-primary hover:border-primary transition-colors uppercase tracking-widest" type="button" data-action-id="acknowledge-2" onClick={actions?.["acknowledge-2"]}>
                          Acknowledge
                      </button>
      </footer>
      </main>
      </div>
    </>
  );
}
