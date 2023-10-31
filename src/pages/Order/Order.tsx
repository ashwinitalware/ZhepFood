import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import { Link } from "react-router-dom";

const Order: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={"danger"}>
                    <IonButtons slot="start">
                        <IonBackButton></IonBackButton>
                    </IonButtons>
                    <IonTitle>Order </IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <div className="p-4">
                    <div className="border border-gray-300 rounded-md p-2">
                        <div className="p-2">
                            <p className="text-black text-lg font-semibold">Abdullah Hotel</p>
                            <p className="text-gray-400 text-xs mb-1 mt-1">  Hotel Abdullah has its own legacy of Non-Veg Food and truly novel Biryani</p>
                        </div>

                        <div className="border-b border-gray-300"></div>

                        <div className="p-2">
                            <p className="text-gray-400 text-xs mt-2"> ITEMS</p>

                            {/* Items Div */}
                            <div className="border-gray-300 border-dashed border-b">
                                <p className="text-black text-lg font-semibold mt-2">Chicken Biryani X 1</p>
                                <div className="flex justify-between">
                                    <p>- Half</p>
                                    <p>120 /-</p>
                                </div>
                            </div>

                            {/* Items Div */}
                            <div className="border-gray-300 border-dashed border-b mt-1">
                                <p className="text-black text-lg font-semibold mt-2">Chicken Biryani X 1</p>
                                <div className="flex justify-between">
                                    <p>- Full</p>
                                    <p>200 /-</p>
                                </div>
                            </div>

                            {/* Items Div */}
                            <div className="border-gray-300 border-dashed border-b mt-1">
                                <div className="flex justify-between">
                                    <p className="text-black text-lg font-semibold mt-2">Mutton Biryani X 1</p>
                                    <p>300 /-</p>
                                </div>
                            </div>

                            <div className="flex justify-between">
                                <p className="text-gray-400 text-md mt-2"> TOTAL AMOUNT</p>
                                <p className="text-black font-semibold text-md mt-2"> 750.20</p>
                            </div>

                            <p className="text-gray-400 text-xs mt-2"> ORDER NO</p>
                            <p className="text-black text-lg font-semibold ">#565</p>

                            <p className="text-gray-400 text-xs mt-2"> ORDERED ON</p>
                            <p className="text-black text-lg font-semibold ">Fri, Oct 11, 2023 12:46 PM</p>

                        </div>
                        <Link to="/orderdetails">
                            <div className=" text-white rounded-md " style={{ background: "#FFB200" }}>
                                <div className="flex justify-between p-3">
                                    <p>Your order is Pending</p>
                                    <p className="border border-white rounded-full text-xs p-1">View Order</p>
                                </div>
                            </div></Link>


                    </div>



                    <div className="border border-gray-300 rounded-md p-2 mt-3">
                        <div className="p-2">
                            <p className="text-black text-lg font-semibold">Eagle Hotel</p>
                            <p className="text-gray-400 text-xs mb-1 mt-1">  Hotel Eagle has its own legacy of Non-Veg Food and truly novel Biryani</p>
                        </div>

                        <div className="border-b border-gray-300"></div>

                        <div className="p-2">
                            <p className="text-gray-400 text-xs mt-2"> ITEMS</p>

                            {/* Items Div */}
                            <div className="border-gray-300 border-dashed border-b">
                                <p className="text-black text-lg font-semibold mt-2">Chicken Biryani X 1</p>
                                <div className="flex justify-between">
                                    <p>- Half</p>
                                    <p>120 /-</p>
                                </div>
                            </div>

                            {/* Items Div */}
                            <div className="border-gray-300 border-dashed border-b mt-1">
                                <div className="flex justify-between">
                                    <p className="text-black text-lg font-semibold mt-2">Mutton Biryani X 1</p>
                                    <p>300 /-</p>
                                </div>
                            </div>

                            <div className="flex justify-between">
                                <p className="text-gray-400 text-md mt-2"> TOTAL AMOUNT</p>
                                <p className="text-black font-semibold text-md mt-2"> 750.20</p>
                            </div>

                            <p className="text-gray-400 text-xs mt-2"> ORDER NO</p>
                            <p className="text-black text-lg font-semibold ">#565</p>

                            <p className="text-gray-400 text-xs mt-2"> ORDERED ON</p>
                            <p className="text-black text-lg font-semibold ">Fri, Oct 11, 2023 12:46 PM</p>

                        </div>
                        <Link to="/orderdetails">
                            <div className=" text-white rounded-md " style={{ background: "#008000" }}>
                                <div className="flex justify-between p-3">
                                    <p>Your order is Completed</p>
                                    <p className="border border-white rounded-full text-xs p-1">View Order</p>
                                </div>
                            </div></Link>


                    </div>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default Order;