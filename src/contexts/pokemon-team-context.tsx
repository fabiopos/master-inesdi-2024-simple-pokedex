import { Pokemon } from "models";
import { createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export const PokemonTeamContext = createContext<{
  pokemonTeam: Pokemon[];
  setPokemonTeam: React.Dispatch<React.SetStateAction<Pokemon[]>>;
}>({
  pokemonTeam: [],
  setPokemonTeam: () => {},
});

export function PokemonTeamProvider({ children }: Props) {
  const [pokemonTeam, setPokemonTeam] = useState<Pokemon[]>([]);

  return (
    <PokemonTeamContext.Provider value={{ pokemonTeam, setPokemonTeam }}>
      {children}
    </PokemonTeamContext.Provider>
  );
}
