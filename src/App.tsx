import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import router from '@/routes';
import Spinner from '@/components/Spinner/Spinner';
import AuthProvider from '@/contexts/Auth';

declare global {
  interface Window {
    kakao: any;
  }
}

// 쿼리 클라이언트 객체 생성
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function App() {
  return (
    <>
      <HelmetProvider>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <Suspense fallback={<Spinner />}>
              <RouterProvider router={router} />
            </Suspense>
            <ReactQueryDevtools />
          </QueryClientProvider>
        </AuthProvider>
      </HelmetProvider>
    </>
  );
}
