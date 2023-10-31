import { IonButton, IonCol, IonContent, IonGrid, IonInput, IonItem, IonList, IonPage, IonRow } from "@ionic/react";
import "./Password.css";

const Password: React.FC = () => {
    return (
        <IonPage>
            <IonContent className="bg-class" >
                <div className="p-3">

                    <div className="flex justify-center logo mt-10">
                        <img width={120} height={120} src="assets/icon1.png" />
                    </div>

                    <div className="flex justify-center mt-3">
                        <p className="text-lg text-black">Reset Password</p>
                    </div>

                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <IonList>
                                    <IonItem className="border border-gray-300 rounded-full" lines="none" >
                                        <IonInput type="number" placeholder="New Password"></IonInput>
                                    </IonItem>

                                    <IonItem className="border border-gray-300 rounded-full mt-3" lines="none" >
                                        <IonInput type="number" placeholder="Confirm Password"></IonInput>
                                    </IonItem>
                                </IonList>
                            </IonCol>
                        </IonRow>


                        <IonRow>
                            <IonCol>
                                <IonButton className="btn_class " shape="round" color={"danger"} expand="block" routerLink="/login">
                                Reset Password
                                </IonButton>
                            </IonCol>
                        </IonRow>

                    </IonGrid>

                </div>
            </IonContent>
        </IonPage>
    )
}
export default Password; 