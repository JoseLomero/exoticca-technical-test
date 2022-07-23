import * as React from "react";
import styled from "styled-components";
import { Sections } from "./components/sections"
import { MarketSelector } from "./components/marketSelector"
import { Slide } from "./entities/slide.interfaces"
import { QueryClient, QueryClientProvider, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useState } from "react";

const Home = styled.div``;

const Title = styled.h1`
  font-family: "Playfair Display", serif !important;
  font-size: 2.875rem;
  color: rgb(0, 0, 0);
  font-weight: 400;
  font-style: italic;
  line-height: 1;
  margin-top: 0px;
  margin-bottom: 8px;
  text-align: left;
`;

const Text = styled.div`
  font-size: 1rem;
  color: rgb(0, 0, 0);
  font-size: 1rem;
  margin-bottom: 32px;
`;

const Link = styled.a`
  font-weight: 600;
  color: #2a2a2a;
`;

const endpoints = [
  'https://api-es.exoticca.com/api/home',
  'https://api-uk.exoticca.com/api/home',
]

const queryClient = new QueryClient();
const selectedEndpoint = ''

async function loadExoticcaData() {
  const res = await fetch('https://api-es.exoticca.com/api/home');
  return res.json();
}

function Slides() {
  const { data, status, isFetching } = useQuery(['slides'], loadExoticcaData)
  // const mutation = useMutation(loadExoticcaData, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(['slides'])
  //   },
  // })

  if (status === 'loading') {
    return <p>
      Loading...
    </p>
  }

  if (status === 'error') {
    return <p>
      Error
    </p>
  }

  return data.slides.map((slide: Slide, index: number) => {
    return <Sections key={"slide-" + index} slide={slide} />
  })
}

export default function App() {

  return (
    <QueryClientProvider client={queryClient} >
      <MarketSelector
        endpoints={endpoints}
      />
      <Slides />
    </QueryClientProvider>
  );
}
