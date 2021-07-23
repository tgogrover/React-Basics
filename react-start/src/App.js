import logo from './logo.svg';
import './App.css';
import FuncComponents from './components/startFunctionCompo'
import ClassComponent from './components/startClassComponents'
import StateByClass from './components/stateByClass';
import SetStateClass from './components/setStateClass';
import FirstCss from './components/FirstCss';
import YesNo from './components/Idea';
import FormHandling from './components/formHandling';
import Hook1 from './components/hook1';
import Hook2 from './components/hook2';
import Hook3 from './components/hook3';
import UseEffect1 from './components/useEffect1';
import UseEffect2 from './components/useEffect';
import HookCleanUp from './components/hookCleanUp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          TGO <code>conquer</code>  React
        </p>
        < HookCleanUp />
       {/* <UseEffect2 /> */}
        {/* <UseEffect1 /> */}
        {/* <Hook3 /> */}
        {/* <h1 className="firstClass">First Css handling successfull!</h1> */}
         {/* <StateByClass/> */}
        {/* <SetStateClass/> */}
        {/* <FirstCss /> */}
        {/* <YesNo /> */}
        {/* <FormHandling /> */}
        {/* <Hook1 /> */}
        {/* <Hook2 /> */}
        {/* <FuncComponents  props ="prop" destructuring='through destructuring'>
          
        </FuncComponents>
  
       

        <ClassComponent props="prop" destructuring='through destructuring' >
        Children property working Successfully.

        </ClassComponent> */}

        

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Defeated in just  2 days
        </a> */}
      </header>
    </div>
  );
}

export default App;
