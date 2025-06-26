
import React from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Zap, Crown, Star } from 'lucide-react';

const Purchase: React.FC = () => {
  const plans = [
    {
      name: 'Free',
      price: 0,
      period: 'per day',
      tokens: 100,
      features: [
        '100 tokens daily',
        'Basic AI responses',
        'Standard support',
        'Chat history (7 days)'
      ],
      popular: false,
      current: true
    },
    {
      name: 'Premium',
      price: 20,
      period: 'one-time',
      tokens: 10000,
      features: [
        '10,000 tokens',
        'Advanced AI responses',
        'Priority support',
        'Unlimited chat history',
        'Export conversations',
        'No daily limits'
      ],
      popular: true,
      current: false
    }
  ];

  const handlePurchase = (planName: string) => {
    // This would integrate with Stripe in a real implementation
    console.log(`Purchasing ${planName} plan`);
    // For now, just show a placeholder message
    alert('Stripe integration coming soon! This would redirect to secure checkout.');
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-50 mb-4">
            Choose Your Plan
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Unlock the full potential of AI-powered conversations with our premium token packages.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative bg-slate-900/50 border-slate-800 transition-all duration-300 hover:bg-slate-800/50 ${
                plan.popular ? 'ring-2 ring-blue-500/50' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                  plan.popular ? 'bg-blue-500' : 'bg-slate-800'
                }`}>
                  {plan.popular ? (
                    <Crown className="w-8 h-8 text-white" />
                  ) : (
                    <Zap className="w-8 h-8 text-slate-300" />
                  )}
                </div>
                
                <CardTitle className="text-2xl text-slate-50">{plan.name}</CardTitle>
                <CardDescription className="text-slate-400">
                  Perfect for {plan.name === 'Free' ? 'getting started' : 'power users'}
                </CardDescription>
                
                <div className="mt-4">
                  <div className="flex items-baseline justify-center space-x-1">
                    <span className="text-4xl font-bold text-slate-50">
                      ${plan.price}
                    </span>
                    <span className="text-slate-400">{plan.period}</span>
                  </div>
                  <div className="text-blue-400 font-medium mt-2">
                    {plan.tokens.toLocaleString()} tokens
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className={`w-5 h-5 ${plan.popular ? 'text-blue-400' : 'text-green-400'}`} />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => handlePurchase(plan.name)}
                  disabled={plan.current}
                  className={`w-full py-3 text-lg font-medium transition-all duration-200 ${
                    plan.current
                      ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                      : plan.popular
                      ? 'bg-blue-500 hover:bg-blue-600 text-white'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-50 border border-slate-600'
                  }`}
                >
                  {plan.current ? 'Current Plan' : `Get ${plan.name}`}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Comparison */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-slate-50 text-center mb-8">
            Why Choose Premium?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <CardTitle className="text-slate-50">No Daily Limits</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-400">
                  Chat as much as you want without waiting for daily token resets.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-purple-400" />
                </div>
                <CardTitle className="text-slate-50">Advanced AI</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-400">
                  Access to more sophisticated AI models with better responses.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-green-400" />
                </div>
                <CardTitle className="text-slate-50">Premium Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-400">
                  Priority customer support and access to new features first.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-slate-50 mb-4">
            Questions?
          </h2>
          <p className="text-slate-300 mb-6">
            We're here to help. Contact our support team for any questions about our pricing or features.
          </p>
          <Button variant="outline" className="border-slate-600 text-slate-50 hover:bg-slate-800">
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
