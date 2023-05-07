import logo from '../logo.svg';
import '../App.css';
import 'bulma/css/bulma.min.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import TasksContainer from "../container/TasksContainer";
import SingleTask from "../container/SingleTask";
import AddTask from "../container/AddTask";
import Done from "../container/Done";
import Do from "../container/ToDo";

function App() {
  return (
      <>
          <BrowserRouter>
              <Layout>
                  <Routes>
                      <Route exact path="/" element={<TasksContainer/>} />
                      <Route path="/:id" element={<SingleTask/>} />
                      <Route path="/addTask" element={<AddTask />} />
                      <Route path="/done" element={<Done />} />
                      <Route path="/do" element={<Do />} />
                  </Routes>
              </Layout>
          </BrowserRouter>
      </>
  );
}

export default App;
