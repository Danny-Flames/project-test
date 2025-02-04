export interface IAuth {
  user: {
    name: string;
    email: string;
    phone: string;
    password: string;
  } | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: any;
}

export interface ILoginPayload {
  email: string;
  password: string;
}

export interface StoreSessionData {
  time: string;
  today: number;
  yesterday: number;
}

export interface SocialSalesData {
  platform: string;
  icon: React.ReactNode;
  impressions: number;
  clicks: number;
  revenue: string;
}