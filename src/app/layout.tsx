import type { Metadata } from 'next'
import './globals.css'
import { ProjectsProvider } from '@/context/ProjectsContext';
import { Toaster } from 'react-hot-toast';


export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'A Portfolio Website made using Next.js + GSAP + Postgres + TailwindCss',
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen relative antialiased">
        <ProjectsProvider>
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                borderRadius: '8px',
                padding: '12px 16px',
                fontWeight: '500',
              },
              success: {
                style: {
                  background: '#d1fae5',
                  color: '#065f46',
                },
                iconTheme: {
                  primary: '#10b981',
                  secondary: '#ecfdf5',
                },
              },
              error: {
                style: {
                  background: '#fee2e2',
                  color: '#991b1b',
                },
                iconTheme: {
                  primary: '#ef4444',
                  secondary: '#fef2f2',
                },
              },
            }}
          />
        </ProjectsProvider>
      </body>
    </html>
  )
}