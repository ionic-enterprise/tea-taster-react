import React from 'react';
import { Redirect, Route, RouteComponentProps } from 'react-router';
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { leaf, documentText, informationCircle } from 'ionicons/icons';
import { PrivateRoute } from './core/auth';
import AboutPage from './about/AboutPage';
import TastingNotesPage from './tasting-notes/TastingNotesPage';
import TeaDetailsPage from './tea/details/TeaDetailsPage';
import TeaPage from './tea/TeaPage';
import { TeaProvider } from './tea/TeaContext';

const Tabs: React.FC<RouteComponentProps> = ({ match }) => (
  <TeaProvider>
    <IonTabs>
      <IonRouterOutlet>
        <Route
          exact
          path={match.url}
          render={() => <Redirect to={`${match.url}/tea`} />}
        />
        <PrivateRoute exact path={`${match.url}/tea`} component={TeaPage} />
        <PrivateRoute exact path={`${match.url}/about`} component={AboutPage} />
        <PrivateRoute
          exact
          path={`${match.url}/tasting-notes`}
          component={TastingNotesPage}
        />
        <PrivateRoute
          path={`${match.url}/tea/details/:id`}
          component={TeaDetailsPage}
        />
      </IonRouterOutlet>
      <IonTabBar color="tertiary" slot="bottom">
        <IonTabButton tab="tea" href={`${match.url}/tea`}>
          <IonIcon icon={leaf} />
          <IonLabel>Tea</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tasting-notes" href={`${match.url}/tasting-notes`}>
          <IonIcon icon={documentText} />
          <IonLabel>Tasting Notes</IonLabel>
        </IonTabButton>
        <IonTabButton tab="about" href={`${match.url}/about`}>
          <IonIcon icon={informationCircle} />
          <IonLabel>About</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </TeaProvider>
);
export default Tabs;
