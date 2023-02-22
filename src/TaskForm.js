import { useState } from "react";
import Button from "./Button";
import TextareaField from "./Forms/TextareaField";
import TextField from "./Forms/TextField";
import style from "./TaskForm.module.css";

function TaskForm({ isTimerStarted, onSubmit }) {

    const initialFormValue = {//cette constante est l'état initial du formulaire à savoir une caine vide
        title: '',
        description: '',
    }

    const [formValue, setFormValue ] = useState(initialFormValue);

    //Permet de soumettre le formulaire
    const handleSubmitForm = (event) => {
        //On commence par empêcher le rechargement de la page au moment de la soumission.
        event.preventDefault();
        //On soumet le formulaire directement dans le onSubmit.
        onSubmit(formValue);

        //On réinitialise les valeurs des champs une fois la tâche enregistrée.
        if (isTimerStarted){//lorsque le timer est lancé
            setFormValue(initialFormValue);
        };
    };

    return (
        <form onSubmit={ handleSubmitForm } className={style['form']}>
            <TextField labelTitle='Titre' placeholder="Titre de votre tâche" value={ formValue.title } onChange={ (v) => setFormValue({...formValue, title: v}) } />
            <TextareaField labelTitle='Description' placeholder="Ecrivez votre description ici..." value={ formValue.description } onChange={ (v) => setFormValue({...formValue, description: v}) }/>
            <Button type='submit' isTimerStarted={ isTimerStarted } />
        </form>
    );
}

export default TaskForm;