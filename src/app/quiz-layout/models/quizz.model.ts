export interface QuizzModel {
  team: string;
  title: string;
  description: string;
  level: string;
  type: string;
  rewardXp: number;
  options: Question[];
  _id: string;
}

interface Question {
  correct: boolean;
  text: string;
}
