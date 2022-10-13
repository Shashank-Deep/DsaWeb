import React, { Component } from "react";
import { Routes ,Route } from 'react-router-dom';
import Compiler from "./Components/Compiler/Compiler";
import NavBar from "./Components/Components/NavBar";
import Home from "./Components/Components/Home";
import Topics from "./Components/Components/Topics";
import ArrayQuestions from "./Components/Components/ArrayQuestions";
import MatrixQuestions from "./Components/Components/MatrixQuestions";
import Question from "./Components/Questions/Question";
import Question1 from "./Components/Questions/Question1";
export default class App extends Component {
  render() {
    return (
      <>
        
        <NavBar/>
        
        
        <Routes>
          <Route exact path="/" element={<Home/>} />
        </Routes> 
           
        <Routes>
          <Route path="/com" element={<Compiler/>} />
        </Routes> 


        <Routes>
          <Route exact path="/topic" element={<Topics/>} />
        </Routes>

        <Routes>
          <Route exact path="/arrayquestions" element={<ArrayQuestions/>} />
        </Routes>
        <Routes>
          <Route exact path="/matrixquestions" element={<MatrixQuestions/>} />
        </Routes>

        <Routes>
          <Route exact path="/question" element={<Question/>} />
        </Routes>

        <Routes>
          <Route exact path="/question1" element={<Question1/>} />
        </Routes>
            
          
         
      </>
    );
  }
}
