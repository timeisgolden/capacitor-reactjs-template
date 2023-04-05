import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon } from "@ionic/react";
import { home, chatboxEllipses, personCircleOutline } from "ionicons/icons";
import { Route, Redirect } from "react-router";
import { TabAccount, TabDashboard, TabMessages } from ".";
import DashboardDetail from "../DashboardDetail";

const Tabs: React.FC = () => (
  <IonTabs>
    <IonTabBar slot="bottom">
      <IonTabButton tab="tab-dashboard" href="/app/tab-dashboard">
        <IonIcon icon={home} />
      </IonTabButton>
      <IonTabButton tab="tab-messages" href="/app/tab-messages">
        <IonIcon icon={chatboxEllipses} />
      </IonTabButton>
      <IonTabButton tab="tab-account" href="/app/tab-account">
        <IonIcon icon={personCircleOutline} />
      </IonTabButton>
    </IonTabBar>
    <IonRouterOutlet>
      <Route exact path="/app/tab-dashboard" component={TabDashboard} />
      <Route exact path="/app/tab-dashboard/detail" component={DashboardDetail} />
      <Route exact path="/app/tab-messages" component={TabMessages} />
      <Route exact path="/app/tab-account" component={TabAccount} />
      <Redirect exact from="/app" to="/app/tab-dashboard" />
    </IonRouterOutlet>
  </IonTabs>
);

export default Tabs;
