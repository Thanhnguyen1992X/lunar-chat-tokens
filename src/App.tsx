
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';
import { AuthProvider } from '@/contexts/AuthContext';
import { TokenProvider } from '@/contexts/TokenContext';
import Dashboard from '@/pages/Dashboard';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import ForgotPassword from '@/pages/ForgotPassword';
import Chat from '@/pages/Chat';
import Purchase from '@/pages/Purchase';
import About from '@/pages/About';
import ProtectedRoute from '@/components/ProtectedRoute';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TokenProvider>
          <Router>
            <div className="min-h-screen bg-slate-950 text-slate-50">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/chat" element={
                  <ProtectedRoute>
                    <Chat />
                  </ProtectedRoute>
                } />
                <Route path="/purchase" element={<Purchase />} />
                <Route path="/about" element={<About />} />
              </Routes>
              <Toaster 
                theme="dark"
                position="top-center"
                toastOptions={{
                  style: {
                    background: '#1e293b',
                    color: '#f1f5f9',
                    border: '1px solid #334155'
                  }
                }}
              />
            </div>
          </Router>
        </TokenProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
