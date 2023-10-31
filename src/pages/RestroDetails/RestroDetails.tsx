import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonFab, IonFabButton, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonLabel, IonList, IonModal, IonPage, IonPopover, IonRadio, IonRow, IonSearchbar, IonSegment, IonSegmentButton, IonTitle, IonToggle, IonToolbar } from "@ionic/react"
import { list, restaurantOutline, search } from "ionicons/icons";
import { useRef, useState } from "react";
import "./RestroDetails.css";
import { Link } from "react-router-dom";

const RestroDetails: React.FC = () => {
    const [selectedSegment, setSelectedSegment] = useState('segment1');
    const handleSegmentChange = (event: CustomEvent) => {
        setSelectedSegment(event.detail.value);
    };

    const modal = useRef<HTMLIonModalElement>(null);

    // const [showPopover, setShowPopover] = useState(false);
    // const openPopover = () => {
    //   setShowPopover(true);
    // };
    // const closePopover = () => {
    //   setShowPopover(false);
    // };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'light'}>
                    <IonButtons slot="start">
                        <IonBackButton></IonBackButton>
                    </IonButtons>
                    <IonTitle>Order </IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <div className="p-3">
                    <div className="border border-gray-400 rounded-md p-2">
                        <p className="text-black text-lg font-semibold mt-2">Abdullah Hotel</p>
                        <p className="text-gray-400 text-sm ">  Near Masjid,itwara bazar, Gawali Pura, Amravati, Maharashtra</p>
                    </div>

                    <div className="flex justify-center mt-4">
                        <IonIcon className="text-gray-400" icon={restaurantOutline}></IonIcon>
                        <p className="text-red-600 font-semibold text-sm">MENU</p>
                        <IonIcon className="text-gray-400" icon={restaurantOutline}></IonIcon>
                    </div>

                    <div className="flex justify-start border border-gray-400 rounded-md p-2 mt-2 mb-2">
                        <IonIcon className="text-red-600" icon={search}></IonIcon>
                        <span className="text-sm pl-2">Search</span>
                    </div>

                    <div className="flex justify-between p-1 mt-2">
                        <p className="text-black">Veg Only</p>
                        <IonToggle aria-label="Primary toggle" color="dark" checked={true}></IonToggle>
                    </div>

                    <IonSegment value={selectedSegment} onIonChange={handleSegmentChange}>
                        <IonSegmentButton value="segment1">
                            <IonLabel className='text-xs text-black'>Biryani </IonLabel>
                        </IonSegmentButton>
                        <IonSegmentButton value="segment2">
                            <IonLabel className='text-xs text-black'>Indian</IonLabel>
                        </IonSegmentButton>
                    </IonSegment>
                    {selectedSegment === 'segment1' && (
                        <div className='p-2'>
                            <IonGrid>
                                <IonRow className='border border-gray-200 rounded-md p-2'>
                                    <IonCol size="4">
                                        <img src="assets/p1.jpg" alt="" />
                                    </IonCol>

                                    <IonCol size="8" className='pr-3'>
                                        <div className='flex justify-start'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='border border-green-600 mt-1' width="12" height="12"><path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z" fill="rgba(12,104,0,1)"></path></svg>
                                            <p className="text-sm text-black font-semibold pl-2">
                                                Chicken Biryani
                                            </p>

                                        </div>
                                        <p className='text-gray-400 text-xs'>Lorem ipsum dolor sit amet, consecte .</p>

                                        <div className='flex'>
                                            <div className='flex-1 mt-1'>
                                                <p className='text-black text-sm'>₹ 200</p>
                                                <p className='text-gray-400 text-xs flex justify-start'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" fill="rgba(255,250,22,1)"></path></svg>
                                                    &nbsp; 5 ratings</p>
                                            </div>



                                            <div className='flex-1 mt-2'>
                                                <div className='flex justify-between rounded-md border border-red-400 bg-red-50 pl-2 pr-2 pt-1 pb-1'>
                                                    <div className='text-red-500'>-</div>

                                                    <div className='text-red-500'>1</div>

                                                    <div className='text-red-500'>+</div>
                                                </div>
                                            </div>
                                        </div>
                                    </IonCol>
                                </IonRow>

                                <IonRow className='border border-gray-200 rounded-md p-2 mt-2'>
                                    <IonCol size="4">
                                        <img src="assets/p2.jpg" alt="" />
                                    </IonCol>

                                    <IonCol size="8" className='pr-3'>
                                        <div className='flex justify-start'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='border border-green-600 mt-1' width="12" height="12"><path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z" fill="rgba(12,104,0,1)"></path></svg>
                                            <p className="text-sm text-black font-semibold pl-2">
                                                Cheese Veg Pizza
                                            </p>
                                        </div>
                                        <p className='text-gray-400 text-xs'>Lorem ipsum dolor sit amet, consecte.</p>

                                        <div className='flex'>
                                            <div className='flex-1 mt-1'>
                                                <p className='text-black text-sm'>₹ 200</p>
                                                <p className='text-gray-400 text-xs flex justify-start'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" fill="rgba(255,250,22,1)"></path></svg>
                                                    &nbsp; 5 ratings</p>
                                            </div>

                                            <div className='flex-1 mt-2'>
                                                <div className='flex justify-between rounded-md border border-red-400 bg-red-50 pl-2 pr-2 pt-1 pb-1'>
                                                    <div className='text-red-500'>-</div>

                                                    <div className='text-red-500'>1</div>

                                                    <div className='text-red-500'>+</div>
                                                </div>
                                            </div>
                                        </div>
                                    </IonCol>
                                </IonRow>

                                <IonRow className='border border-gray-200 rounded-md p-2 mt-2'>
                                    <IonCol size="4">
                                        <img src="assets/p3.jpg" alt="" />
                                    </IonCol>

                                    <IonCol size="8" className='pr-3'>
                                        <div className='flex justify-start'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='border border-green-600 mt-1' width="12" height="12"><path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z" fill="rgba(12,104,0,1)"></path></svg>
                                            <p className="text-sm text-black font-semibold pl-2">
                                                Cheese Veg Pizza
                                            </p>
                                        </div>
                                        <p className='text-gray-400 text-xs'>Lorem ipsum dolor sit amet, consecte.</p>

                                        <div className='flex'>
                                            <div className='flex-1 mt-1'>
                                                <p className='text-black text-sm'>₹ 200</p>
                                                <p className='text-gray-400 text-xs flex justify-start'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" fill="rgba(255,250,22,1)"></path></svg>
                                                    &nbsp; 5 ratings</p>
                                            </div>

                                            <div className='flex-1 mt-2'>
                                                <div className='flex justify-between rounded-md border border-red-400 bg-red-50 pl-2 pr-2 pt-1 pb-1'>
                                                    <div className='text-red-500'>-</div>

                                                    <div className='text-red-500'>1</div>

                                                    <div className='text-red-500'>+</div>
                                                </div>
                                            </div>
                                        </div>
                                    </IonCol>
                                </IonRow>

                                <IonRow className='border border-gray-200 rounded-md p-2 mt-2'>
                                    <IonCol size="4">
                                        <img src="assets/p4.jpg" alt="" />
                                    </IonCol>

                                    <IonCol size="8" className='pr-3'>
                                        <div className='flex justify-start'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='border border-green-600 mt-1' width="12" height="12"><path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z" fill="rgba(12,104,0,1)"></path></svg>
                                            <p className="text-sm text-black font-semibold pl-2">
                                                Cheese Veg Pizza
                                            </p>
                                        </div>
                                        <p className='text-gray-400 text-xs'>Lorem ipsum dolor sit amet, consecte tur adipisicing elit.</p>

                                        <div className='flex'>
                                            <div className='flex-1 mt-1'>
                                                <p className='text-black text-sm'>₹ 200</p>
                                                <p className='text-gray-400 text-xs flex justify-start'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" fill="rgba(255,250,22,1)"></path></svg>
                                                    &nbsp; 5 ratings</p>
                                            </div>

                                            <div className='flex-1 mt-2'>
                                                <div className='flex justify-between rounded-md border border-red-400 bg-red-50 pl-2 pr-2 pt-1 pb-1'>
                                                    <div className='text-red-500'>-</div>

                                                    <div className='text-red-500'>1</div>

                                                    <div className='text-red-500'>+</div>
                                                </div>
                                            </div>
                                        </div>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </div>
                    )}
                    {selectedSegment === 'segment2' && (
                        <div>
                            <IonGrid>
                                <IonRow className='border border-gray-200 rounded-md p-2'>
                                    <IonCol size="4">
                                        <img src="assets/b1.jpg" alt="" />
                                    </IonCol>

                                    <IonCol size="8" className='pr-3'>
                                        <div className='flex justify-start'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='border border-green-600 mt-1' width="12" height="12"><path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z" fill="rgba(12,104,0,1)"></path></svg>
                                            <p className="text-sm text-black font-semibold pl-2">
                                                Sindhi  Biryani
                                            </p>
                                        </div>
                                        <p className='text-gray-400 text-xs'>Lorem ipsum dolor sit amet, consecte.</p>

                                        <div className='flex'>
                                            <div className='flex-1 mt-1'>
                                                <p className='text-black text-sm'>₹ 200</p>
                                                <p className='text-gray-400 text-xs flex justify-start'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" fill="rgba(255,250,22,1)"></path></svg>
                                                    &nbsp; 5 ratings</p>
                                            </div>

                                            <div className='flex-1 mt-2'>
                                                <div className='flex justify-between rounded-md border border-red-400 bg-red-50 pl-2 pr-2 pt-1 pb-1'>
                                                    <div className='text-red-500'>-</div>

                                                    <div className='text-red-500'>1</div>

                                                    <div className='text-red-500'>+</div>
                                                </div>
                                            </div>
                                        </div>
                                    </IonCol>
                                </IonRow>

                                <IonRow className='border border-gray-200 rounded-md p-2 mt-2'>
                                    <IonCol size="4">
                                        <img src="assets/b2.jpg" alt="" />
                                    </IonCol>

                                    <IonCol size="8" className='pr-3'>
                                        <div className='flex justify-start'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='border border-green-600 mt-1' width="12" height="12"><path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z" fill="rgba(12,104,0,1)"></path></svg>
                                            <p className="text-sm text-black font-semibold pl-2">
                                                Veg Biryani
                                            </p>
                                        </div>
                                        <p className='text-gray-400 text-xs'>Lorem ipsum dolor sit amet, consecte tur adipisicing elit.</p>

                                        <div className='flex'>
                                            <div className='flex-1'>
                                                <p className='text-black text-sm mt-1'>₹ 200</p>
                                                <p className='text-gray-400 text-xs flex justify-start'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" fill="rgba(255,250,22,1)"></path></svg>
                                                    &nbsp; 5 ratings</p>
                                            </div>

                                            <div className='flex-1 mt-2'>
                                                <div className='flex justify-between rounded-md border border-red-400 bg-red-50 pl-2 pr-2 pt-1 pb-1'>
                                                    <div className='text-red-500'>-</div>

                                                    <div className='text-red-500'>1</div>

                                                    <div className='text-red-500'>+</div>
                                                </div>
                                            </div>
                                        </div>
                                    </IonCol>
                                </IonRow>


                            </IonGrid>
                        </div>
                    )}


                    {/* onClick={openPopover} */}
                    <IonFab vertical="bottom" horizontal="end" slot="fixed" id="open-modal">
                        <IonFabButton color="primary" mode="ios" >
                            <IonIcon icon={list} color="light" />
                            <IonLabel color="light">Menu</IonLabel>
                        </IonFabButton>
                    </IonFab>

                    <IonModal ref={modal} trigger="open-modal" initialBreakpoint={0.25} breakpoints={[0, 0.25, 0.5, 0.75]}>
                        <IonContent className="ion-padding">
                            <IonHeader>
                                <IonToolbar>
                                    <IonTitle>
                                        Chicken Biryani
                                    </IonTitle>
                                </IonToolbar>
                            </IonHeader>

                            {/* <IonSearchbar onClick={() => modal.current?.setCurrentBreakpoint(0.75)} placeholder="Search"></IonSearchbar> */}

                            <IonList>
                                <IonItem>
                                    <IonRadio value="full" labelPlacement="stacked" alignment="start">
                                    </IonRadio>
                                    <IonLabel className="pl-2">
                                        <h2>Full</h2>
                                    </IonLabel>
                                    <p>200</p>
                                </IonItem>

                                <IonItem>
                                    <IonRadio value="half" labelPlacement="stacked" alignment="start">
                                    </IonRadio>
                                    <IonLabel className="pl-2">
                                        <h2>Half</h2>
                                    </IonLabel>
                                    <p>200</p>
                                </IonItem>

                                <IonButton shape="round" expand="block">
                                    Add
                                </IonButton>
                            </IonList>
                        </IonContent>
                    </IonModal>

                    {/* <IonPopover
            isOpen={showPopover}
            onDidDismiss={closePopover}
          >
            <div>
              <p>This is your popover content.</p>
            </div>
          </IonPopover> */}

                </div>
            </IonContent>
            <Link to="/cart">
                <IonFooter>
                    <IonToolbar color={'danger'} >

                        <div className="p-2 flex justify-between ">
                            <div>
                                <p>ITEM</p>
                                <p>300.00 total price</p>
                            </div>
                            <div className="flex items-center">
                                VIEW CART
                            </div>
                        </div>
                    </IonToolbar>
                </IonFooter></Link>
        </IonPage >
    );
};

export default RestroDetails;