import React from "react";
import * as S from "./styles";

export default function App() {
  return (
    <S.Nav>
      <S.Logo> MauR </S.Logo>
      <S.LinkList>
        <S.Link> Autor </S.Link>
        <S.Link> Librerias </S.Link>
      </S.LinkList>
    </S.Nav>
  );
}
