import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { MantineProvider } from '@mantine/core'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{
      fontFamily: 'Commissioner, sans-serif',
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
)
