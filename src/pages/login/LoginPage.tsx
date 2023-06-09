import { useState } from 'react';
import {
  IonButton,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { logInOutline } from 'ionicons/icons';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'Yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';
import { login } from '../../utils/auth';

import './LoginPage.css';

type LoginInputs = { email: string; password: string };

const validationSchema = yup.object({
  email: yup.string().required().email().label('Email address'),
  password: yup.string().required().label('Password'),
});

const LoginPage: React.FC = () => {
  const history = useHistory();
  const [showError, setShowError] = useState<boolean>(false);
  const {
    handleSubmit,
    control,
    formState: { errors, isValid, touchedFields, dirtyFields },
  } = useForm<LoginInputs>({ mode: 'onTouched', resolver: yupResolver(validationSchema) });

  const getClassNames = (field: keyof LoginInputs) =>
    [
      errors[field] ? 'ion-invalid' : 'ion-valid',
      touchedFields[field] ? 'ion-touched' : 'ion-untouched',
      dirtyFields[field] ? 'ion-dirty' : 'ion-pristine',
    ].join(' ');

  const handleLogin = async (data: LoginInputs) => {
    const success = await login(data.email, data.password);
    setShowError(!success);
    success && history.replace('/');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="login-page">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <form>
          <IonList lines="none">
            <IonItem>
              <Controller
                name="email"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <IonInput
                    type="email"
                    label="Email Address"
                    labelPlacement="floating"
                    value={value}
                    onIonBlur={onBlur}
                    onIonInput={(e) => onChange(e.detail.value!)}
                    errorText={errors.email?.message}
                    className={getClassNames('email')}
                  />
                )}
              />
            </IonItem>
            <IonItem>
              <Controller
                name="password"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <IonInput
                    type="password"
                    label="Password"
                    labelPlacement="floating"
                    value={value}
                    onIonBlur={onBlur}
                    onIonInput={(e) => onChange(e.detail.value!)}
                    errorText={errors.password?.message}
                    className={getClassNames('password')}
                  />
                )}
              />
            </IonItem>
          </IonList>
        </form>
        {showError && <div className="invalid-error-message">Invalid email and/or password</div>}
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonButton expand="full" onClick={handleSubmit((data) => handleLogin(data))} disabled={!isValid}>
            Sign In
            <IonIcon slot="end" icon={logInOutline} />
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};
export default LoginPage;
