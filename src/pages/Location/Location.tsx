import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonItem, IonList, IonPage, IonRadio, IonRadioGroup, IonRow, IonTitle, IonToolbar } from "@ionic/react";

const Location: React.FC = () => {
    return (

        <IonPage>
            <IonHeader>
                <IonToolbar color={"danger"}>
                    <IonButtons slot="start">
                        <IonBackButton></IonBackButton>
                    </IonButtons>
                    <IonTitle>Select City</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <div className="p-4">
                    <p>We are available in following city</p>
                </div>

                <IonList lines="none">
                    <IonRadioGroup value="start">

                        <IonItem >
                            <IonRadio value="space-between" justify="space-between">
                                Amravati
                            </IonRadio>
                        </IonItem>
                    </IonRadioGroup>


                </IonList>

              
            </IonContent>

            <IonFooter>
                <IonToolbar>
                    <IonCol>
                        <IonButton className="btn_class " shape="round" color={"danger"} expand="block" routerLink="/dashboard">
                            Select
                        </IonButton>
                    </IonCol>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    )
}

export default Location;