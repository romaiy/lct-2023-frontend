import ReactDOM from 'react-dom/client';
import App from './App';
import { MantineProvider } from '@mantine/core';
import UserStore from './store/UserStore';
import { createContext } from 'react';
import AnalysisStore from './store/AnalysisStore';

interface State {
  UStore: UserStore,
  AStore: AnalysisStore,
}

const UStore = new UserStore();
const AStore = new AnalysisStore();

export const Context = createContext<State>({
  UStore,
  AStore,
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Context.Provider value={{ UStore, AStore }}>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        globalStyles: (_theme) => ({
          '.input': {
            input: {
              background: '#F8F9FA'
            },
            label: {
                marginBottom: '6px',
            },
            button: {
              background: '#F8F9FA'
            }
          }
        }),
        defaultRadius: '0.5rem',
        fontFamily: 'Commissioner, sans-serif',
        fontSizes: { xs: '9.6px', sm: '12px', md: '14.4px', lg: '16px', xl: '19.2px'},
        headings: {
          fontWeight: 600,
          sizes: {
            h1: { fontSize: '2.5rem', lineHeight: '3.375rem' },
            h2: { fontSize: '2rem', lineHeight: '2.75rem' },
            h3: { fontSize: '1.5rem', lineHeight: '2.125rem' },
            h4: { fontSize: '1.25rem', lineHeight: '1.75rem' },
            h5: { fontSize: '1rem', lineHeight: '1.375rem' },
            h6: { fontSize: '0.75rem', lineHeight: '1.0625rem'  },
          }
        }
      }}
    >
      <App/>
    </MantineProvider>
  </Context.Provider>
);
