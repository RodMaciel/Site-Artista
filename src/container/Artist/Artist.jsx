import React from 'react';
import { SubHeading } from '../../components'
import { images } from '../../constants';

import './Artist.css';

const Artist = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.rainha} alt="artist-img" />
    </div>
    <div className="app__wrapper__info">
      <SubHeading title="Palavra da Artista" />
      <h1 className="headtext__cormorant">Oque acreditamos</h1>

      <div className="app__artist-content">
        <div className="app__artist-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
          </p>
        </div>
        <p className="p__opensans">auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.</p>
      </div>

      <div className='app__artist-sign'>
        <p>Geni Maciel</p>
        <p className='p__opensans'>Artista & Fundadora</p>
        <img src={images.gesign} alt="sign"/>
      </div>
    </div>
  </div>
);

export default Artist;
