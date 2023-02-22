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
    const [error, setError] = useState(null);

    //Permet de soumettre le formulaire
    const handleSubmitForm = (event) => {
        //On commence par empêcher le rechargement de la page au moment de la soumission.
        event.preventDefault();
        if(error) { //Si on a une erreur alors
            //On lance une alerte qui affiche le message de error.
            alert(`${error.field}: ${error.message}`)
            return;
        };
        //On soumet le formulaire directement dans le onSubmit.
        onSubmit(formValue);
        //On réinitialise les valeurs des champs une fois la tâche enregistrée.
        if (isTimerStarted){//lorsque le timer est lancé
            setFormValue(initialFormValue);
        };
    };

    const handleInputChange = (field, value) => {
        //Permet de récupérer le formulaire ses champs et leur valeur.
        setFormValue({...formValue, [field]: value});

        //Si le champs est égal à title et que la valeur existe ou que sa longueur est inférieure à 4 caractères
        if(field === 'title' && (!value || value.length < 4)){
            setError({
                //on lance alors setError qui contient un champs et son message
                field,
                message: 'Le titre doit avoir au minimum 4 caractères',
            });
            return;
        }

        //Si le champs est égal à description et que la valeur existe ou que sa longueur est supérieure à 10 caractères
        if(field === 'description' && (!value || value.length > 10)){
            setError({
                //on lance alors setError qui contient un champs et son message
                field,
                message: 'La description doit avoir moins de 10 caractères',
            });
            return;
        }

        //sinon on réinitialise l'erreur à null dans le cas des deux conditions plus haut.
        setError(null);
        
    }

    return (
        <form onSubmit={ handleSubmitForm } className={style['form']}>
            <TextField labelTitle='Titre' placeholder="Titre de votre tâche" value={ formValue.title } onChange={ (v) => handleInputChange('title', v) } name='title' error={ error } />
            <TextareaField labelTitle='Description' placeholder="Ecrivez votre description ici..." value={ formValue.description } onChange={ (v) => handleInputChange('description', v) } name='description' error={ error }/>
            <Button type='submit' isTimerStarted={ isTimerStarted } />
        </form>
    );
}

export default TaskForm;