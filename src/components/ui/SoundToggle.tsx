import { useEffect, useState } from "react";
import { FiVolume2, FiVolumeX } from "react-icons/fi";
import { SOUND_PREFERENCE_KEY, isPortfolioSoundEnabled } from "../../hooks/useBoingSound";

export function SoundToggle() {
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);

  useEffect(() => {
    setIsSoundEnabled(isPortfolioSoundEnabled());
  }, []);

  const handleToggleSound = () => {
    setIsSoundEnabled((currentValue) => {
      const nextValue = !currentValue;
      window.localStorage.setItem(SOUND_PREFERENCE_KEY, String(nextValue));
      return nextValue;
    });
  };

  return (
    <button
      aria-pressed={isSoundEnabled}
      aria-label={isSoundEnabled ? "Turn sound off" : "Turn sound on"}
      className={`sound-toggle ${isSoundEnabled ? "is-on" : "is-off"}`}
      onClick={handleToggleSound}
      type="button"
    >
      {isSoundEnabled ? <FiVolume2 aria-hidden /> : <FiVolumeX aria-hidden />}
    </button>
  );
}
