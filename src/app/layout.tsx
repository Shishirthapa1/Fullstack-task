import type { Metadata } from 'next'
import './globals.css'
import { ProjectsProvider } from '@/context/ProjectsContext'
import NavBar from '@/components/Navbar';
import { Quicksand, ABeeZee } from "next/font/google";
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Projects Showcase',
  description: 'Next.js + GSAP + Postgres demo',
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen relative bg-[#242424] antialiased">
        <ProjectsProvider>
          <NavBar />
          {children}
          <Footer />
        </ProjectsProvider>
      </body>
    </html>
  )
}