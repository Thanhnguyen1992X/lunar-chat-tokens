
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useTokens } from '@/contexts/TokenContext';
import { Button } from '@/components/ui/button';
import { MessageCircle, CreditCard, Info, LogOut, User, Coins } from 'lucide-react';

const Navigation: React.FC = () => {
  const { user, signOut } = useAuth();
  const { tokens } = useTokens();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const navItems = [
    { path: '/chat', icon: MessageCircle, label: 'Chat', protected: true },
    { path: '/purchase', icon: CreditCard, label: 'Purchase' },
    { path: '/about', icon: Info, label: 'About' },
  ];

  return (
    <nav className="bg-slate-900/50 backdrop-blur-xl border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-slate-50">ChatPro</span>
          </Link>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              if (item.protected && !user) return null;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                    location.pathname === item.path
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'text-slate-300 hover:text-slate-50 hover:bg-slate-800/50'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* User Section */}
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                {/* Token Display */}
                <div className="flex items-center space-x-2 bg-slate-800/50 px-3 py-1.5 rounded-lg">
                  <Coins className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-medium text-slate-50">{tokens}</span>
                </div>

                {/* User Menu */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-2 text-slate-300">
                    <User className="w-4 h-4" />
                    <span className="text-sm">{user.email}</span>
                  </div>
                  <Button
                    onClick={handleSignOut}
                    variant="ghost"
                    size="sm"
                    className="text-slate-300 hover:text-slate-50 hover:bg-slate-800/50"
                  >
                    <LogOut className="w-4 h-4" />
                  </Button>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-3">
                <Link to="/login">
                  <Button variant="ghost" size="sm" className="text-slate-300 hover:text-slate-50">
                    Sign In
                  </Button>
                </Link>
                <Link to="/register">
                  <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-slate-800">
        <div className="flex justify-around py-2">
          {navItems.map((item) => {
            if (item.protected && !user) return null;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-200 ${
                  location.pathname === item.path
                    ? 'text-blue-400'
                    : 'text-slate-400 hover:text-slate-50'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-xs mt-1">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
