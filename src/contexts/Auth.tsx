import {
  createContext,
  FC,
  ReactNode,
  useEffect,
  useState,
  useContext,
} from 'react';

import pocketbase from '@/api/pocketbase';
import useStorage from '@/hooks/useStorage';

interface AuthState {
  isAuth: boolean;
  user: any | null;
  token: string;
}

interface AuthContextProps extends AuthState {
  signUp: (registerUser: any) => Promise<any>;
  signIn: (email: string, password: string) => Promise<any>;
  signOut: () => Promise<any>;
  cancelMembership: (recordId: string) => Promise<any>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const initialAuthState: AuthState = {
  isAuth: false,
  user: null,
  token: '',
};

const AuthProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  const { storageData } = useStorage('pocketbase_auth'); //$ key: string, defaultValue?: any

  useEffect(() => {
    if (storageData) {
      const { token, model } = storageData;
      setAuthState({
        isAuth: !!model,
        user: model,
        token,
      });
    }
  }, [storageData]);

  const [authState, setAuthState] = useState<AuthState>(initialAuthState);

  useEffect(() => {
    const unsub = pocketbase.authStore.onChange((token, model) => {
      setAuthState((state) => ({
        ...state,
        isAuth: !!model,
        user: model,
        token,
      }));
    });
    return () => {
      unsub?.();
    };
  }, []);

  const signUp = async (registerUser: any) => {
    return await pocketbase.collection('users').create(registerUser);
  };

  const signIn = async (email: string, password: string) => {
    return await pocketbase
      .collection('users')
      .authWithPassword(email, password);
  };

  const signOut = async () => {
    return await pocketbase.authStore.clear();
  };

  const cancelMembership = async (recordId: string) => {
    return await pocketbase.collection('users').delete(recordId);
  };

  const authValue: AuthContextProps = {
    ...authState,
    signUp,
    signIn,
    signOut,
    cancelMembership,
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const authValue = useContext(AuthContext);
  if (!authValue) {
    throw new Error('useAuth 훅은 AuthProvider 내부에서만 사용할 수 있습니다.');
  }

  return authValue;
};

export default AuthProvider;
