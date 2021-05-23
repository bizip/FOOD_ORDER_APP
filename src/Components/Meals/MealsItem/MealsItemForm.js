import classes from './MealsItemForm.module.css'
import Input from '../../UI/Input'
const MealsItemForm=(props)=>{
return <form className={classes.form}>
<Input label={'amount'} input={{
id:'amount_' + props.id,
type:'number',
min:'1',
max:'5',
defaultvalue:'1'
}} />
<button>+ Add</button>
</form>
}
export default MealsItemForm;