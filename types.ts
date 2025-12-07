
export enum ViewState {
  LOGIN = 'LOGIN',
  DASHBOARD = 'DASHBOARD',
  SYMPTOM_CHECKER = 'SYMPTOM_CHECKER',
  DISEASE_DETECTION = 'DISEASE_DETECTION',
  WELLNESS_PLAN = 'WELLNESS_PLAN',
  MEDICINE_SCANNER = 'MEDICINE_SCANNER',
  CHAT_ASSISTANT = 'CHAT_ASSISTANT',
  EMERGENCY_SOS = 'EMERGENCY_SOS',
}

export interface UserProfile {
  name: string;
  age: string;
  weight: string;
  gender: string;
  goal: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface WellnessData {
  calories: number;
  macros: { name: string; value: number; fill: string }[];
  workout: string[];
  diet: string[];
}

export interface DashboardStats {
  healthScore: number;
  healthStatus: string;
  metrics: {
    heartRate: string;
    steps: number;
    stepsGoal: number;
    calories: number;
    caloriesGoal: number;
    sleepHours: number;
    waterIntake: number; // in Liters
    waterGoal: number;
  };
  weeklyActivity: { day: string; steps: number; calories: number }[];
  dailyTips: string[];
  quote: string;
}
