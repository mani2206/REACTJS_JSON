import JsonData from './dummy.json';
import Home from './Components/GroupComponents/Home';

function App() {

    const product = JsonData ? JsonData.products : [];

    return (
        <div className="App">
            <Home
                JsonData={product}
            />
        </div>
    );
}

export default App;
