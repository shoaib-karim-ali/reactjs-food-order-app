import { Fragment } from 'react';
import CartButton from '../cart/CartButton';
import mealsImage from '../../assets/meals.jpg';
import style from './Header.module.css';

const Header = () => {
    return (
        <Fragment>
          <header className={style.header}>
            <h1>ReactMeals</h1>
            <CartButton />
          </header>
          <div className={style['main-image']}>
            <img src={mealsImage} alt='Delicious food on the table' />
          </div>
        </Fragment>
      );
}

export default Header;