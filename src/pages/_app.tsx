import type { AppProps } from 'next/app';
import '../styles/globals.css';
import AppProvider from 'src/Context';
import { ToastContainer } from 'react-toastify';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ReactLenis } from '@studio-freight/react-lenis';

const MyApp = ({ Component, pageProps }: AppProps) => {
  gsap.registerPlugin(ScrollTrigger);
  return (
    <ReactLenis
      root
      options={{
        duration: 2.2
      }}
    >
      <AppProvider>
        <Component {...pageProps} />
        <ToastContainer
          toastStyle={{ backgroundColor: '#8A1E61' }}
          position="top-right"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </AppProvider>
    </ReactLenis>
  );
};

export default MyApp;
