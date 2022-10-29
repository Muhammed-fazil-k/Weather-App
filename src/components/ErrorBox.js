import './ErrorBox.css'
const ErrorBox = (props)=>{
    console.log(props.data);
    return(
        <div className='error'>
            <div>{props.data}</div>
        </div>
    );
}
export default ErrorBox;