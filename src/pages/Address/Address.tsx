import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonPage, IonRadio, IonTitle, IonToolbar } from "@ionic/react";
import { briefcase, home, navigate } from "ionicons/icons";
import { Link } from "react-router-dom";

const Address: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'danger'}>
                <IonButtons slot="start">
                        <IonBackButton></IonBackButton>
                    </IonButtons>
                    <IonTitle>
                        Add New Address
                    </IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <div className="p-3">
                    <div className="p-4 border border-gray-400 rounded-md">
                    <div className="mt-2">
                        <p className="text-gray-400">Location</p>
                        <p className="text-black text-lg text-semibold">Rathi Nagar, Amravati</p>
                    </div>

                    <div className="mt-2">
                        <p className="text-gray-400">House/Flat No</p>
                        <p className="text-black text-lg text-semibold">Radha Nagar</p>
                    </div>

                    <div className="mt-2">
                        <p className="text-gray-400">Pincode</p>
                        <p className="text-black text-lg text-semibold">444904</p>
                    </div>
                    </div>

                    <p className="text-lg text-black mt-3 font-bold">Save As</p>

                    <div className="p-1">
                            <IonItem className="p-2">
                                <IonIcon size="small" className="text-gray-400" icon={home} />
                                <IonTitle className="text-sm">Home</IonTitle>
                                <IonRadio slot="end"></IonRadio>
                            </IonItem>
                            
                            <IonItem className="p-2">
                                <IonIcon size="small" className="text-gray-400" icon={briefcase} />
                                <IonTitle className="text-sm">Office</IonTitle>
                                <IonRadio slot="end"></IonRadio>
                            </IonItem>
                            
                            <IonItem className="p-2">
                                <IonIcon size="small" className="text-gray-400" icon={navigate} />
                                <IonTitle className="text-sm">Other</IonTitle>
                                <IonRadio slot="end"></IonRadio>
                            </IonItem>


                            <IonButton shape="round" expand="block">
                                Update
                            </IonButton>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Address;