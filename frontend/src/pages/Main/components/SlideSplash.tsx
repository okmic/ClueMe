import { ClueMeLogo } from "../../../components/Logo/Logo";
import { ScrollHint } from "./Source";

export const SlideSplash: React.FC = () => (
  <section className="min-h-screen flex flex-col items-center justify-center px-6">
    <div className="flex-1 flex flex-col items-center justify-center gap-8" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
      <div className="flex flex-col items-center gap-6">
        <div className="transform scale-125 sm:scale-150">
          <ClueMeLogo size={72} showText={false} />
        </div>
        <div className="text-center">
          <h1
            className="font-accent font-bold text-[#F0F0FF] leading-none"
            style={{ fontSize: 'clamp(36px, 9vw, 72px)', letterSpacing: '-0.03em' }}
          >
            ClueMe
          </h1>
          <p
            className="font-mono text-[#8A8AA0] tracking-widest uppercase mt-3"
            style={{ fontSize: 'clamp(11px, 1.8vw, 15px)', letterSpacing: '+0.2em' }}
          >
            MVP - AI справочник
          </p>
        </div>
      </div>
      <ScrollHint text="О проекте" />
    </div>
  </section>
)