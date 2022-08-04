import './App.css';
import { useState } from 'react';
import image from './assest/image-hero-desktop.png'
import image1 from './assest/client-databiz.svg'
import image2 from './assest/client-maker.svg'
import image3 from './assest/client-meet.svg'
import image4 from './assest/client-audiophile.svg'
import Header from './components/Header'


function App() {

  const [img, setImg] = useState()

  const handleOnChangeFile = (e) => {
    const element = e.target;
    console.log(element.files);

    const file = element.files[0];
    const reader = new FileReader()

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      const src = reader.result.toString();
      setImg(src)
      console.log(reader.result);
    }
  }

  return (
    <div className="container">
      <Header/>


      <div className='body'>
        <div className='body-inf'>
          <h3 className='body-title'>Make<br />remote work</h3>

          <p className='body-paragra'>Get your team in sync, no matter your location.<br />Streamline proceses, create team rituals, and<br />watch productivity soar.</p>

          <button className='body-button'>Learn more</button>

          <div className='body-icons'>
            <img src={image1} />
            <img src={image4} />
            <img src={image3} />
            <img src={image2} />

          </div>
        </div>
        <div className='body-img'>
          {/* <img src={image} className='image'></img> */}
          <div className='image'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
