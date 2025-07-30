// importing react-dom module
import ReactDOM from 'react-dom/client';
import{App} from './App';

// getting division tag by id 'root'
const divTag = document.getElementById('root');

// creating react dom which use to connect/render our component on browser
const reactDOM = ReactDOM.createRoot(divTag);

// rendering component
reactDOM.render(<App />)

