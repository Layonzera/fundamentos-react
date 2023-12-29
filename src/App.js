import React from "react";

import { Post } from "./Post";
import { Header } from "./Header";


export function App() {
  return (
    <>
      <Header>
        <h2>Posts da semana</h2>
      </Header>

      <hr />

      <Post 
        likes={20}
        post={{
          title: 'Titulo da noticia 01',
          subtitle: 'Subtitulo da noticia 01'
        }}
      />

      <Post 
        likes={10}
        post={{
          title: 'Titulo da noticia 02',
          subtitle: 'Subtitulo da noticia 02'
        }}
      />

      <Post 
        likes={50}
        post={{
          title: 'Titulo da noticia 03',
          subtitle: 'Subtitulo da noticia 03'
        }}
      />
    </>
  );
}