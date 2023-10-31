import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Profile from './pages/Profile/Profile';
import Forgot from './pages/Forgot/Forgot';
import VerifyOTP from './pages/VerifyOTP/VerifyOTP';
import Password from './pages/Password/Password';
import Register from './pages/Register/Register';
import Order from './pages/Order/Order';
import Cart from './pages/Cart/Cart';
import RestroDetails from './pages/RestroDetails/RestroDetails';
import OrderDetails from './pages/OrderDetails/OrderDetails';
import Address from './pages/Address/Address';
import Menu from './components/Menu/Menu';
import Location from './pages/Location/Location';
import NewLogin from './pages/NewLogin/NewLogin';


setupIonicReact();

const App: React.FC = () => (
  <IonApp>
   <IonReactRouter>
      <IonSplitPane contentId="main">
        <Menu />
          <IonRouterOutlet id="main">

            <Route exact path="/">
              <Redirect to="/login" />
            </Route>

            <Route exact path="/home">
              <Home />
            </Route>

            <Route exact path="/login" component={Login} />

            <Route exact path="/dashboard" component={Dashboard} />

            <Route exact path="/profile" component={Profile} />

            <Route exact path="/forgot" component={Forgot} />

            <Route exact path="/verifyOTP" component={VerifyOTP} />

            <Route exact path="/password" component={Password} />

            <Route exact path="/register" component={Register} />

            <Route exact path="/order" component={Order} />

            <Route exact path="/cart" component={Cart} />

            <Route exact path="/restrodetails" component={RestroDetails} />

            <Route exact path="/orderdetails" component={OrderDetails} />

            <Route exact path="/address" component={Address} />

            <Route exact path="/location" component={Location} />

            <Route exact path="/NewLogin" component={NewLogin} />



          

          </IonRouterOutlet>

      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;
