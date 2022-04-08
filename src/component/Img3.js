import { Parallax } from 'react-parallax';
import '../index.css';
import space from "../imgs/img3.jpg"
const Container = () => (
    <Parallax className='image' bgImage={space} bgImageAlt="the cat" strength={500}>
        <div className="content">
            <span className="img-txt">hello world</span>
        </div>
    </Parallax>
);
export default Container;