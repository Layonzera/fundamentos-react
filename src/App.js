import React from "react";

import { Post } from "./Post";

export function App() {
  return (
    <>
      <h1>Adryann's Blog</h1>
      <h2>Posts da semana</h2>

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