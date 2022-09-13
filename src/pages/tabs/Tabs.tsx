import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { home, chatboxEllipses, personCircleOutline } from "ionicons/icons";
import { Route, Redirect } from "react-router";
import TabAccount from "./TabAccount";
import TabDashboard from "./TabDashboard";
import TabMessages from "./TabMessages";

const Tabs: React.FC = () => (
  <IonReactRouter>
    <IonTabs>
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab-dashboard" href="/tab-dashboard">
          <IonIcon icon={home} />
        </IonTabButton>
        <IonTabButton tab="tab-messages" href="/tab-messages">
          <IonIcon icon={chatboxEllipses} />
        </IonTabButton>
        <IonTabButton tab="tab-account" href="/tab-account">
          <IonIcon icon={personCircleOutline} />
        </IonTabButton>
      </IonTabBar>
      <IonRouterOutlet>
        <Route path="/tab-dashboard" component={TabDashboard} />
        <Route path="/tab-messages" component={TabMessages} />
        <Route path="/tab-account" component={TabAccount} />
        <Route exact path="/">
          <Redirect to="/tab-dashboard" />
        </Route>
      </IonRouterOutlet>
    </IonTabs>
  </IonReactRouter>
);

export default Tabs;
