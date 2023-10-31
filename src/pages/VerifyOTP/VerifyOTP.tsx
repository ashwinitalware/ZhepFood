import { IonButton, IonCol, IonContent, IonGrid, IonInput, IonItem, IonList, IonPage, IonRow } from "@ionic/react"
import "./VerifyOTP.css";


const VerifyOTP: React.FC = () => {
    return (
        <IonPage>
            <IonContent className="bg-class">

                <div className="p-3">
                    <div className="flex justify-center logo mt-10">
                        <img width={120} height={120} src="assets/icon1.png" />
                    </div>

                    <div className="flex justify-center mt-3">
                        <p className="text-lg text-black">Enter 4 Digit Number</p>
                    </div>

                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <IonList>
                                    <IonItem className="border border-gray-300 rounded-full" lines="none" >
                                        <IonInput placeholder="Enter 4 digit otp here"></IonInput>
                                    </IonItem>
                                </IonList>
                            </IonCol>
                        </IonRow>


                        <IonRow>
                            <IonCol>
                                <IonButton className="btn_class " shape="round" color={"danger"} expand="block" routerLink="/register">
                                    Verify OTP
                                </IonButton>
                            </IonCol>
                        </IonRow>

                    </IonGrid>

                </div>
            </IonContent>
        </IonPage>
    )
}

export default VerifyOTP