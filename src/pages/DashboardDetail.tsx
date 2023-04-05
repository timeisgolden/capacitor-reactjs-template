import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonButtons,
  IonBackButton,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";

const DashboardDetail = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonBackButton defaultHref="/app/tab-dashboard"></IonBackButton>
          </IonButtons>
          <IonTitle>Dashboard Detail</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent></IonContent>
    </IonPage>
  );
};

export default DashboardDetail;
