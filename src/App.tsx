import {useState} from 'react'
import {ReactTerminal} from "react-terminal";
import './App.css'

function App() {
    const [count, setCount] = useState(0);
    const [randomCounter, setRandom] = useState(Math.floor(Math.random() * 5));

    const getRandomJoke = async () => {
        const joke = RandomJokelist[count];
        setTimeout(()=> {
            setCount(Math.floor(Math.random() * 5));
        }, 500);
        return joke;
    }

    // Define random jokes here
    const RandomJokelist = [
        '¿Por qué los osos polares nunca se van de vacaciones? Porque ya viven en un lugar frío todo el tiempo',
        '¿Por qué las vacaciones en la montaña son las mejores? Porque son la cumbre de la diversión.',
        '¿Por qué los aviones vuelan tan alto? Porque las vacaciones están en el cielo.',
        '¿Por qué los turistas son los mejores artistas? Porque siempre están dibujando.',
        '¿Cómo se llama un oso polar en vacaciones? Un oso polarizado.'
    ];

    // Define commands here
    const commands = {
        hola : "Holaa! un placer atenderte, si tienes dudas puedes ver la lista de comandos escribiendo help",
        help: "lista de comandos: 'joke','enddate', 'locate', 'why', 'aboutme', 'clear' ",
        locate: 'Ciudad de guatemala',
        enddate: 'Dice Julio que si no gana la loteria (otra vez), lo veran hasta el 8 de mayo, te deseamos mucha suerte!',
        why: 'Si necesitas algo urgente, mi asistente o la palmera de mi escritorio con gusto te pueden ayudar!',
        aboutme: 'Naci por la necesidad de tener un respaldo en caso de que Julio este de vacaciones (aunque no esperes mucho de mi, sigo agarrando señal...)',
        joke: () => getRandomJoke(),
    };

    return (
        <div className="App">
            <h2>El asistente del Lider Tecnico 👨🏽‍✈️💻</h2>
            <div style={{
                width: '100%',
                height: '45vh'
            }}>
                <ReactTerminal
                    welcomeMessage={"Bienvenido/a, en que te puedo ayudar? :) "}
                    commands={commands}
                    showControlBar={true}
                    showControlButtons={true}
                    errorMessage={"No se encontro el comando, intenta con 'help'"}
                    theme="matrix"
                />
            </div>
            <p className="read-the-docs">
                <b style={{color: 'white'}}>Fun facts</b> 👀: {RandomJokelist[randomCounter]}
            </p>
            <p className="read-the-docs">
                Diseñado y construido en tiempo record: 30 minutos ✌️ - Julio Avalos
            </p>
        </div>
    )
}

export default App
