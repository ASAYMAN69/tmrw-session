export interface SlideData {
  id: number;
  slug: string;
  title: string;
  badge: string;
  subtitle?: string;
  category: 'Foundation' | 'Frontend' | 'Backend' | 'Data & Auth' | 'Deployment' | 'Big Picture' | 'Next Steps' | 'Live Masterclass';
  purpose?: string;
  bigStatement?: string;
  funLine?: string;
  takeaway?: string;
  maxSubSteps?: number;
  presenterNotes: string[];
}

export type ViewMode = 'deck' | 'document' | 'overview';

export interface InteractiveState {
  currentSlide: number;
  currentSubStep: number;
  viewMode: ViewMode;
  showNotes: boolean;
  isTimerRunning: boolean;
  elapsedSeconds: number;
  isMuted: boolean;
}
