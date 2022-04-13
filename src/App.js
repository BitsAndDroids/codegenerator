import './App.css';
import {BoardBlock} from "./boards/BoardService";
import {PartSelectorComponent} from "./components/PartSelectorComponent";

function App() {
    return (
        <div className={'appContainer'}>
            <BoardBlock/>
            <PartSelectorComponent/>
        </div>
    );
}

export default App;
