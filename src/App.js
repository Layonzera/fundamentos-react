import React from "react";

import { Post } from "./Post";
import { Header } from "./Header";


export function App() {
  return (
    <>
      <Header title="Adryann's Blog">
        <h2>Posts da semana</h2>
      </Header>

      <hr />

      <Post 
        post={{
          title: 'Titulo da noticia 01',
          subtitle: 'Subtitulo da noticia 01'
        }}
      />
    </>
  );
}