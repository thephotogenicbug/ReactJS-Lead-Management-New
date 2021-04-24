import  React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Header from './header';
import Dashboard from './dashboard';
import Login from './login';
import Newcustomer from './newcustomer';
import Allcustomer from './allcustomer';
import Followup from './followup';
//const Allcustomer = ()=> <h2 className="text-center">All Customer</h2>;
//const Followup = ()=> <h2 className="text-center">Follow up Customer</h2>;

function App() {
  if(localStorage.getItem("userid")==null){
    return(
      <Login/>
    )
  }else{
  return (
    <HashRouter>
      <Header/>
      <Route exact path="/" component={Dashboard}/>
      <Route exact path="/allcustomer" component={Allcustomer}/>
      <Route exact path="/followup" component={Followup}/>
      <Route exact path="/newcustomer" component={Newcustomer}/>
    
    </HashRouter>
     );
 }
}

export default App;
