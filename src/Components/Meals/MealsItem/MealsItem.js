import classes from './MealsItem.module.css'
import MealsItemForm from './MealsItemForm'
const MealsItem =(props)=>{
    const price=`$ ${props.price.toFixed(2)}`;
return <li className={classes.meal}>
<div className={classes.name}><h3>{props.name}</h3>
<div className={classes.description}>{props.description}</div>
<div className={classes.price}>{price}</div>
</div>
<div>
<MealsItemForm />
</div>
</li>
}
export default MealsItem;