import { IonButton, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonInput, IonItem, IonList, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
// import "./Login.css";
import { Link } from "react-router-dom";

const NewLogin: React.FC = () => {
    return (
        <IonPage>
            <IonContent className="bg-class">
                <div className="p-4">

                    <div className="flex justify-center logo mt-10">
                        <img width={120} height={120} src="assets/icon1.png" />
                    </div>

                    <div className="flex justify-center mt-3">
                        <p className="text-lg text-black">Enter your login details</p>
                    </div>


                    <IonList>
                        <IonItem className="border border-gray-300 rounded-full" lines="none" >
                            <IonInput placeholder="Mobile Number"></IonInput>
                        </IonItem>

                        <IonItem className="border border-gray-300 rounded-full mt-2" lines="none"  >
                            <IonInput placeholder="Password"></IonInput>
                        </IonItem>
                    </IonList>

                    {/* <div className="flex justify-end pr-3">
                        <Link to={'forgot'} className="text-sm text-red-600">Forgot Password ?</Link>
                    </div> */}


                    <IonRow className="mt-2">
                        <IonCol>
                            <IonButton className="btn_class " shape="round" color={"danger"} expand="block" routerLink="/location">
                                Log In
                            </IonButton>
                        </IonCol>
                    </IonRow>

                    {/* <div className="flex justify-center pr-3">
                        <Link to={'register'} className="text-sm">
                            <p className="text-sm text-black">Don't have an account?
                                <span className="text-red-400">Sign up</span></p>
                        </Link>
                    </div> */}

                </div>
            </IonContent>

        </IonPage>
    )
}

export default NewLogin;