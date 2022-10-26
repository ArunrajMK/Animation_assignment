
import { DndProvider } from 'react-dnd';
import {HTML5Backend} from "react-dnd-html5-backend"
import './App.css';

import MainRoutes from './components/MainRoutes';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
    <div className="App">
    <MainRoutes />
    </div>
    </DndProvider>
  );
}

export default App;
