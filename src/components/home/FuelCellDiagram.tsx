import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { Droplets, Flame, Zap } from "lucide-react";

export type FuelCellDiagramProps = {
  diagramTitle?: string;
  diagramLabels: readonly string[];
  diagramImageSrc?: string;
};

const sage = "#6e7f42";
const amber = "#c9a227";
const water = "#5b9fd4";
const heat = "#e07a5f";

const legendColors: Record<string, string> = {
  "HYDROGEN IN": sage,
  "OXYGEN IN": "#4a90c8",
  "ELECTRICITY OUT": amber,
  "WATER OUT": water,
  HEAT: heat,
};

const outputs: readonly {
  label: string;
  sublabel?: string;
  color: string;
  icon: LucideIcon;
}[] = [
  { label: "ELECTRICITY", color: amber, icon: Zap },
  { label: "WATER", sublabel: "H2O", color: water, icon: Droplets },
  { label: "HEAT", color: heat, icon: Flame },
];

function StackPlaceholder({ title }: { title: string }) {
  return (
    <div className="relative flex h-full min-h-[9rem] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-linear-to-b from-[#c8cdd4] via-[#9aa3ae] to-[#6d7682] px-4 py-5 shadow-inner">
      <div className="absolute inset-x-3 top-3 bottom-3 flex gap-1.5 opacity-70" aria-hidden>
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="h-full flex-1 rounded-[2px] bg-linear-to-b from-[#e8ebef] via-[#aeb6c0] to-[#7a8490] shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]"
          />
        ))}
      </div>
      <span className="relative z-10 rounded bg-[#0b0e0c]/70 px-3 py-1.5 text-center text-[10px] font-semibold tracking-[0.16em] text-[#f3efe4] uppercase">
        {title}
      </span>
    </div>
  );
}

export function FuelCellDiagram({
  diagramTitle = "FUEL CELL STACK",
  diagramLabels,
  diagramImageSrc,
}: FuelCellDiagramProps) {
  return (
    <div
      className="flex h-full flex-col rounded-lg border bg-white/70 p-5 sm:p-6"
      style={{ borderColor: "#ddd8cc" }}
    >
      <div className="flex justify-center">
        <div
          className="relative grid size-[5.5rem] place-items-center rounded-full bg-white sm:size-24"
          style={{
            border: `2px solid ${sage}`,
            boxShadow: `0 0 0 6px ${sage}18`,
          }}
        >
          <div className="text-center">
            <p
              className="text-[9px] font-semibold tracking-[0.16em] uppercase"
              style={{ color: sage }}
            >
              Hydrogen
            </p>
            <p
              className="font-display text-2xl font-bold leading-none tracking-tight sm:text-3xl"
              style={{ color: sage }}
            >
              H2
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto my-3 h-6 w-px" style={{ background: sage }} aria-hidden />

      <div className="relative mx-auto aspect-[5/4] w-full max-w-[16rem]">
        {diagramImageSrc ? (
          <div className="relative h-full w-full overflow-hidden rounded-md">
            <Image
              src={diagramImageSrc}
              alt={diagramTitle}
              fill
              quality={75}
              className="object-cover"
              sizes="(max-width: 768px) 80vw, 256px"
            />
            <span className="absolute inset-x-0 bottom-0 bg-[#0b0e0c]/70 px-2 py-1.5 text-center text-[10px] font-semibold tracking-[0.14em] text-[#f3efe4] uppercase">
              {diagramTitle}
            </span>
          </div>
        ) : (
          <StackPlaceholder title={diagramTitle} />
        )}
      </div>

      <div
        className="mx-auto my-3 flex h-5 w-full max-w-xs items-end justify-center gap-8"
        aria-hidden
      >
        <div className="h-full w-px bg-[#c9a227]/70" />
        <div className="h-full w-px bg-[#5b9fd4]/70" />
        <div className="h-full w-px bg-[#e07a5f]/70" />
      </div>

      <div className="flex flex-wrap items-start justify-center gap-4 sm:gap-5">
        {outputs.map(({ label, sublabel, color, icon: Icon }) => (
          <div key={label} className="flex w-[5.25rem] flex-col items-center gap-2 sm:w-24">
            <div
              className="grid size-14 place-items-center rounded-full bg-white sm:size-16"
              style={{ border: `2px solid ${color}` }}
            >
              <Icon className="size-5 sm:size-6" strokeWidth={1.6} style={{ color }} />
            </div>
            <p className="text-center text-[9px] font-semibold tracking-[0.12em] text-[#5c584e] uppercase sm:text-[10px]">
              {label}
              {sublabel ? (
                <>
                  <br />
                  {sublabel}
                </>
              ) : null}
            </p>
          </div>
        ))}
      </div>

      <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 border-t border-[#ddd8cc] pt-4">
        {diagramLabels.map((label) => (
          <li
            key={label}
            className="flex items-center gap-1.5 text-[9px] font-semibold tracking-[0.12em] text-[#5c584e] uppercase sm:text-[10px]"
          >
            <span
              className="size-2 shrink-0 rounded-full"
              style={{ background: legendColors[label] ?? sage }}
              aria-hidden
            />
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}
