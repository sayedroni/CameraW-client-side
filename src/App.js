import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Mcollection from './Components/MoreCollection/Mcollection';
import Login from './Components/Login/Login';
import Reg from './Components/Reg/Reg';
import Authprovider from './Context/Authprovider';
import Privateroute from './Components/PrivateRoute/Privateroute';
import Dashboard from './Components/Dashboard/Dashboard';
import Myorder from './Components/MyOrder/Myorder';
import Order from './Components/Order/Order';
import Addreview from './Components/AddReview/Addreview';
import Addproduct from './Components/AddProduct/Addproduct';
import ManageProduct from './Components/Manage/ManageProduct';
import Update from './Components/Update/Update';
import Payment from './Components/Payment/Payment';
import Notfound from './Components/Notfound/Notfound';
import Admin from './Components/Admin/Admin';
import AdminRoute from './Components/AdminRoute/AdminRoute';

function App() {
  return (
    <div>
      <Authprovider>
      <BrowserRouter>
      <Switch>

        <Route path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/more">
          <Mcollection></Mcollection>
        </Route>

        <Privateroute path="/dashboard">
        <Dashboard></Dashboard>
        </Privateroute>

        <Privateroute path="/myorder">
        <Myorder></Myorder>
        </Privateroute>

        <Privateroute path="/addreview">
        <Addreview></Addreview>
        </Privateroute>

        <AdminRoute path="/addproduct">
       <Addproduct></Addproduct>
        </AdminRoute>

        <AdminRoute path="/manage">
       <ManageProduct></ManageProduct>
        </AdminRoute>

        <Privateroute path="/payment">
        <Payment></Payment>
        </Privateroute>

        <AdminRoute path="/admin">
           <Admin></Admin>
        </AdminRoute>

          <Route path="/update/:id">
            <Update></Update>
          </Route>

        <Privateroute path="/Collection/:id">
       <Order></Order>
        </Privateroute>

        <Route path="/login">
         <Login></Login>
        </Route>
        <Route path="/reg">
         <Reg></Reg>
        </Route>

        <Route path="*">
         <Notfound></Notfound>
        </Route>

      </Switch>
     </BrowserRouter>
      </Authprovider>
    </div>
  );
}

export default App;
