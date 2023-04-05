import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const UsersListPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Users List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>Users List Page</IonContent>
    </IonPage>
  );
};

export default UsersListPage;
