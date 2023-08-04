import './Cover.css';
import { Button } from '../Button/Button';

export const Cover = () => {

  function handleButtonClick(e) {
    e.preventDefault();
    window.open('https://github.com/vldslw');
  }

  return (
		<Button 
    text={'My GitHub'}
    handleClick={handleButtonClick}
    />
  )
};
