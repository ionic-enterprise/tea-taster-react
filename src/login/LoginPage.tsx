import {
  IonButton,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { logInOutline } from 'ionicons/icons';
import { useForm, Controller } from 'react-hook-form';

type LoginInputs = {
  email: string;
  password: string;
};

const LoginPage: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isDirty, isValid },
  } = useForm<LoginInputs>({ mode: 'onChange' });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <form>
          <IonList>
            <IonItem>
              <IonLabel position="floating">E-Mail Address</IonLabel>
              <Controller
                render={({ field: { onChange, value } }) => (
                  <IonInput
                    data-testid="email-input"
                    onIonChange={(e) => onChange(e.detail.value!)}
                    value={value}
                    type="email"
                  />
                )}
                control={control}
                name="email"
                rules={{
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'E-Mail Address must have a valid format',
                  },
                }}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Password</IonLabel>
              <Controller
                render={({ field: { onChange, value } }) => (
                  <IonInput
                    data-testid="password-input"
                    onIonChange={(e) => onChange(e.detail.value!)}
                    value={value}
                    type="password"
                  />
                )}
                control={control}
                name="password"
                rules={{ required: true }}
              />
            </IonItem>
          </IonList>

          <div className="error-message" data-testid="errors">
            <div>{errors.email?.type === 'required' && 'E-Mail Address is required'}</div>
            <div>{errors.email?.type === 'pattern' && errors.email.message}</div>
            <div>{errors.password?.type === 'required' && 'Password is required'}</div>
          </div>
        </form>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonButton
            expand="full"
            disabled={!isDirty || !isValid}
            data-testid="submit-button"
            onClick={handleSubmit((data) => console.log(data))}
          >
            Sign In
            <IonIcon slot="end" icon={logInOutline} />
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default LoginPage;
