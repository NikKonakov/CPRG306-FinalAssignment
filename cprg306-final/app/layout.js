"use client";

import "../styles/globals.css";
import { AuthProvider} from './_utils/firebaseConfig';


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-gradient-to-br from-green-900 via-lime-700 to-lime-500 h-screen">
      <body>
          <AuthProvider>
              {children}
          </AuthProvider>
      </body>
    </html>
  );
}
