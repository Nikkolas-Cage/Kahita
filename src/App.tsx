import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonNav, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

import {wallet, list, person, home} from "ionicons/icons";
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
import MyWallet from './pages/MyWallet';
import Activity from './pages/Activity';
setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home"/>
        </Route>

        <Route exact path="/wallet">
          <MyWallet/>
        </Route>
        <Route exact path="/">
          <Redirect to="/wallet"/>
        </Route>

        <Route exact path="/activity">
          <Activity/>
        </Route>
        <Route exact path="/">
          <Redirect to="/activity"/>
        </Route>

      </IonRouterOutlet>

     

      <IonTabBar slot="bottom">
      <IonTabButton href="/home" tab="home">
        <IonIcon icon={home}></IonIcon>
          <IonLabel>Home</IonLabel>
          </IonTabButton>
        <IonTabButton href="/wallet" tab="wallet">
        <IonIcon icon={wallet}></IonIcon>
          <IonLabel>My Wallet</IonLabel>
          </IonTabButton>
          <IonTabButton href="/activity" tab="activity">
          <IonIcon icon={list}></IonIcon>
          <IonLabel>Activity</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
