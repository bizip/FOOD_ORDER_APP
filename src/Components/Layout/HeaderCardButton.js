import HeaderCardIcon from '../Cart/CartIcon'
import classes from './HeaderCardButton.module.css'
const HeaderCardButton=props=>{
return <button className={classes.button} onClick={props.onClick} >
<span className={classes.icon}><HeaderCardIcon /></span>
<span className={classes.badge}>4</span>
<span></span>
</button>
}
export default HeaderCardButton;
