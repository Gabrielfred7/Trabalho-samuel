import { View } from "react-native";
import { useState } from "react";
import Btns from "./src/components/Btns";
import Linhas from "./src/components/Linhas";
import Resultado from "./src/components/Resultado";

export default function App() {
  const [resultado, setResultado] = useState("0");

  const btn = (btnClicado) => {
    let novoResultado = resultado;

    if (btnClicado === "C") {
      novoResultado = "0";
    } else if (btnClicado === "=") {
      novoResultado = eval(resultado);
    } else if (btnClicado === "←") {
      novoResultado = novoResultado.slice(0, -1);
    } else {
      if (novoResultado === "0" && btnClicado !== ".") {
        novoResultado = btnClicado;
      } else {
        novoResultado += btnClicado;
      }
    }

    setResultado(novoResultado);
  };

  return (
    <View className="w-full h-full pt-10 bg-zinc-800 justify-end">
      <Resultado resultado={resultado} />
      <Linhas>
        <Btns
          char="("
          onPress={() => {
            btn("(");
          }}
        />
        <Btns
          char=")"
          onPress={() => {
            btn(")");
          }}
        />
        <Btns
          char="←"
          onPress={() => {
            btn("←");
          }}
        />
        <Btns
          char="C"
          onPress={() => {
            btn("C");
          }}
        />
      </Linhas>
      <Linhas>
        <Btns
          char="7"
          onPress={() => {
            btn("7");
          }}
        />
        <Btns
          char="8"
          onPress={() => {
            btn("8");
          }}
        />
        <Btns
          char="9"
          onPress={() => {
            btn("9");
          }}
        />
        <Btns
          char="/"
          onPress={() => {
            btn("/");
          }}
        />
      </Linhas>
      <Linhas>
        <Btns
          char="4"
          onPress={() => {
            btn("4");
          }}
        />
        <Btns
          char="5"
          onPress={() => {
            btn("5");
          }}
        />
        <Btns
          char="6"
          onPress={() => {
            btn("6");
          }}
        />
        <Btns
          char="*"
          onPress={() => {
            btn("*");
          }}
        />
      </Linhas>
      <Linhas>
        <Btns
          char="1"
          onPress={() => {
            btn("1");
          }}
        />
        <Btns
          char="2"
          onPress={() => {
            btn("2");
          }}
        />
        <Btns
          char="3"
          onPress={() => {
            btn("3");
          }}
        />
        <Btns
          char="-"
          onPress={() => {
            btn("-");
          }}
        />
      </Linhas>
      <Linhas>
        <Btns
          char="0"
          onPress={() => {
            btn("0");
          }}
        />
        <Btns
          char="."
          onPress={() => {
            btn(".");
          }}
        />
        <Btns
          char="="
          onPress={() => {
            btn("=");
          }}
        />
        <Btns
          char="+"
          onPress={() => {
            btn("+");
          }}
        />
      </Linhas>
    </View>
  );
}
