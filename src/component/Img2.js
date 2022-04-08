import { Parallax } from 'react-parallax';
import '../index.css';
import setelite from "../imgs/img2.jpg"
const Container = () => (
    <Parallax className='image' bgImage={setelite}  strength={500}>
        <div className="content">
            <span className="img-txt">Mission</span>
        </div>
    </Parallax>
);
export default Container;