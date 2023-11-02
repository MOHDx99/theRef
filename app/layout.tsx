import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from "@/components/theme-provider"
import { ModalProvider } from '@/providers/modal-provider'
import prismadb from '@/lib/prismadb'
import { ToasterProvider } from '@/providers/toast-provider'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Reference BackEnd',
  description: 'Le Coin des GrandeS Marques',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    
  return (
    
      <ClerkProvider> 
        <html lang="en">
          <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ToasterProvider/>
            <ModalProvider/>
            {children}
          </ThemeProvider>
          </body>
        </html>
      </ClerkProvider>
    
  )
}
