import { IonCard, IonCardContent,  IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Activity.css';

const Activity: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='activity'>Activity</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
      <IonCard className='card'>
        <IonCardContent className='transaction'>
        30/03/2022|4:56AM- Anytime Fitness
        <br></br>
        <strong>₱500.00</strong>  
    </IonCardContent>
    </IonCard>
    <IonCard className='card'>
        <IonCardContent className='transaction'>
        29/03/2022|12:49 AM- Ted'z Batchoy 
        <br></br>
        <strong>₱489.00</strong>  
    </IonCardContent>
    </IonCard>
    <IonCard className='card'>
        <IonCardContent className='transaction'>
        24/03/2022|3:30PM- Starbucks Iloilo 
        <br></br>
        <strong>₱489.00</strong>  
    </IonCardContent>
    </IonCard>
    <IonCard className='card'>
        <IonCardContent className='transaction'>
        23/03/2022|7:19PM- Shopee
        <br></br>
        <strong>₱1,489.00</strong>  
    </IonCardContent>
    </IonCard>
    <IonCard className='card'>
        <IonCardContent className='transaction'>
        22/03/2022|6:56PM- 7/11 Injap 
        <br></br>
        <strong>₱60.00</strong>  
    </IonCardContent>
    </IonCard>
    <IonCard className='card'>
        <IonCardContent className='transaction'>
        19/03/2022|11:46AM- Grab Food
        <br></br>
        <strong>₱577.00</strong>  
    </IonCardContent>
    </IonCard>
    </IonContent>
    </IonPage>
  );
};

export default Activity;
