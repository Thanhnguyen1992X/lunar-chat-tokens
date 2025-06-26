
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Zap, Shield, Sparkles, ArrowRight } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const features = [
    {
      icon: MessageCircle,
      title: 'AI-Powered Chat',
      description: 'Engage with our advanced AI assistant for intelligent conversations.',
      color: 'text-blue-400'
    },
    {
      icon: Zap,
      title: 'Token System',
      description: 'Fair usage with daily token allocation and premium upgrades.',
      color: 'text-yellow-400'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your conversations are encrypted and stored securely.',
      color: 'text-green-400'
    },
    {
      icon: Sparkles,
      title: 'Premium Features',
      description: 'Unlock unlimited tokens and advanced AI capabilities.',
      color: 'text-purple-400'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-50 mb-6">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              ChatPro
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Experience the power of AI-driven conversations with our premium chat platform. 
            Elegant design meets cutting-edge technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {user ? (
              <Link to="/chat">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3">
                  Start Chatting
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            ) : (
              <>
                <Link to="/register">
                  <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/login">
                  <Button variant="outline" size="lg" className="border-slate-600 text-slate-50 hover:bg-slate-800 px-8 py-3">
                    Sign In
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-slate-900/50 border-slate-800 hover:bg-slate-800/50 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-slate-50 text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-400">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 mb-16 border border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-slate-50 mb-2">100+</div>
              <div className="text-slate-300">Daily Free Tokens</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-50 mb-2">24/7</div>
              <div className="text-slate-300">AI Availability</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-50 mb-2">∞</div>
              <div className="text-slate-300">Premium Possibilities</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-slate-900/50 border-slate-800 max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-50">Ready to Experience the Future?</CardTitle>
              <CardDescription className="text-slate-300 text-lg">
                Join thousands of users who are already chatting with our AI assistant.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/chat">
                  <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
                    Start Your First Chat
                  </Button>
                </Link>
                <Link to="/purchase">
                  <Button variant="outline" size="lg" className="border-slate-600 text-slate-50 hover:bg-slate-800">
                    View Premium Plans
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
