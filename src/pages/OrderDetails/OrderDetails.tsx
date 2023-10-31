import { IonBackButton, IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonLabel, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import { cart, fastFood, person, reader } from "ionicons/icons";
import { Link } from "react-router-dom";
import "./OrderDetails.css";
const OrderDetails: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={"danger"}>
                    <IonButtons slot="start">
                        <IonBackButton></IonBackButton>
                    </IonButtons>
                    <IonTitle>Order Deatils</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <div className="p-4">
                    <div className="border border-gray-300 rounded-md p-2 mt-2">
                        <p className="text-black text-lg font-semibold mt-2">Abdullah Hotel</p>
                        <p className="text-gray-400 text-sm ">  Near Masjid,itwara bazar, Gawali Pura, Amravati, Maharashtra</p>

                    </div>


                    <div className="flex justify-between  mt-2">
                        <p className="text-black text-lg font-semibold mt-2 border-b-2 border-red-600">Your Order</p>
                        <p className="text-black font-bold text-lg mt-2"> #53</p>
                    </div>

                    <p className="text-gray-400 text-xs mt-4"> ITEMS</p>

                    <div className="border border-gray-200 rounded-md p-3">
                        {/* Items Div */}
                        <div className="border-gray-300 border-dashed border-b">
                            <p className="text-black text-lg font-semibold ">Chicken Biryani X 1</p>
                            <div className="flex justify-between">
                                <p>- Half</p>
                                <p>120 /-</p>
                            </div>
                        </div>

                        {/* Items Div */}
                        <div className="border-gray-300 border-dashed border-b mt-1 mb-1">
                            <p className="text-black text-lg font-semibold mt-2">Chicken Biryani X 1</p>
                            <div className="flex justify-between">
                                <p>- Full</p>
                                <p>200 /-</p>
                            </div>
                        </div>

                        {/* Items Div */}
                        <div className=" mt-1">
                            <div className="flex justify-between">
                                <p className="text-black text-lg font-semibold mt-2">Mutton Biryani X 1</p>
                                <p className="mt-2">300 /-</p>
                            </div>
                        </div>

                    </div>
                    {/* Items Div */}
                    <div className="p-3">
                        <div className=" mt-2">
                            <div className="flex justify-between">
                                <p className="text-black text-lg font-semibold ">Item Total</p>
                                <p className="text-black text-lg font-semibold">620 /-</p>
                            </div>

                            <div className="flex justify-between mt-1">
                                <p className="text-gray-400 text-sm "> CGST (0 %)</p>
                                <p className="text-gray-400 text-sm "> 0</p>

                            </div>
                            <div className="flex justify-between mt-1">
                                <p className="text-gray-400 text-sm "> SGST (0 %)</p>
                                <p className="text-gray-400 text-sm "> 0</p></div>

                            <div className="flex justify-between mt-1">
                                <p className="text-gray-400 text-sm "> IGST </p>
                                <p className="text-gray-400 text-sm "> 0</p>

                            </div>

                            <div className="flex justify-between mt-1">
                                <p className="text-gray-400 text-sm "> Delivery Charge </p>
                                <p className="text-gray-400 text-sm "> 0.00</p>

                            </div>

                            <div className="flex justify-between mt-1  mb-1 border-gray-300 border-dashed border-b">
                                <p className="text-gray-400 text-sm mb-1"> Service Charge </p>
                                <p className="text-gray-400 text-sm mb-1"> 0.00</p>

                            </div>

                            <div className="flex justify-between mt-1 mb-2">
                                <p className="text-black text-md mt-2"> Grand Total  </p>
                                <p className="text-black text-md mt-2"> 750.20</p>
                            </div>


                        </div>

                    </div>
                   

                   <div className="p-3 -mt-2">
                   <div className="flex justify-between">
                        <p className="text-black text-lg font-semibold mt-2 border-b-2 border-red-600"> Order Details</p>
                    </div>

                    <div className=" mt-2 flex justify-between">
                        <p className="text-gray-400 text-sm "> Order Notes  </p>
                        <p className="text-black text-md "> No Notes Provided</p>
                    </div>

                    <div className=" mt-2  flex justify-between">
                        <p className="text-gray-400 text-sm "> Payment  </p>
                        <p className="text-black text-md "> Paid : COD</p>
                    </div>

                    <div className=" mt-2  flex justify-between">
                        <p className="text-gray-400 text-sm"> Date  </p>
                        <p className="text-black text-md "> Fri, Oct 11, 2023 12:46 PM</p>
                    </div>

                    <div className=" mt-2  flex justify-between">
                        <p className="text-gray-400 text-sm"> Deliver to  </p>
                        <p className="text-black text-md "> Dastur Nagar Amravati</p>
                    </div>
                   </div>

                </div>

                {/* <div className="line_div"></div>
    <IonLabel className="red_lbl">
        Call Restaurant YourRestaurantName
      </IonLabel>

      <IonLabel className="red_lbl">
        Call Driver YourDriverName
      </IonLabel>

      <IonLabel className="red_lbl">
        Call Waiter YourWaiterName
      </IonLabel> */}

                {/* <div className="mt-4">
                        <IonButton shape="round" expand="block">
                                    <p className="p-2" >Cancel Order</p>
                                </IonButton>
                        </div> */}

            </IonContent>

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
        </IonPage>
    );
};

export default OrderDetails;