import './App.css';
import Calculator from './Components/Calculator/Calculator';
import LifeCycle from './Components/LifeCycle';
import NoteState from './Components/context/NoteState';
import Todo from './Components/Todo/Todo'
import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HocCompnent from './Components/HocCompnent';
import Counter from './Components/counter/Counter';
import UpdateState from './Components/UpdateState/UpdateState';
function App() {
  return (
    <NoteState>
      <Router>
        <Header />
        <div className="App container">
          <Routes>
            {/* This is task One  */}
            <Route exact path="/lifeCycle" element={<LifeCycle />} />
            {/* ********************************** */}

            {/*  This is Task two Hoce components */}
            <Route exact path="/hoc" element={<HocCompnent />} />
            {/* ********************************** */}

            {/* This is Task Three */}
            <Route exact path="/counter" element={<Counter />} />
            <Route exact path="/update-state" element={<UpdateState />} />
            {/* ********************************** */}

            {/* This is Task Four */}
            <Route exact path="/" element={<Calculator />} />
            {/* ********************************** */}

            {/* This is Task five */}
            <Route exact path="/todo" element={<Todo />} />
            {/* ********************************** */}
          </Routes>

        </div>
      </Router>
    </NoteState>
  );
}
export default App;
