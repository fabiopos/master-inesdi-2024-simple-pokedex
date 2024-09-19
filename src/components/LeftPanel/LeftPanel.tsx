import { Pokemon } from "models";
import c from "classnames";
import { randomMode } from "utils/random";
import PokemonTypes from "./PokemonTypes";
import PokemonWeakness from "./PokemonWeakness";

interface PanelLeftProps {
  pokemon: Pokemon | undefined;
  ready: boolean;
  onSelect: (pokemon: Pokemon | undefined) => void;
}
export default function LeftPanel({
  pokemon: selectedPokemon,
  ready,
  onSelect,
}: PanelLeftProps) {
  return (
    <div className="panel left-panel">
      <div className="screen main-screen">
        {selectedPokemon && (
          <img
            className={c(
              "sprite",
              "obfuscated",
              ready && "ready",
              ready && `ready--${randomMode()}`
            )}
            src={selectedPokemon.sprites.front_default}
            alt={selectedPokemon.name}
          />
        )}
      </div>
      <div className="screen name-display">
        <div
          className={c(
            "name",
            "obfuscated",
            ready && "ready",
            ready && `ready--${randomMode()}`
          )}
        >
          {selectedPokemon?.name}
        </div>
      </div>

      <PokemonTypes types={selectedPokemon?.types ?? []} />
      {selectedPokemon?.types && (
        <PokemonWeakness types={selectedPokemon?.types ?? []} />
      )}
      <button
        className="select-pokemon-btn"
        onClick={() => onSelect(selectedPokemon)}
      >
        select pokemon
      </button>
    </div>
  );
}
