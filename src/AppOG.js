import React from 'react';
import './App.css';
import CodeBlock from "./components/CodeBlock"

function App() {

    function Block(letter, color1, color2 )  {
      this.letter = letter;
      this.color1 = color1;
      this.color2 = color2;
      this.clickedOn = function(e) {
        console.log(`You clicked on ${this.letter}`)
      }
    }

    const block_a = new Block("a","#33BCAD", "#33BCAD");
    const block_b = new Block("b","#FEFF00", "#FEFF00");
    const block_c = new Block("c","#8781BD", "#8781BD");
    const block_d = new Block("d","#F58221", "#F58221");
    const block_e = new Block("e","#8ED8F7", "#8ED8F7");
    const block_f = new Block("f","#F6ADCD", "#F6ADCD");
    const block_g = new Block("h","#583F99", "#583F99");
    const block_h = new Block("g","#EB008C", "#EB008C");
    const block_i = new Block("i","#03AEEF", "#03AEEF");
    const block_j = new Block("j","#eeeeee", "#33BCAD");
    const block_k = new Block("k","#33BCAD", "#33BCAD");
    const block_l = new Block("l","#FEFF00", "#33BCAD");
    const block_m = new Block("m","#8781BD", "#33BCAD");
    const block_n = new Block("n","#F58221", "#33BCAD");
    const block_o = new Block("o","#8ED8F7", "#33BCAD");
    const block_p = new Block("p","#F6ADCD", "#33BCAD");
    const block_q = new Block("q","#583F99", "#33BCAD");
    const block_r = new Block("r","#EB008C", "#33BCAD");
    const block_s = new Block("s","#03AEEF", "#33BCAD");
    const block_t = new Block("t","#eeeeee", "#FEFF00");
    const block_u = new Block("u","#33BCAD", "#FEFF00");
    const block_v = new Block("v","#FEFF00", "#FEFF00");
    const block_w = new Block("w","#8781BD", "#FEFF00");
    const block_x = new Block("x","#F58221", "#FEFF00");
    const block_y = new Block("y","#8ED8F7", "#FEFF00");
    const block_z = new Block("z","#F6ADCD", "#FEFF00");
    const block_0 = new Block("0","#eeeeee", "#33BCAD");
    const block_1 = new Block("1","#33BCAD", "#33BCAD");
    const block_2 = new Block("2","#FEFF00", "#FEFF00");
    const block_3 = new Block("3","#8781BD", "#8781BD");
    const block_4 = new Block("4","#F58221", "#F58221");
    const block_5 = new Block("5","#8ED8F7", "#8ED8F7");
    const block_6 = new Block("6","#F6ADCD", "#F6ADCD");
    const block_7 = new Block("7","#583F99", "#583F99");
    const block_8 = new Block("8","#EB008C", "#EB008C");
    const block_9 = new Block("9","#03AEEF", "#03AEEF");
    const block_space = new Block("space","#C4C9CF", "#000000");

    console.log(block_a);

  return (
    <div className="App">
      <div className="wrapper">
        <header>
          <h1>decode</h1>
        </header>
        <div className="container">
          <div className="toprow">
            <CodeBlock data={block_a}></CodeBlock> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
