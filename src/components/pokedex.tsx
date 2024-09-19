import c from "classnames";
import { useTheme } from "contexts/use-theme";
import { usePokemonTeam } from "contexts/use-pokemon-team";
import { usePokemon, usePokemonList, useTextTransition } from "hooks";
import { useState } from "react";

import "./pokedex.css";
import LeftPanel from "./LeftPanel/LeftPanel";
import RightPanel from "./RightPanel/RightPanel";
import { Pokemon } from "models";

export function Pokedex() {
  const { pokemonTeam, setPokemonTeam } = usePokemonTeam();
  const { theme } = useTheme();
  const { ready, resetTransition } = useTextTransition();
  const { pokemonList } = usePokemonList();
  const [i, setI] = useState(0);
  const { pokemon: selectedPokemon } = usePokemon(pokemonList[i]);
  const { pokemon: nextPokemon } = usePokemon(pokemonList[i + 1]);

  const prev = () => {
    resetTransition();
    if (i === 0) {
      setI(pokemonList.length - 1);
    }
    setI((i) => i - 1);
  };

  const next = () => {
    resetTransition();
    if (i === pokemonList.length - 1) {
      setI(0);
    }
    setI((i) => i + 1);
  };

  const handleSelectPokemon = (pokemon: Pokemon | undefined) => {
    if (!pokemon) return;
    if (pokemonTeam.length >= 6) return;
    const pokemonExists = pokemonTeam.find((x) => x.id === pokemon.id);
    if (pokemonExists) return;
    setPokemonTeam((prev) => [...prev, pokemon]);
  };
  return (
    <div className={c("pokedex", `pokedex-${theme}`)}>
      <LeftPanel
        pokemon={selectedPokemon}
        ready={ready}
        onSelect={handleSelectPokemon}
      />
      <RightPanel
        onNext={next}
        onPrev={prev}
        pokemon={nextPokemon}
        ready={ready}
      />
    </div>
  );
}
