//inporting react-dom module
import ReactDOM from 'react-dom/client';
import { MyComponent } from './Mycomponent';
//getting division tag by id 'root'
const divTag=document.getElementById('root');
//creating a root dom (document object model)
const rootabc = ReactDOM.createRoot(divTag);
//rendering component
//mycomponent is our react component
rootabc.render(<MyComponent />)