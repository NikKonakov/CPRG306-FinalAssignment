"use client";
import { AuthProvider, useAuth } from './_utils/firebaseConfig';
import "../styles/globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-gradient-to-br from-green-900 via-lime-700 to-lime-500 h-screen">
    <body>
      <AuthProvider>
          {children}
      </AuthProvider>
    </body>
  </html>
  )
}
