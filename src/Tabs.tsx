import { IonContent, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { Redirect, Route, useRouteMatch } from 'react-router';
import { documentText, informationCircle, leaf } from 'ionicons/icons';
import TeaListPage from './tea/TeaListPage';
import TeaDetailsPage from './tea/TeaDetailsPage';
import AboutPage from './about/AboutPage';
import TastingNotesPage from './tasting-notes/TastingNotesPage';

const Tabs: React.FC = () => {
  const { url } = useRouteMatch();

  return (
    <IonContent>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path={`${url}/about`}>
            <AboutPage />
          </Route>
          <Route exact path={`${url}/tasting-notes`}>
            <TastingNotesPage />
          </Route>
          <Route exact path={`${url}/tea`}>
            <TeaListPage />
          </Route>
          <Route exact path={`${url}/tea/:id`}>
            <TeaDetailsPage />
          </Route>
          <Route exact path={url}>
            <Redirect to={`${url}/tea`} />
          </Route>
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="tea" href={`${url}/tea`}>
            <IonIcon icon={leaf} />
            <IonLabel>Tea</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tasting-notes" href={`${url}/tasting-notes`}>
            <IonIcon icon={documentText} />
            <IonLabel>Tasting Notes</IonLabel>
          </IonTabButton>
          <IonTabButton tab="about" href={`${url}/about`}>
            <IonIcon icon={informationCircle} />
            <IonLabel>About</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonContent>
  );
};
export default Tabs;
