import { IonBreadcrumb, IonBreadcrumbs, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonContent, IonHeader, IonIcon,IonLabel, IonList, IonListHeader, IonPage, IonTabBar, IonTabButton, IonTitle, IonToolbar } from '@ionic/react';
import { card, cash, chevronForward, gift, mail, navigate, phonePortrait, pin, pulse, qrCode, receipt, shield } from 'ionicons/icons';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar >
          <IonTitle className='kahita'><img alt="logo" id="header_logo" height="80" src="assets/1.png"/></IonTitle>
        
        </IonToolbar>
      </IonHeader>

      <IonTabBar slot="top" className='balcred'>
      <IonTabButton className='balcred'>
          <IonLabel>Balance</IonLabel>
          </IonTabButton>
      <IonTabButton className='balcred'>
          <IonLabel>Credit</IonLabel>
          </IonTabButton>
          </IonTabBar>

          
          <IonCard className='bal'>
        <IonCardHeader>
          <IonCardSubtitle className='subtitle'>₱69420.00</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent className='balance'>
        <strong>Balance</strong>  
    </IonCardContent>
    </IonCard>
    

      <IonTabBar >
      <IonTabButton>
        <IonIcon icon={navigate}></IonIcon>
          <IonLabel>Send Money</IonLabel>
          </IonTabButton>
      <IonTabButton>
        <IonIcon icon={cash}></IonIcon>
          <IonLabel>Cash In</IonLabel>
          </IonTabButton>
      <IonTabButton>
        <IonIcon icon={phonePortrait}></IonIcon>
          <IonLabel>Buy Load</IonLabel>
          </IonTabButton>
          </IonTabBar>

          <IonTabBar >
      <IonTabButton>
        <IonIcon icon={gift}></IonIcon>
          <IonLabel>Kahita Rewards</IonLabel>
          </IonTabButton>
      <IonTabButton>
        <IonIcon icon={card}></IonIcon>
          <IonLabel>Kahita Kredits</IonLabel>
          </IonTabButton>
      <IonTabButton>
        <IonIcon icon={receipt}></IonIcon>
          <IonLabel>Pay Bills</IonLabel>
          </IonTabButton>
          </IonTabBar>

          <IonTabBar >
      <IonTabButton>
        <IonIcon icon={qrCode}></IonIcon>
          <IonLabel>Scan to Pay</IonLabel>
          </IonTabButton>
      <IonTabButton>
        <IonIcon icon={shield}></IonIcon>
          <IonLabel>K-Insure</IonLabel>
          </IonTabButton>
      <IonTabButton>
        <IonIcon icon={pulse}></IonIcon>
          <IonLabel>K-mergency</IonLabel>
          </IonTabButton>
          </IonTabBar>


      <IonContent className="ion-padding">
        <IonList className='services'>
          <IonListHeader>
              <IonLabel>All Services</IonLabel>
              <IonIcon icon={chevronForward}/>
          </IonListHeader>
          </IonList>
      </IonContent>

  
      <IonContent>
      <IonCard className='card'>
        <IonCardHeader>
          <IonCardSubtitle  className='subtitle'>Latest News</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent className='transaction'>
          Kahita has been awarded as the number 1
          <br></br>
          e-wallet in the Philippines
    </IonCardContent>
    </IonCard>
    <IonCard className='card'>
        <IonCardHeader>
          <IonCardSubtitle  className='subtitle'>Kahita Tips</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent className='transaction'>
         How to save money?
          <br></br>
          Click here!
    </IonCardContent>
    </IonCard>

    </IonContent>
   </IonPage>

  );
};

export default Home;
