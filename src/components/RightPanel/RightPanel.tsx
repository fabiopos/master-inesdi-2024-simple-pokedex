import { Button } from "components/button";
import { LedDisplay } from "components/led-display";
import { Pokemon } from "models";
import { randomMode } from "utils/random";
import c from "classnames";

interface RightPanelProps {
  pokemon: Pokemon | undefined;
  ready: boolean;
  onNext: () => void;
  onPrev: () => void;
}

export default function RightPanel({
  onNext,
  onPrev,
  pokemon: nextPokemon,
  ready,
}: RightPanelProps) {
  return (
    <div className="panel right-panel">
      <div className="controls leds">
        <LedDisplay color="blue" />
        <LedDisplay color="red" />
        <LedDisplay color="yellow" />
      </div>
      <div className="screen second-screen">
        {nextPokemon && (
          <img
            className={c(
              "sprite",
              "obfuscated",
              ready && "ready",
              ready && `ready--${randomMode()}`
            )}
            src={nextPokemon.sprites.front_default}
            alt={nextPokemon.name}
          />
        )}
      </div>
      <div className="controls">
        <Button label="prev" onClick={onPrev} />
        <Button label="next" onClick={onNext} />
      </div>
    </div>
  );
}
