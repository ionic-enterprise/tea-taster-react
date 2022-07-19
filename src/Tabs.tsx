import React from 'react';
import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { Redirect, Route, useRouteMatch } from 'react-router';
import TeaDetailsPage from './tea/details/TeaDetailsPage';
import TeaPage from './tea/TeaPage';
import TastingNotesPage from './tasting-notes/TastingNotesPage';
import AboutPage from './about/AboutPage';
import { leaf, documentText, informationCircle } from 'ionicons/icons';

const Tabs: React.FC = () => {
  const { url } = useRouteMatch();

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path={url}>
          <Redirect to={`${url}/tea`} />
        </Route>
        <Route exact path={`${url}/tea`}>
          <TeaPage />
        </Route>
        <Route path={`${url}/tea/details/:id`}>
          <TeaDetailsPage />
        </Route>
        <Route exact path={`${url}/tasting-notes`}>
          <TastingNotesPage />
        </Route>
        <Route exact path={`${url}/about`}>
          <AboutPage />
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
  );
};
export default Tabs;
