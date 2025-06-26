
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Shield, Zap, Users, Heart, Star } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: MessageCircle,
      title: 'AI-Powered Conversations',
      description: 'Experience natural, intelligent conversations with our advanced AI assistant that understands context and provides helpful responses.'
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'Your conversations are encrypted and secure. We prioritize your privacy and never share your data with third parties.'
    },
    {
      icon: Zap,
      title: 'Token-Based System',
      description: 'Fair usage model with daily free tokens and premium upgrades for unlimited access to AI conversations.'
    },
    {
      icon: Users,
      title: 'User-Centric Design',
      description: 'Beautiful, intuitive interface inspired by iOS design principles, optimized for both mobile and desktop experiences.'
    }
  ];

  const stats = [
    { label: 'Daily Active Users', value: '10K+' },
    { label: 'Messages Processed', value: '1M+' },
    { label: 'Customer Satisfaction', value: '99%' },
    { label: 'Response Time', value: '<1s' }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              ChatPro
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            ChatPro is a premium AI chat platform that combines cutting-edge artificial intelligence 
            with beautiful, intuitive design. We're on a mission to make AI conversations accessible, 
            secure, and delightful for everyone.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-slate-800 mb-16">
          <CardContent className="p-8 text-center">
            <Heart className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-slate-50 mb-4">Our Mission</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              To democratize access to AI technology while maintaining the highest standards of 
              privacy, security, and user experience. We believe that everyone deserves access 
              to intelligent, helpful AI assistants.
            </p>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-50 text-center mb-12">
            What Makes Us Different
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-800 hover:bg-slate-800/50 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-slate-50 text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-400 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-50 text-center mb-12">
            By the Numbers
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-800 text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
                  <div className="text-slate-300 text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology */}
        <Card className="bg-slate-900/50 border-slate-800 mb-16">
          <CardHeader className="text-center">
            <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <CardTitle className="text-2xl text-slate-50">Powered by Advanced AI</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <CardDescription className="text-slate-300 text-lg max-w-2xl mx-auto">
              Our platform leverages state-of-the-art language models and machine learning 
              algorithms to provide intelligent, contextual responses. We continuously update 
              our AI capabilities to ensure you get the best possible experience.
            </CardDescription>
          </CardContent>
        </Card>

        {/* Values */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-50 mb-8">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Shield className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-slate-50 mb-2">Privacy First</h3>
              <p className="text-slate-400">Your data belongs to you. We implement industry-leading security measures.</p>
            </div>
            
            <div className="text-center">
              <Star className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-slate-50 mb-2">Excellence</h3>
              <p className="text-slate-400">We strive for perfection in every interaction and feature we build.</p>
            </div>
            
            <div className="text-center">
              <Users className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-slate-50 mb-2">Community</h3>
              <p className="text-slate-400">We listen to our users and build features based on your feedback.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
