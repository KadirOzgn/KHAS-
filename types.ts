
export interface GradientPoint {
  time: string;
  moisture: number;
  gradient: number;
  depth: number;
}

export enum AlgorithmPhase {
  CALIBRATION = 'CALIBRATION',
  POSITIVE_GRADIENT = 'POSITIVE_GRADIENT',
  INVERSE_GRADIENT = 'INVERSE_GRADIENT'
}

export interface Insight {
  id: string;
  type: 'action' | 'warning' | 'info';
  message: string;
}
