import { PokemonType, PokemonTypeDetail } from "models";
import { useEffect, useState } from "react";

const API_ENDPOINT = "https://pokeapi.co/api/v2/type/";
export const usePokemonTypes = (types: PokemonType[]) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonDetail, setPokemonDetail] = useState<PokemonTypeDetail[]>();

  useEffect(() => {
    const fetchPokemonList = async (input: PokemonType[]) => {
      try {
        const promises = input.map(async (type) => {
          const response = await fetch(`${API_ENDPOINT}${type.type.name}`);
          const data = await response.json();
          setPokemonDetail(prev => prev ? [...prev, data] : [data] );
        });
        await Promise.all(promises)
      } catch (error) {
        console.error("Error fetching Pokemon list:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPokemonList(types);
  }, []);

  return { pokemonDetail, isLoading };
};
