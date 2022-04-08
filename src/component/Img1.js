import { Parallax } from 'react-parallax';
import '../index.css';
import nasa from "../imgs/lesly-juarez-DFtjXYd5Pto-unsplash.jpg"
import {  Box } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
const Container = () => (
    <Parallax className='image' bgImage={nasa}  strength={500} >
     <div className="content">
        
 
  <div className='colomn'>
      <span className="img-txt">Mission</span>
     <p>We aim to bridge the gap between alumni and students. This can be
done by making students personally interact with the alumni, who are
much ahead in their favorable and respective fields, by conducting
various mentorship sessions related to different professional paths
that exist.</p>
      </div>
  

  <div className='colomn' ><span className="img-txt">Vision</span>
  
  <p>We believe that motivation comes through imagination and
illustrations, in the current scenarios, mass media can play a very vital
role in any student's life, provided with a healthy mentorship on top of
it

.</p>
  </div>
  </div>
        
        
    </Parallax>
);
export default Container;