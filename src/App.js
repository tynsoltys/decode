import React, {useState} from 'react';
import './App.css';
import CodeBlock from "./components/CodeBlock"

// / // / // / // / // / // / // / // / ///
// FOR THE LOVE OF MUSIC AND GOOD DESIGN //
// / // / // / // / // / // / // / // / ///

function App() {

    const [result, setResult] = useState("");

    function Block(letter, color1, color2, number = "", special = "" )  {
      this.letter = letter;
      this.color1 = color1;
      this.color2 = color2;
      this.number = number;
      this.special = special;
      this.clickedOn = function(e) {
        const value = e.target.dataset.val;
        console.log(`You clicked on ${value}`)
        if ( value === "space") {
          setResult(result + " ")
        } else {
          setResult(result + value)
        }
        
        
      }
    }

    const block_a = new Block("a","#33BCAD", "#33BCAD","1", "split");
    const block_b = new Block("b","#FEFF00", "#FEFF00","2", "split dark");
    const block_c = new Block("c","#8781BD", "#8781BD","3", "split");
    const block_d = new Block("d","#F58221", "#F58221","4", "split");
    const block_e = new Block("e","#8ED8F7", "#8ED8F7","5", "split");
    const block_f = new Block("f","#F6ADCD", "#F6ADCD","6", "split");
    const block_g = new Block("h","#583F99", "#583F99","7", "split");
    const block_h = new Block("g","#EB008C", "#EB008C","8", "split");
    const block_i = new Block("i","#03AEEF", "#03AEEF","9", "split");
    const block_j = new Block("j","#eeeeee", "#33BCAD","0", "split dark-letter");
    const block_k = new Block("k","#33BCAD", "#33BCAD");
    const block_l = new Block("l","#FEFF00", "#33BCAD","","dark-letter");
    const block_m = new Block("m","#8781BD", "#33BCAD");
    const block_n = new Block("n","#F58221", "#33BCAD");
    const block_o = new Block("o","#8ED8F7", "#33BCAD");
    const block_p = new Block("p","#F6ADCD", "#33BCAD");
    const block_q = new Block("q","#583F99", "#33BCAD");
    const block_r = new Block("r","#EB008C", "#33BCAD");
    const block_s = new Block("s","#03AEEF", "#33BCAD");
    const block_t = new Block("t","#eeeeee", "#FEFF00","","dark-letter");
    const block_u = new Block("u","#33BCAD", "#FEFF00","","dark-letter");
    const block_v = new Block("v","#FEFF00", "#FEFF00","","dark-letter");
    const block_w = new Block("w","#8781BD", "#FEFF00","","dark-letter");
    const block_x = new Block("x","#F58221", "#FEFF00","","dark-letter");
    const block_y = new Block("y","#8ED8F7", "#FEFF00","","dark-letter");
    const block_z = new Block("z","#F6ADCD", "#FEFF00","","dark-letter");
    // All of the below are dupes of A-k
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
    const block_space = new Block("space", "#C4C9CF", "#C4C9CF", "", "space");
    const resultField = document.getElementById("result-field");


    function backspace() {
      const str = resultField.value
      const newStr = str.substring(0, str.length - 1);
      console.log(newStr);
      setResult(newStr);
    }

  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
        <header>
          <h1>decode</h1>
          <div className="description">
            <span className="plus">+</span>
            <p>decode peter saville things</p>
          </div>
        </header>
          <div className="block-zone">
            <div className="block-row row1">
              <CodeBlock data={block_a}/>
              <CodeBlock data={block_b}/>
              <CodeBlock data={block_c}/>
              <CodeBlock data={block_d}/>
              <CodeBlock data={block_e}/>
              <CodeBlock data={block_f}/>
              <CodeBlock data={block_g}/>
              <CodeBlock data={block_h}/>
              <CodeBlock data={block_i}/>
            </div>
            <div className="block-row row2">
              <CodeBlock data={block_j}/>
              <CodeBlock data={block_k}/>
              <CodeBlock data={block_l}/>
              <CodeBlock data={block_m}/>
              <CodeBlock data={block_n}/>
              <CodeBlock data={block_o}/>
              <CodeBlock data={block_p}/>
              <CodeBlock data={block_q}/>
              <CodeBlock data={block_r}/>
              <CodeBlock data={block_s}/>
            </div>
            <div className="block-row row3">
              <CodeBlock data={block_t}/>
              <CodeBlock data={block_u}/>
              <CodeBlock data={block_v}/>
              <CodeBlock data={block_w}/>
              <CodeBlock data={block_x}/>
              <CodeBlock data={block_y}/>
              <CodeBlock data={block_z}/>
            </div>
            <div className="block-row row4">
              {/* <CodeBlock data={block_0}/>
              <CodeBlock data={block_1}/>
              <CodeBlock data={block_2}/>
              <CodeBlock data={block_3}/>
              <CodeBlock data={block_4}/>
              <CodeBlock data={block_5}/>
              <CodeBlock data={block_6}/>
              <CodeBlock data={block_7}/>
              <CodeBlock data={block_8}/>
              <CodeBlock data={block_9}/> */}
              <CodeBlock data={block_space}/>
            </div>



            <div className="result-zone">
            <div class='octagon'>
              <div class='inner'></div>
            </div>
              <input type="text" id="result-field" disabled className="result-field" value={result} onClick={() => console.log(resultField)}/>
              <button className="backspace-button" id="backspace-button" onClick={() => backspace()}>backspace</button>
              <button className="clear-button" id="clear-button" onClick={() => setResult("")}>clear</button>
              <button className="copy-button" id="copy-button" onClick={() => setResult("")}>copy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
