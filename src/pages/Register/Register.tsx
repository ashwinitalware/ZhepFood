import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonList, IonPage, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from "@ionic/react"
import "./Register.css";
import { Link } from "react-router-dom";
const Register: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={"light"}>
                    <IonButtons slot="start">
                        <IonBackButton></IonBackButton>
                    </IonButtons>
                    <IonTitle>Update Profile</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="bg-class">

                <div className="p-3">
{/* 
                    <div className="flex justify-center logo mt-10">
                        <img width={200} height={200} src="assets/register1.svg" />
                    </div> */}

                    <IonList lines="none">
                        <IonItem className="border border-gray-300 rounded-full mt-2">
                            <IonInput type="text" placeholder="Full Name"></IonInput>
                        </IonItem>

                        {/* <IonItem className="border border-gray-300 rounded-full  mt-2">
                            <IonInput type="date" placeholder="Date of birth"></IonInput>
                        </IonItem> */}

                        <IonItem className="border border-gray-300 rounded-full  mt-2">
                            <IonSelect label="Gender" placeholder="Select">
                                <IonSelectOption value="male">Male</IonSelectOption>
                                <IonSelectOption value="female">Female</IonSelectOption>
                                <IonSelectOption value="other">Other</IonSelectOption>
                            </IonSelect>
                        </IonItem>


                        {/* <IonItem className="border border-gray-300 rounded-full  mt-2">
                            <IonInput type="text" placeholder="Mobile Number"></IonInput>
                        </IonItem> */}

                        <IonItem className="border border-gray-300 rounded-full  mt-2">
                            <IonInput type="text" placeholder="Email"></IonInput>
                        </IonItem>

                        <IonItem className="border border-gray-300 rounded-full  mt-2">
                            <IonInput type="text" placeholder="Password"></IonInput>
                        </IonItem>


                    </IonList>

                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <IonButton className="btn_class " shape="round" color={"danger"} expand="block" routerLink="/location">
                                   Save
                                </IonButton>
                            </IonCol>
                        </IonRow>

                        {/* <div className="flex justify-center pr-3">
                        <Link to={'login'} className="text-sm"> <p className="text-sm text-black">Already have an account? <span className="text-red-400">Login</span></p></Link>
                       </div> */}

                    </IonGrid>

                </div>
            </IonContent>
        </IonPage>
    )
}

export default Register;