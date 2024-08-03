import { useState, useEffect } from 'react';
import quotes from './quotesDatabase'; //{quote, author}
import colors from './colors';

function Quote() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [color, setColor] = useState('grey');
  var [quotesArr, setQuotesArr] = useState(getArray(quotes.length));
  var [colorsArr, setColorsArr] = useState(getArray(colors.length));

  const bgStyle = {
    backgroundColor: color,
    transition: "background-color 1s"
  };
  const textStyle = {
    color: color,
    animation: "slidein forwards ease-out 1s",
  };

  function getArray(len) {
    let array = [];
    for (let i = 0; i < len; i++) {
      array.push(i)
    }
    return array
  };

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
  };

  useEffect(newQuote, [])

  //------------- main ------------
  shuffleArray(quotesArr);
  shuffleArray(colorsArr);

  function newQuote() {
    let qArr = [...quotesArr]
    let q = quotes[qArr.pop()];
    setQuotesArr(qArr);
    setQuote(q.quote);
    setAuthor(q.author);
    let cArr = [...colorsArr];
    let c = colors[cArr.pop()];
    setColor(c);
    setColorsArr(cArr);
    console.log('quote.lenth:', quotesArr.length, 'colors.lenth:', colorsArr.length); //-----------
    if (colorsArr.length === 1) {
      setColorsArr(getArray(colors.length));
      shuffleArray(colorsArr);
    }
    if (quotesArr.length === 1) {
      setQuotesArr(getArray(quotes.length));
      shuffleArray(quotesArr);
    }
  };

  return (
    <div id="quote" style={bgStyle}>
      <h1>Quote</h1>
      <div className="main_area">
        <h2 style={textStyle} className='fadein'>"{quote}"</h2>
        <div className='div_author'>
          <p style={textStyle} className='fadein'>-{author}-</p>
        </div>
        <button style={bgStyle} onClick={newQuote}>New quote</button>
      </div>

    </div>
  )
};

export default Quote;
