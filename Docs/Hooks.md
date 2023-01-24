# HOOKS

Ils permettents de gérer le state et le cycle de vie des composants mais pas que ! 

Ils peuvent notament gérer les performances en les optimisants, gérer les intérractions entre les composants et les API.

On peut créer nos propores hooks. Ils s'agit de fonctions spécifiques qui englobent d'autres fonctions et paramètres un peu comme des classes mais avec une approche différente et plus simple.

Il sont conventionellement préfixé du mot "use".

## useState

useState permet d'opérer des modifications sur le state d'un composant. Sa syntaxe est la suivante :

```js
const [timers, setTimers] = useState([]);
```

On définit en premier le nom de notre donnée puis la fonction qui permet de mettre à jour la valeur du state avec set+nom_de_notre_donnée (conventionellement).

## useEffect

useEffect permets de gérer le cycle de vie d'un composant.

UseEffect s'execute chaque fois qu'un composant est chargé.

La syntaxe de useEffect est la suivante :

```js
useEffect(() => {
    //La fonction déclenchée par le useEffect
    console.log();
}, []); //Le [] est appelé le tableau des dépendances est permet d'éviter le comportement de boucle infinie, le  hook ne s'execute aiinsi qu'une fois. On évite ainsi la mise à jour d'un composant. Si on veut surveiller le changement d'une valeur du composant on lui va devoir préciser dans le tableau des dépendances de quelle valeur il s'agit.

```

NB : Dans le cas d'un hook qui utilise une fonction dans laquelle il est question d'abonnement (ex le plus courant: setInterval) il est impératif de se désabonner A CHAQUE FOIS pour éviter les problème de performance et les erreurs. Pour se faire on utilise :

```js
useEffect(() => {
    timerId = setInterval(() => {
        setClock(new Date())
    }, 1000);

    return () => {
        clearInterval(timerId); //Le return ici permet de se désabonner de setInterval 
    }
}, []) //le tableau des dépendances peut surveiller plusieurs éléments on les sépare par des virgules tout simplement.
```

## useMemo

Ce hook permet de mémoiser la valeur du paragraphe, c'est à dire effectuer une mise en cache des valeurs de retour d'une fonction selon ses valeurs d'entrée. Le but de cette technique d'optimisation de code est de diminuer le temps d'exécution d'un programme informatique en mémorisant les valeurs retournées par une fonction.

exemple :

```js
const displayParagraph = useMemo(() => {
        return (
            <p >
                {isTimerStarted ? 'Le timer est démarré' : 'Le timer est arrêté' }
            </p>
        );
    }, [ isTimerStarted ]); //On utilise un tableau de dépendances pour empêcher le rechargement grace à useMemo du JSX retourné.
```

On peut memoïser des composants entiers pour cela on encapsule le composant dans une fonction memo(composant); au moment de l'export.

ex TimerText.js:

```js
import { memo } from "react";
(...)
export default memo(TimerText);
```

Attention ! : Ne pas abuser de la mémoïsation car le gain de performance sur une utilisation pertinente peut émettre l'ffet complètement inverse si on place des useMemo() et memo() partout.

## useCallback

