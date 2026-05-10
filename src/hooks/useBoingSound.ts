import { useEffect } from "react";

export const SOUND_PREFERENCE_KEY = "portfolio-sound-enabled";

type AudioWindow = Window & {
  webkitAudioContext?: typeof AudioContext;
};

export function isPortfolioSoundEnabled() {
  return window.localStorage.getItem(SOUND_PREFERENCE_KEY) !== "false";
}

async function playBoingSound() {
  if (!isPortfolioSoundEnabled()) return false;

  const AudioContextClass = window.AudioContext || (window as AudioWindow).webkitAudioContext;
  if (!AudioContextClass) return false;

  const audioContext = new AudioContextClass();
  if (audioContext.state === "suspended") {
    try {
      await audioContext.resume();
    } catch {
      await audioContext.close();
      return false;
    }
  }

  if (audioContext.state !== "running") {
    await audioContext.close();
    return false;
  }

  const now = audioContext.currentTime;
  const output = audioContext.createGain();
  const body = audioContext.createOscillator();
  const shimmer = audioContext.createOscillator();

  output.gain.setValueAtTime(0.0001, now);
  output.gain.exponentialRampToValueAtTime(0.16, now + 0.018);
  output.gain.exponentialRampToValueAtTime(0.0001, now + 0.58);
  output.connect(audioContext.destination);

  body.type = "sine";
  body.frequency.setValueAtTime(760, now);
  body.frequency.exponentialRampToValueAtTime(210, now + 0.18);
  body.frequency.exponentialRampToValueAtTime(430, now + 0.38);
  body.connect(output);

  shimmer.type = "triangle";
  shimmer.frequency.setValueAtTime(1120, now + 0.02);
  shimmer.frequency.exponentialRampToValueAtTime(460, now + 0.3);
  shimmer.connect(output);

  body.start(now);
  shimmer.start(now + 0.02);
  body.stop(now + 0.62);
  shimmer.stop(now + 0.42);

  window.setTimeout(() => {
    void audioContext.close();
  }, 700);

  return true;
}

export function useBoingSound() {
  useEffect(() => {
    let lastClickSoundAt = 0;

    const playOnLoad = () => {
      if (!isPortfolioSoundEnabled()) return;
      void playBoingSound();
    };

    const handleInteractiveClick = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const interactiveElement = target.closest("button, a, [role='button']");
      if (!interactiveElement) return;
      if (!isPortfolioSoundEnabled()) return;

      const now = Date.now();
      if (now - lastClickSoundAt < 160) return;
      lastClickSoundAt = now;
      void playBoingSound();
    };

    const pageLoadTimer = window.setTimeout(() => {
      playOnLoad();
    }, 120);

    window.addEventListener("pointerdown", handleInteractiveClick, { capture: true });

    return () => {
      window.clearTimeout(pageLoadTimer);
      window.removeEventListener("pointerdown", handleInteractiveClick, { capture: true });
    };
  }, []);
}
