import { forwardRef, useId, useImperativeHandle, useRef } from "react";
import style from "../TaskForm.module.css";

function TextField({ placeholder, labelTitle }, ref) {

    const id = useId();
    const input = useRef(null);

    //Permet de renvoyer la valeur du ref de l'input du champs.
    useImperativeHandle(ref, () => ({
        focus : () => {
            input.current.focus();
        },
        setDefaultValue: (defaultValue = '') => {
            input.current.value = defaultValue;
        },
        resetValue: () => {
            input.current.value = null;
        }
    }));

    return(
        <div className={style['input-group']}>
                <label className={style['label']} htmlFor={ id }>{ labelTitle }</label>
                <input ref={ input } className={style['input']} type="text" id={ id } placeholder={ placeholder } />
        </div>
    );
}
//On utilise forwardRef pour renvoyer la ref au composant parent.
export default forwardRef(TextField);