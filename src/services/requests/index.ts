import { useCallback, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { client } from "../client";
import { Pokemon, PokemonList, PokemonRef } from "../models/pokemon";

export const usePokemons = () => {
  const [page, setPage] = useState(0);
  const [loadMore, setLoadMore] = useState(false);
  const [results, setResults] = useState<PokemonRef[]>([]);
  const limit = 25;

  const { data, ...rest } = useQuery(["pokemons", page], () =>
    client
      .get<PokemonList>("pokemon", {
        params: {
          offset: limit * page,
          limit,
        },
      })
      .then((response) => {
        return response.data;
      })
  );

  useEffect(() => {
    if (data) {
      setResults((old) => [...old, ...data.results]);
    }
  }, [data]);

  useEffect(() => {
    if (loadMore) setPage((old) => old + 1);
  }, [loadMore]);

  const calculate = useCallback(() => {
    const scrollPoint =
      Number(document.scrollingElement?.scrollHeight) -
      Number(document.scrollingElement?.scrollTop);

    const loadPoint = Number(document.scrollingElement?.clientHeight) * 1.2;

    const loadMore = scrollPoint < loadPoint;

    setLoadMore(loadMore);
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", calculate);

    return () => document.removeEventListener("scroll", calculate);
  }, [calculate]);

  return {
    pokemonList: {
      ...data,
      results: results,
    },
    ...rest,
  };
};

export const usePokemonById = (name: string) => {
  const { data: pokemon, ...rest } = useQuery(["pokemon", name], () =>
    client.get<Pokemon>(`pokemon/${name}`).then((res) => res.data)
  );

  return { pokemon, ...rest };
};
