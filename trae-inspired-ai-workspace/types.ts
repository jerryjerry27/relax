
export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export interface FeatureCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}
