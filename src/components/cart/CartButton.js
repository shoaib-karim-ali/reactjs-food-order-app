import CartIcon from './CartIcon';
import style from './CartButton.module.css'

const CartButton = () => {
    return (
        <button className={style.button}>
            <span className={style.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={style.badge}>5</span>
        </button>
    );
}

export default CartButton;