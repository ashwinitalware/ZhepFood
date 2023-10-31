import { IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonInput, IonPage, IonRow, IonTextarea, IonTitle, IonToolbar } from "@ionic/react"
import { Link } from "react-router-dom";

const Cart: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={"light"}>
                    <IonTitle>
                        <p className="text-xs text-black">ordering from</p>
                        <p className="text-md font-semibold text-black">Abdullah Hotel</p>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonGrid className="p-3">
                    <IonRow className='border border-gray-200 rounded-md p-2'>
                        <IonCol size="1">
                            1.
                        </IonCol>

                        <IonCol size="7" className='pr-3'>
                            <div className='flex justify-start'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='border border-green-600 mt-1' width="12" height="12"><path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z" fill="rgba(12,104,0,1)"></path></svg>
                                <p className="text-sm text-black font-semibold pl-2">
                                   Veg Biryani
                                </p>
                            </div>

                                <div className='flex-1'>
                                    <p className='text-black text-sm'>₹ 200</p>
                                    <p className='text-green-600 text-xs flex justify-start'>
                                         Veg</p>
                                </div>
                                </IonCol>
                                <IonCol size="4" className='pr-3'>
                                <div className='flex-1 mt-2'>
                                    <div className='flex justify-between rounded-md border border-red-400 bg-red-50 pl-2 pr-2 pt-1 pb-1'>
                                        <div className='text-red-500'>-</div>

                                        <div className='text-red-500'>1</div>

                                        <div className='text-red-500'>+</div>
                                    </div>
                                </div>
                            
                        </IonCol>
                    </IonRow>

                    <IonRow className='border border-gray-200 bg-gray-200 rounded-md rounded-md p-2 mt-3'>
                        <IonCol size="12">
                            <div className=" text-black">
                                <IonTextarea placeholder="Add Special cooking Instructions"></IonTextarea>
                            </div>
                        </IonCol>
                    </IonRow>

                    <IonRow className='border border-gray-50 bg-gray-50 rounded-md rounded-md p-2 mt-3'>
                        <IonCol size="10">
                            <div className=" text-black">
                               <IonInput type="text" placeholder="Enter Coupon Code"/>
                            </div>
                        </IonCol>

                        <IonCol size="2">
                            <div className="text-red-600 font-bold mt-3">
                                <p>Apply </p>
                            </div>
                        </IonCol>
                    </IonRow>

                    <IonRow className='border border-gray-50 bg-gray-50 rounded-md rounded-md p-2 mt-3'>
                        <IonCol size="12">
                            <div className="flex justify-between text-black border-dashed border-b border-gray-300">
                               <p className="text-md text-black">Item Total</p>
                               <p className="text-md font-bold">600.00</p>
                            </div>
                        </IonCol>

                        <IonCol size="12">
                            <div className="flex justify-between text-black border-dashed border-b border-gray-300">
                               <p className="text-md text-black">CGST (0.0 %)</p>
                               <p className="text-md font-bold">0</p>
                            </div>
                        </IonCol>

                        <IonCol size="12">
                            <div className="flex justify-between text-black border-dashed border-b border-gray-300">
                               <p className="text-md text-black">SGST (0.0 %)</p>
                               <p className="text-md font-bold">0</p>
                            </div>
                        </IonCol>

                        <IonCol size="12">
                            <div className="flex justify-between text-black border-dashed border-b border-gray-300">
                               <p className="text-md text-black">IGST </p>
                               <p className="text-md font-bold">+ 0</p>
                            </div>
                        </IonCol>

                        <IonCol size="12">
                            <div className="flex justify-between text-black border-dashed border-b border-gray-300">
                               <p className="text-md text-black">Other Taxes & Charges (%) </p>
                               <p className="text-md font-bold">+ 126.00</p>
                            </div>
                        </IonCol>

                        <IonCol size="12">
                            <div className="text-red-600 text-md">
                                <p>Order once placed cannot be cancelled and are non-refundable</p>
                            </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>

            <Link to="/order">
            <IonFooter>
                <IonToolbar color={'danger'} >
                 
                   <div className="p-2 flex justify-between ">
                            <div>
                                <p>2 ITEM</p>
                                <p>726.00 total price</p>
                            </div>
                            <div className="flex items-center">
                                CHECKOUT
                            </div>
                    </div>
                </IonToolbar>
            </IonFooter></Link>
        </IonPage>
    )
}

export default Cart;