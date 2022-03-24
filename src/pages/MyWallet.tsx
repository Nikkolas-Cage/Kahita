import { IonBreadcrumb, IonBreadcrumbs, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { pin, wifi, wine, warning, walk, card, disc } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './MyWallet.css';

const Wallet: React.FC = () => {
  return (
    <IonPage>
    <IonHeader  >
      <IonToolbar >
        <IonTitle className='wallet'>My Wallet</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonCard className='card'>
        <IonCardHeader>
          <IonCardSubtitle  className='subtitle'>Your Transactions</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent className='transaction'>
        24/03/2022|3:30PM- Starbucks Iloilo 
        <br></br>
        <strong>₱489.00</strong>  
    </IonCardContent>
  
        
    
      </IonCard>

      <IonCard>
        <IonItem className='extras'>
          <IonIcon icon={pin} slot="start" />
          <IonLabel>Transaction Locations</IonLabel>
          <IonButton fill="outline" slot="end">View</IonButton>
        </IonItem>

        <IonCardContent>
         Injap Tower
         <br></br>
         Katrina Lodge
    </IonCardContent>
      </IonCard>

      <IonCard>
        <IonItem href="#"  className='extras'>
          <IonIcon icon={card} slot="start" />
          <IonLabel className='extras'>Linked Cards</IonLabel>
        </IonItem>

        <IonItem  className='extras'>
          <IonIcon icon={warning} slot="start" />
          <IonLabel>Pending Payments</IonLabel>
        </IonItem>

        <IonItem  className='extras'>
          <IonIcon icon={disc} slot="start" />
          <IonLabel>K-Coins</IonLabel>
        </IonItem>
      

      </IonCard>
    </IonContent>
  </IonPage>
  );
};

export default Wallet;
