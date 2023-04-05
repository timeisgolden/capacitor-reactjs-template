import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  useIonViewWillEnter,
  useIonViewWillLeave,
  useIonViewDidEnter,
  useIonViewDidLeave,
} from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";

const TabAccount = () => {
  useIonViewDidEnter(() => {
    console.log("ionViewDidEnter event fired");
  });

  useIonViewDidLeave(() => {
    console.log("ionViewDidLeave event fired");
  });

  useIonViewWillEnter(() => {
    console.log("ionViewWillEnter event fired");
  });

  useIonViewWillLeave(() => {
    console.log("ionViewWillLeave event fired");
  });
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <ExploreContainer name="Account page" />
      </IonContent>
    </IonPage>
  );
};

export default TabAccount;
