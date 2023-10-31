import { IonHeader, IonToolbar, IonTitle, IonPage, IonContent, IonFooter, IonList, IonItem, IonIcon, IonButtons, IonBackButton } from "@ionic/react"
import "./Profile.css";
import { call, helpCircle, home, key, logOut, reader, star, location, chevronForwardOutline } from 'ionicons/icons';
import { Link } from "react-router-dom";

const Profile: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={"danger"}>
                    <IonButtons slot="start">
                        <IonBackButton></IonBackButton>
                    </IonButtons>
                    <IonTitle>Profile</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonList className="mt-2">

                    <Link to="/order">
                        <IonItem className="p-2">
                            <IonIcon size="small" className="text-gray-400" icon={reader} />
                            <IonTitle className="text-sm">Manage Orders</IonTitle>
                            <IonIcon size="small" className="text-gray-400" icon={chevronForwardOutline} />
                        </IonItem></Link>

                    <Link to="/address">
                        <IonItem className="p-2">
                            <IonIcon size="small" className="text-gray-400" icon={location} />
                            <IonTitle className="text-sm">Address</IonTitle>
                            <IonIcon size="small" className="text-gray-400" icon={chevronForwardOutline} />
                        </IonItem>
                    </Link>
                    
                    <Link to="/password">
                        <IonItem className="p-2">
                            <IonIcon size="small" className="text-gray-400" icon={key} />
                            <IonTitle className="text-sm">Change Password</IonTitle>
                            <IonIcon size="small" className="text-gray-400" icon={chevronForwardOutline} />
                        </IonItem></Link>

                    <IonItem className="p-2">
                        <IonIcon size="small" className="text-gray-400" icon={call} />
                        <IonTitle className="text-sm">Contact Us</IonTitle>
                        <IonIcon size="small" className="text-gray-400" icon={chevronForwardOutline} />
                    </IonItem>

                    <IonItem className="p-2">
                        <IonIcon size="small" className="text-gray-400" icon={helpCircle} />
                        <IonTitle className="text-sm">FAQs</IonTitle>
                        <IonIcon size="small" className="text-gray-400" icon={chevronForwardOutline} />
                    </IonItem>

                    <IonItem className="p-2">
                        <IonIcon size="small" className="text-gray-400" icon={star} />
                        <IonTitle className="text-sm">Rate Us</IonTitle>
                        <IonIcon size="small" className="text-gray-400" icon={chevronForwardOutline} />
                    </IonItem>

                    <Link to="/NewLogin">
                        <IonItem className="p-2">
                            <IonIcon size="small" className="text-gray-400" icon={logOut} />
                            <IonTitle className="text-sm">Log Out</IonTitle>
                            <IonIcon size="small" className="text-gray-400" icon={chevronForwardOutline} />
                        </IonItem>
                    </Link>
                </IonList>
            </IonContent>


        </IonPage>
    )


};

export default Profile;
