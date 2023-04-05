import { IonPage, IonRouterOutlet } from "@ionic/react";
import { Redirect, Route, RouteComponentProps } from "react-router";
import UserDetailPage from "./UserDetailPage";
import UsersListPage from "./UsersListPage";

const DashboardPage: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <IonPage>
      <IonRouterOutlet>
        <Route exact path={match.url} component={UsersListPage} />
        <Route exact path={`${match.url}/users/:id`} component={UserDetailPage} />
        {/* <Route render={() => <Redirect to={match.url} />} /> */}
      </IonRouterOutlet>
    </IonPage>
  );
};

export default DashboardPage;
