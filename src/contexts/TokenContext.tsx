
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useAuth } from './AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface TokenContextType {
  tokens: number;
  loading: boolean;
  consumeTokens: (amount: number) => Promise<boolean>;
  refreshTokens: () => Promise<void>;
}

const TokenContext = createContext<TokenContextType | undefined>(undefined);

export const useTokens = () => {
  const context = useContext(TokenContext);
  if (context === undefined) {
    throw new Error('useTokens must be used within a TokenProvider');
  }
  return context;
};

interface TokenProviderProps {
  children: ReactNode;
}

export const TokenProvider: React.FC<TokenProviderProps> = ({ children }) => {
  const [tokens, setTokens] = useState(0);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  const fetchTokens = async () => {
    if (!user) {
      setTokens(0);
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('tokens')
        .eq('id', user.id)
        .single();

      if (error) {
        console.error('Error fetching tokens:', error);
        setTokens(0);
      } else {
        setTokens(data?.tokens || 0);
      }
    } catch (error) {
      console.error('Error fetching tokens:', error);
      setTokens(0);
    } finally {
      setLoading(false);
    }
  };

  const consumeTokens = async (amount: number): Promise<boolean> => {
    if (!user) return false;
    
    if (tokens < amount) {
      toast.error('Insufficient tokens! Please upgrade to continue.');
      return false;
    }

    try {
      const newTokenCount = tokens - amount;
      
      const { error } = await supabase
        .from('user_profiles')
        .update({ tokens: newTokenCount })
        .eq('id', user.id);

      if (error) {
        toast.error('Error consuming tokens');
        return false;
      }

      setTokens(newTokenCount);
      return true;
    } catch (error) {
      toast.error('Error consuming tokens');
      return false;
    }
  };

  const refreshTokens = async () => {
    await fetchTokens();
  };

  useEffect(() => {
    fetchTokens();
  }, [user]);

  const value = {
    tokens,
    loading,
    consumeTokens,
    refreshTokens,
  };

  return <TokenContext.Provider value={value}>{children}</TokenContext.Provider>;
};
