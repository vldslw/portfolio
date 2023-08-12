import './Cover.css';
import { Button } from '../Button/Button';
import Photo from './vldslwPhoto.png';

export const Cover = () => {

  function handleButtonClick(e) {
    e.preventDefault();
    window.open('https://github.com/vldslw');
  }

  return (
    <section className="cover">
      <div className="cover__desc-block">
        <h2 className="cover__desc-subhead">Web Development</h2>
        <h1 className="cover__desc-head">Vladislav Pavlov</h1>
        <p className="cover__desc-text">Frontend  Developer with experience in the media JavaScript | React</p>
        <Button 
         text={'My GitHub'}
          handleClick={handleButtonClick}
         />
      </div>
      <div className="cover__pic-block">
        <img src={Photo} className="cover__pic" alt="Vladislav Pavlov"/>
        <div className="cover__rec cover__rec_top"></div>
        <div className="cover__rec cover__rec_bottom"></div>
        <div className="cover__rotator"></div>
      </div>
    </section>
  )
};
