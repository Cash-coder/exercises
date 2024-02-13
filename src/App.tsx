import ReactDOM from 'react-dom'
import {useState} from 'react'

function App() {
    const [show, setShow] = useState(true);

    return (
        <>
            <button onClick={() => setShow(!show)}>
    {show ? "Hide Element Below" : "Show Element Below"}
    </button>
    {show && <div>Toggle Challenge</div>}
    </>
    );
    }

export default App;