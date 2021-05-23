import {Fragment} from 'react';
import mealsImage from '../Assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCardButton from './HeaderCardButton'

const Header=(props)=>{
return <Fragment>
<header className={classes.header}>
<h1>Find meals</h1>
<HeaderCardButton onClick={props.onShowCart} />
</header>
<div className={classes['main-image']}>
<img src={mealsImage} alt="table with delitious meals" />
</div>
</Fragment>
}
export default Header;