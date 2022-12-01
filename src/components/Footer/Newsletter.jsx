import React from 'react';
import SubHeading from '../SubHeading/SubHeading';

import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className='app__newsletter-heading'>
    <SubHeading title="Newsletter"/>
    <h1 className='headtext__cormorant'>Se inscreva na nossa newsletter</h1>
    <p className='p__opensans'>E não perca as noticias</p>
    </div>
    <div className='app__newsletter-input flex__center'>
      <input type="email" placeholder='Coloque seu Email'/>
      <button className='custom__button'>Se Inscreva!</button>

    </div>
    
  </div>
);

export default Newsletter;
