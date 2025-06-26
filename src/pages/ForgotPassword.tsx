
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const { resetPassword } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    setLoading(true);
    const { error } = await resetPassword(email);
    
    if (error) {
      toast.error(error);
    } else {
      setEmailSent(true);
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
              <MessageCircle className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold text-slate-50">ChatPro</span>
          </Link>
        </div>

        <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-slate-50">
              {emailSent ? 'Check Your Email' : 'Reset Password'}
            </CardTitle>
            <CardDescription className="text-slate-400">
              {emailSent 
                ? 'We\'ve sent you a password reset link'
                : 'Enter your email to receive a reset link'
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            {emailSent ? (
              <div className="text-center space-y-6">
                <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <p className="text-slate-300">
                    Password reset instructions have been sent to{' '}
                    <span className="text-green-400 font-medium">{email}</span>
                  </p>
                </div>
                
                <div className="space-y-4">
                  <p className="text-sm text-slate-400">
                    Didn't receive the email? Check your spam folder or try again.
                  </p>
                  
                  <Button
                    onClick={() => setEmailSent(false)}
                    variant="outline"
                    className="w-full border-slate-600 text-slate-50 hover:bg-slate-800"
                  >
                    Try Different Email
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-300">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-slate-800/50 border-slate-700 text-slate-50 focus:border-blue-500 focus:ring-blue-500/20"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 text-lg font-medium transition-all duration-200"
                >
                  {loading ? 'Sending...' : 'Send Reset Link'}
                </Button>
              </form>
            )}

            <div className="mt-6 text-center">
              <Link 
                to="/login" 
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Sign In
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ForgotPassword;
