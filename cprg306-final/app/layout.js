"use client";

import "../styles/globals.css";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AuthProvider, useAuth } from './_utils/firebaseConfig';

function ProtectedLayout({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return user ? children : null;
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-gradient-to-br from-green-900 via-lime-700 to-lime-500 h-screen">
      <body>
        <AuthProvider>
          <ProtectedLayout>
            {children}
          </ProtectedLayout>
        </AuthProvider>
      </body>
    </html>
  );
}
