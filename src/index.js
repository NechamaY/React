import React from 'react';
import ReactDOM from 'react-dom/client';
import MyOtherComponent from './MyOtherComponent';
import ComponenetAsClass from './ComponentAsClass';
import Countries from './ComponentAsClass2';
import './index.css';


function MyComponent(){
  return (
  <React.Fragment>
  
  <h1>My First Component</h1>
  <MyOtherComponent/>
  <ComponenetAsClass/>
  <Countries/>
  </React.Fragment>);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<MyOtherComponent/>
  //<ComponenetAsClass/>
 //<Countries/>
 MyComponent()
);


