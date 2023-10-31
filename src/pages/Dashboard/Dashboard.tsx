import { IonBadge, IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonFab, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonLabel, IonMenuButton, IonPage, IonRouterOutlet, IonRow, IonSearchbar, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from "@ionic/react"
import Slider from "../../components/slider/Slider";
import { ellipse, library, chevronDownOutline, location, playCircle, radio, search, fastFood, reader, cart, person, qrCode } from 'ionicons/icons';
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
    return (
        <IonPage>
            <IonToolbar >
                <div className="flex justify-between p-3">
                    {/* <IonIcon className="text-red-600 text-xl pl-2 mt-1" icon={location}></IonIcon> */}
                    <div>
                        <Link to="/location">
                            <span className="flex text-black">
                            <IonIcon className="text-black text-xl pl-2 mt-1" icon={location}></IonIcon>
                            Amravati
                                <IonIcon className="text-black mt-1 pl-1" icon={chevronDownOutline}></IonIcon>
                            </span>
                            <p className="text-xs text-gray-300 pl-5">Dastur Nagar Amravati</p>
                        </Link>

                    </div>

                    <div className="-mt-2">
                        <IonButtons slot="start">
                            <IonMenuButton className="text-red-600" />
                        </IonButtons>
                    </div>
                </div>
            </IonToolbar>

            <div className="p-2">
            <div className="flex justify-start border border-red-400 rounded-md p-3 mt-2 ">
                        <IonIcon className="text-red-600" icon={search}></IonIcon>
                        <span className="text-sm pl-2">search restaurants here</span>
                    </div>
                {/* <IonSearchbar className="p-1"
                 ></IonSearchbar> */}
            </div>

            <div className="flex justify-center">
                    <p className="pl-4 text-lg text-black font-semibold mt-3" >Good Food, Great Mood !</p>
                </div>


            <IonContent className="mt-2">
                <div className="p-2">
                <img className="h-34 rounded-md" src="assets/img4.png" alt="Image 1" />
                </div>
                <div className="flex justify-center pr-2">
                <IonIcon className="text-red-600 text-xs" icon={ellipse}></IonIcon>
                <IonIcon className="text-red-200 text-xs" icon={ellipse}></IonIcon>
                <IonIcon className="text-red-200 text-xs" icon={ellipse}></IonIcon>

                </div>


                <div className="chips_div animated fadeInDown" >
                <IonLabel className="chip border-b-2 border-white hover:border-red-600 " >Pizza </IonLabel>

                <IonLabel className="chip border-b-2 border-white hover:border-red-600" >Burger</IonLabel>

                <IonLabel className="chip border-b-2 border-white hover:border-red-600" >French Fries</IonLabel>

                {/* <IonLabel className="chip border-b-2 border-white hover:border-red-600" >A-Z</IonLabel>

                <IonLabel className="chip border-b-2 border-white hover:border-red-600" >Z-A</IonLabel> */}
            </div>

                {/* <Slider /> */}

               

                <div>
                    <div className="p-2">
                        {/* <Link to="/food"> */}
                        <Link to="/restroDetails">
                            <IonGrid>
                                <IonRow className="border border-gray-300 rounded-tl-md rounded-tr-md">
                                    <div>
                                        <IonIcon size="small" className=" divimg text-red-600 border border-red-600" icon={ellipse} />
                                        {/* <IonIcon size="small" className="divimg text-green-600 border border-green-600" icon={ellipse} /> */}
                                    </div>
                                    <img className="w-full h-40 rounded-tl-md rounded-tr-md" src="assets/imgbg1.jpeg" alt="" />
                                    <IonCol size="12" className='pl-2 pr-2 bg-gray-100'>
                                        <div className="flex justify-between">
                                            <p className="text-black text-lg font-semibold mt-2">Abdullah Hotel</p>
                                        </div>
                                        <p className="text-black text-sm "> Indian</p>
                                        <p className="text-gray-400 text-xs ">  Hotel Abdullah has its own legacy of Non-Veg Food and truly novel Biryani</p>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </Link>

                    </div>



                </div>

                <div className="flex justify-center">
                    <IonFab vertical="bottom" slot="fixed" color="dark" >
                        <IonButton fill="clear" color={'light'}
                            routerLink="/scanqr"
                            routerDirection="forward"
                            className="bg-black hover:bg-red-700 text-white py-2 px-4 rounded-full" >
                            <IonIcon icon={qrCode}></IonIcon> Scan QR For Dine In
                        </IonButton>
                    </IonFab>
                </div>

            </IonContent >

            {/* <Tab/> */}

            <IonFooter>
                <IonToolbar>
                    <div className="flex justify-between p-2">
                        <Link to="/dashboard">
                            <div className="text-center text-gray-600 hover:text-red-600" >
                                <IonIcon icon={fastFood}></IonIcon>
                                <IonTitle className="text-sm">Home</IonTitle>
                            </div>
                        </Link>

                        <Link to="/orderdetails">
                            <div className="text-center text-gray-600 hover:text-red-600">
                                <IonIcon icon={reader}></IonIcon>
                                <IonTitle className="text-sm">History</IonTitle>
                            </div></Link>

                        <Link to="/cart">
                            <div className="text-center text-gray-600 hover:text-red-600">
                                <IonIcon icon={cart}></IonIcon>
                                <IonTitle className="text-sm">Cart</IonTitle>
                            </div>
                        </Link>

                        <Link to="/profile">
                            <div className="text-center text-gray-600 hover:text-red-600">
                                <IonIcon icon={person}></IonIcon>
                                <IonTitle className="text-sm">Account</IonTitle>
                            </div>
                        </Link>
                    </div>
                </IonToolbar>
            </IonFooter>

        </IonPage >
    )
}

export default Dashboard;