import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonNote, IonPage } from "@ionic/react"
import { bookmarkOutline, call, callOutline, helpCircle, helpCircleOutline, key, keyOutline, reader, readerOutline, star, starOutline, location, locationOutline, logOut, shareSocial, documentLock, documentText, calendar } from "ionicons/icons";
import { useLocation } from "react-router";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Manage Order',
    url: '/order',
    iosIcon: readerOutline,
    mdIcon: reader
  },
  // {
  //   title: 'Address',
  //   url: '/page/Outbox',
  //   iosIcon: locationOutline,
  //   mdIcon: location
  // },
  // {
  //   title: 'Change Password',
  //   url: '/page/Favorites',
  //   iosIcon: keyOutline,
  //   mdIcon: key
  // },
  // {
  //   title: 'Contact Us',
  //   url: '/page/Archived',
  //   iosIcon: callOutline,
  //   mdIcon: call
  // },
 
  {
    title: 'Terms and Conditions',
    url: '/page/Trash',
    iosIcon: documentLock,
    mdIcon: documentLock
  },
  {
    title: 'Privacy policy',
    url: '/page/Trash',
    iosIcon: documentText,
    mdIcon: documentText
  },
  {
    title: 'FAQs',
    url: '/page/Trash',
    iosIcon: helpCircleOutline,
    mdIcon: helpCircle
  },
  {
    title: 'Supports',
    url: '/page/Trash',
    iosIcon: call,
    mdIcon: call
  },
  {
    title: 'Report a problem',
    url: '/page/Trash',
    iosIcon: calendar,
    mdIcon: calendar
  },
  {
    title: 'Share App',
    url: '/page/Trash',
    iosIcon: shareSocial,
    mdIcon: shareSocial
  },
  {
    title: 'Rate US',
    url: '/page/Spam',
    iosIcon: starOutline,
    mdIcon: star
  },
  {
    title: 'Log Out',
    url: '/NewLogin',
    iosIcon: logOut,
    mdIcon: logOut
  }
];

// const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
  const location = useLocation();
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          {/* className="infoSection" */}
          <div className="flex justify-start border-b-2 border-red-600 p-2">
            <img className="userPhoto" width={80} height={80} src="assets/usersidemenu.png" alt="" />
            <div>
              <p className="text-lg pl-5 mt-4"><b>User Name</b></p>
              <p className="pl-5 text-gray-400">+91 8668543490</p>
            </div>
          </div>

          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false} className="p-2">

                <IonItem className={location.pathname === appPage.url ? 'selected' : ''}
                  routerLink={appPage.url} routerDirection="none"  detail={false}>

                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />

                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        {/* <IonList id="labels-list">
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon aria-hidden="true" slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList> */}
      </IonContent>
    </IonMenu>
  );
};

export default Menu;