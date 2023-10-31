import React, { useState } from 'react';
import { IonSegment, IonSegmentButton, IonLabel, IonContent, IonGrid, IonRow, IonCol, IonIcon } from '@ionic/react';
import { Link } from 'react-router-dom';
const SegmentSlider: React.FC = () => {
    const [selectedSegment, setSelectedSegment] = useState('segment1');
    const handleSegmentChange = (event: CustomEvent) => {
        setSelectedSegment(event.detail.value);
    };
    return (
        <>
            <IonSegment value={selectedSegment} onIonChange={handleSegmentChange}>
                <IonSegmentButton value="segment1">
                    <IonLabel className='text-xs text-black'>Pizza</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="segment2">
                    <IonLabel className='text-xs text-black'>Biryani</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="segment3">
                    <IonLabel className='text-xs text-black'>Burger</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="segment4">
                    <IonLabel className='text-xs text-black'>Roll</IonLabel>
                </IonSegmentButton>
                {/* Add more segments as needed */}
            </IonSegment>
            <IonContent>
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
                                            Cheese Veg Pizza
                                        </p>
                                    </div>

                                    <div className='flex'>
                                        <div className='flex-1'>
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

                                    <div className='flex'>
                                        <div className='flex-1'>
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

                                    <div className='flex'>
                                        <div className='flex-1'>
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

                                    <div className='flex'>
                                        <div className='flex-1'>
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

                                    <div className='flex'>
                                        <div className='flex-1'>
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

                                    <div className='flex'>
                                        <div className='flex-1'>
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
                {selectedSegment === 'segment3' && (
                    <div>
                      <IonGrid>
                            <IonRow className='border border-gray-200 rounded-md p-2'>
                                <IonCol size="4">
                                    <img src="assets/bu1.jpg" alt="" />
                                </IonCol>

                                <IonCol size="8" className='pr-3'>
                                    <div className='flex justify-start'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='border border-green-600 mt-1' width="12" height="12"><path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z" fill="rgba(12,104,0,1)"></path></svg>
                                        <p className="text-sm text-black font-semibold pl-2">
                                        Cheese Burger
                                        </p>
                                    </div>

                                    <div className='flex'>
                                        <div className='flex-1'>
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
                                    <img src="assets/bu2.jpg" alt="" />
                                </IonCol>

                                <IonCol size="8" className='pr-3'>
                                    <div className='flex justify-start'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='border border-green-600 mt-1' width="12" height="12"><path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z" fill="rgba(12,104,0,1)"></path></svg>
                                        <p className="text-sm text-black font-semibold pl-2">
                                        Chili Burger
                                        </p>
                                    </div>

                                    <div className='flex'>
                                        <div className='flex-1'>
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
                                    <img src="assets/bu3.jpg" alt="" />
                                </IonCol>

                                <IonCol size="8" className='pr-3'>
                                    <div className='flex justify-start'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='border border-green-600 mt-1' width="12" height="12"><path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z" fill="rgba(12,104,0,1)"></path></svg>
                                        <p className="text-sm text-black font-semibold pl-2">
                                        Chori Burger
                                        </p>
                                    </div>

                                    <div className='flex'>
                                        <div className='flex-1'>
                                            <p className='text-black text-sm'>₹ 200</p>
                                            <p className='text-gray-400 text-xs flex justify-start'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" fill="rgba(255,250,22,1)"></path></svg>
                                                &nbsp; 5 ratings</p>
                                        </div>

                                        {/* <div className='flex-1 mt-2'>
                                            <div className='flex justify-center rounded-md border border-red-400 bg-red-600 pl-2 pr-2 pt-1 pb-1'>
                                                <div className='text-white'>ADD</div>
                                            </div>
                                        </div> */}

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
            </IonContent>
        </>
    );
};
export default SegmentSlider;