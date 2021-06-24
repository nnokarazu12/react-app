import call from './api/index'

function Button() {
    return <button onClick={call}>Compare</button>;
}

export default Button;