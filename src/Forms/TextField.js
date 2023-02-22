import { useId } from "react";
import style from "../TaskForm.module.css";

function TextField({ placeholder, labelTitle, value, onChange, error, name }) {

    const id = useId();

    const handleChange = (event) => {
        onChange(event.target.value);
    }

    return(
        <div className={style['input-group']}>
                <label className={style['label']} htmlFor={ id }>{ labelTitle }</label>
                <input className={style['input']} type="text" id={ id } placeholder={ placeholder } value={ value } onChange={ handleChange }/>
                { error && error.field === name && <p className={style['error']} >{ error.message }</p> }
        </div>
    );
}

export default TextField;