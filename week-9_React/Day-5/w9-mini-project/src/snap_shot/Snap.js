import { createClient } from 'pexels';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

const client = createClient('TCSgGdn6v3ZsW7AiSuM8T2BNc5CP0WMgkMZfZA5K748aoYikZOnoZWn1');


function Snap(props) {
  const [images, setImages] = useState();
  const [search, setSearch] = useState('');
  const [header, setHeader] = useState();
  const per_page = 12;
  const orientation = 'landscape';

  const getImages = (e, q) => {
    e.preventDefault();
    let query = q ?? search;
    // setSearch(query);
    console.log(query);
    client.photos.search({ query, per_page, orientation })
      .then(photos => {
        console.log(photos.photos); //--------------
        setHeader(query);
        setImages(photos.photos);
      });
  }
  return (
    <div id="snap">
      <h1>SnapShot</h1>
      <form>
        <input type="search" placeholder='Search...' onChange={(e) => setSearch(e.target.value)} />
        <input type='submit' onClick={(e) => getImages(e)} value='Search' />
      </form>
      <br />
      <div className='searchMenu'>
        <Button className='btn' variant="dark" onClick={(e) => getImages(e, 'mountain')}>Mountains</Button>
        <Button className='btn' variant="dark" onClick={(e) => getImages(e, 'food')}>Foods</Button>
        <Button className='btn' variant="dark" onClick={(e) => getImages(e, 'car')}>Cars</Button>
        <Button className='btn' variant="dark" onClick={(e) => getImages(e, 'bike')}>Bikes</Button>
        <Button className='btn' variant="dark" onClick={(e) => getImages(e, 'cat')}>Cats</Button>
      </div>
      <h2>{header} pictures:</h2>
      {!images ? "" :
        <div className='pictures'>
          {images.map(image => {
            return (
              <div key={image.id}>
                <img src={image.src.medium} alt={image.alt} />
              </div>
            )
          })}
        </div>
      }
    </div >
  )
};

export default Snap;