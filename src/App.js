import React, {useState} from 'react';
import './App.css';
import CodeBlock from "./components/CodeBlock"

// / // / // / // / // / // / // / // / ///
// FOR THE LOVE OF MUSIC AND GOOD DESIGN //
// / // / // / // / // / // / // / // / ///

function App() {

  //* / // / // / // / // //
  //* STATE OF THE NATION //
  //* / // / // / // / // //

    const [result, setResult] = useState("");
    const [showResultZone, setResultZone] = useState(false);
    const [sideA, setSideA] = useState(true);


  //* / // / // / // /
  //* FUNCTIONALITY //
  //* / // / // / // /

    // BLOCK MODEL
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

    // BLOCK DECLARATIONS
    const block_a = new Block("a","#33BCAD", "#33BCAD","1", "split");
    const block_b = new Block("b","#ffd600", "#ffd600","2", "split dark");
    const block_c = new Block("c","#8781BD", "#8781BD","3", "split");
    const block_d = new Block("d","#F58221", "#F58221","4", "split");
    const block_e = new Block("e","#8ED8F7", "#8ED8F7","5", "split");
    const block_f = new Block("f","#F6ADCD", "#F6ADCD","6", "split");
    const block_g = new Block("g","#583F99", "#583F99","7", "split");
    const block_h = new Block("h","#EB008C", "#EB008C","8", "split");
    const block_i = new Block("i","#03AEEF", "#03AEEF","9", "split");
    const block_j = new Block("j","#eeeeee", "#33BCAD","0", "split dark-letter");
    const block_k = new Block("k","#33BCAD", "#33BCAD");
    const block_l = new Block("l","#ffd600", "#33BCAD","","dark-letter");
    const block_m = new Block("m","#8781BD", "#33BCAD");
    const block_n = new Block("n","#F58221", "#33BCAD");
    const block_o = new Block("o","#8ED8F7", "#33BCAD");
    const block_p = new Block("p","#F6ADCD", "#33BCAD");
    const block_q = new Block("q","#583F99", "#33BCAD");
    const block_r = new Block("r","#EB008C", "#33BCAD");
    const block_s = new Block("s","#03AEEF", "#33BCAD");
    const block_t = new Block("t","#eeeeee", "#ffd600","","dark-letter");
    const block_u = new Block("u","#33BCAD", "#ffd600","","dark-letter");
    const block_v = new Block("v","#ffd600", "#ffd600","","dark-letter");
    const block_w = new Block("w","#8781BD", "#ffd600","","dark-letter");
    const block_x = new Block("x","#F58221", "#ffd600","","dark-letter");
    const block_y = new Block("y","#8ED8F7", "#ffd600","","dark-letter");
    const block_z = new Block("z","#F6ADCD", "#ffd600","","dark-letter");
    // REGRET: All of the below are dupes of A-K, HERE FOR POSTERITY AND ANOTHER DESIGN
    const block_0 = new Block("0","#eeeeee", "#33BCAD");
    const block_1 = new Block("1","#33BCAD", "#33BCAD");
    const block_2 = new Block("2","#ffd600", "#ffd600");
    const block_3 = new Block("3","#8781BD", "#8781BD");
    const block_4 = new Block("4","#F58221", "#F58221");
    const block_5 = new Block("5","#8ED8F7", "#8ED8F7");
    const block_6 = new Block("6","#F6ADCD", "#F6ADCD");
    const block_7 = new Block("7","#583F99", "#583F99");
    const block_8 = new Block("8","#EB008C", "#EB008C");
    const block_9 = new Block("9","#03AEEF", "#03AEEF");
    const block_space = new Block("space", "#C4C9CF", "#C4C9CF", "", "space");
    const resultField = document.getElementById("result-field");


  //* / // / // / // / // //
  //* SHE'S LOST CONTROLS //
  //* / // / // / // / // //

    // BACKSPACE
    function backspace() {
      const str = resultField.value
      const newStr = str.substring(0, str.length - 1);
      console.log(newStr);
      setResult(newStr);
    }

    //? CLEAR IS HANDLED BELOW

    // COPY
    function copyText() {
      navigator.permissions.query({name: "clipboard-write"}).then(res => {
        if (res.state == "granted" || res.state == "prompt") {
          /* write to the clipboard now */
          function updateClipboard() {
            navigator.clipboard.writeText(result).then(function() {
              /* clipboard successfully set */
              console.log("copied")
            }, function() {
              /* clipboard write failed */
              console.log("failed")
            });
          }
          updateClipboard();
        }
      });
    }

  //* / // / // / / 
  //* VISIBILITY //
  //* / // / // / /

  function flipside() {
    setSideA(!sideA);
  }

  function showZone() {
    console.log(showResultZone);
    setResultZone(true);
  }



  return (
    <div className="App">
      <div className="wrapper">
      <div className="code">
      <CodeBlock data={block_p}/>
      <CodeBlock data={block_l}/>
      <CodeBlock data={block_e}/>
      <CodeBlock data={block_a}/>
      <CodeBlock data={block_s}/>
      <CodeBlock data={block_e}/>
      <CodeBlock data={block_space}/>
      <CodeBlock data={block_l}/>
      <CodeBlock data={block_e}/>
      <CodeBlock data={block_t}/>
      <CodeBlock data={block_space}/>
      <CodeBlock data={block_m}/>
      <CodeBlock data={block_e}/>
      <CodeBlock data={block_space}/>
      <CodeBlock data={block_g}/>
      <CodeBlock data={block_o}/>
      </div>
      <div title="flip sides" className={`flipper ${sideA ? "" : "flipped-flipper"}`} onClick={() => flipside()} role="navigation">
        <p className="instruction">turn around</p>
      </div>
        <div className={`container ${`${sideA ? "" : "flip-album"}`}`} onMouseOver={() => showZone()}>
          { /* TODO Componentize the Sides*/ }
          <div className={`sideA ${sideA ? "" : "flipped-side"}`}>
            <header>
              <h1 className={`${showResultZone ? "" : "header-start"}`}>decode</h1>
              <div className="description">
              </div>
            </header>
            <div className={`block-zone hide ${showResultZone ? "show" : "hide"}`}>
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
                <CodeBlock data={block_space}/>
              </div>



              <div className={`result-zone hide ${showResultZone ? "show" : "hide"}`}>
                <input type="text" id="result-field" disabled className="result-field" value={result} onClick={() => console.log(resultField)}/>
                <button className="copy-button" id="copy-button" onClick={() => copyText()}>copy</button>
                <button className="backspace-button" id="backspace-button" onClick={() => backspace()}>backspace</button>
                <button className="clear-button" id="clear-button" onClick={() => setResult("")}>clear</button>
              
              </div>
            </div>
          
          </div>
          <div className={`sideB ${sideA ? "flipped-side" : ""}`}>
            <h2><span className="title">decode</span></h2>
            <p className="story">
              <span> <a href="https://en.wikipedia.org/wiki/Peter_Saville_(graphic_designer)" target="_blank">Peter Saville's</a> colour code first appeared on the album cover and sleeve of New Order's <em>Power, Corruption & Lies</em> (1983). Juxtaposing the old and new, the colour control bar startles against a reproduction of Henri Fantin-Latour's <em>A Basket of Roses </em>(1890). The code can be deciphered using the key printed on the album's back cover, and reappears several times throughout the band's catalogue.
              </span>
            </p>

            <h3>coming soon</h3>
            <ul>
              <li><em>encode</em></li>
              <li>iterm 2 theme</li>
              <li>vscode theme</li>
            </ul>
            <p className="credits">Visual identity inspired by Peter Saville for New Order.<br/> <em>decode</em> designed & built by <a href="http://www.github.com/tynsoltys" target="_blank">me</a> as a welcome escape from these times of <em>PCL</em>.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
