import Card from '../Card/Card'
import datiCard from '../Card/dati.json'

function Main(props){
    let array = [1, 2, 3, 4]
    let arrayStringhe = ["prova1", "prova2"]
    console.log(datiCard)
    return(
        <main>
            <h2>{props.titolo}</h2>
            {array}
            {arrayStringhe}
            {array.map((valore, index) => (
                <p key={index}>{valore}</p>
            ))}
            {/* qui ci sarà la nostra card */}
            <Card colore={props.tema} titolo="Ciao mondo"/>
            {/* stampiamo le card del json */}
            {datiCard.cards.map((elementi) => (
                <Card key={elementi.id} colore={props.tema} titolo={elementi.title}/>
            ))}
            
        </main>
    )
}

export default Main;

// al Main non interessa il tema, lo andiamo a propagare al suo figlio, cioè Card