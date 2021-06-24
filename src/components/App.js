function App() {
    const axios = require('axios');
    const url = "https://zh2is19bwl.execute-api.us-east-1.amazonaws.com/dev";

    async function call() {
    const response = await axios.post(url + "/v1/compare-list");
    const data = await response.json();
    console.log(data);
    }

    return (
        <div>
            <h1>CompareFace API</h1>
            <button onClick={call}>Show Results</button>
        </div>
    );
}

export default App;