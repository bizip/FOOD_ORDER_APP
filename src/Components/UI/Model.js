import {Fragment} from 'react'
import classes from './Model.module.css'
import ReactDOM from 'react-dom'

const Backdrop=props=>{
    return <div className={classes.backdrop} onClick={props.onClose} />
};
const ModelOverlay=props=>{

return <div className={classes.modal}>{props.children}</div>
};

const PortalElement=document.getElementById('overlays');

const Model=(props)=>{ 
    return <Fragment>
    {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />,PortalElement)}
    {ReactDOM.createPortal(<ModelOverlay>{props.children}</ModelOverlay>,PortalElement)}
    </Fragment>
 };

export default Model;