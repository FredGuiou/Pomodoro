import { useId, useRef } from "react";
import Button from "./Button";
import style from "./TaskForm.module.css";

function TaskForm({ isTimerStarted, onSubmit }) {

    const id = useId();

    const titleInput = useRef(null);
    const descriptionInput = useRef(null);

    const handleSubmitForm = (event) => {
        event.preventDefault();
        onSubmit(//On passe à la soumission l'objet du formulaire
            {
                title:titleInput.current.value,
                description:descriptionInput.current.value,
            }
        ); // vient du composant parent de TaskForm.

        //On réinitialise les valeurs des champs une fois la tâche enregistrée.
        if (isTimerStarted){
            titleInput.current.value = null;
            descriptionInput.current.value = null;
        }
    };

    return (
        <form onSubmit={ handleSubmitForm } className={style['form']}>
            <div className={style['input-group']}>
                <label className={style['label']} htmlFor={ `${id}-title` }>Titre</label>
                <input ref={ titleInput } className={style['input']} type="text" id={ `${id}-title` } placeholder="Titre de votre tâche" />
            </div>
            <div className={style['input-group']}>
                <label className={style['label']} htmlFor={ `${id}-description` }>Description</label>
                <textarea ref={ descriptionInput } className={style['input']} id={ `${id}-description` } rows="5" placeholder="Description de votre tâche"></textarea>
            </div>
            <Button type='submit' isTimerStarted={ isTimerStarted } />
        </form>
    );
}

export default TaskForm;