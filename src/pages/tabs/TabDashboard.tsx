import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";

const TabDashboard = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ExploreContainer name="Dashboard page" />
        <IonButton expand="full" routerLink="/dashboard">
          Go Dashboard
        </IonButton>
        <IonButton expand="full" routerLink="/app/tab-dashboard/detail">
          Detail Page
        </IonButton>
        <IonButton expand="full" routerLink="/detailsonly">
          Go Details
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default TabDashboard;
