export interface OasisFormSection {
  section: string;
  questions: OasisFormQuestion[];
}

export interface OasisFormQuestion {
  question: string; // M1800, M1810, ...
  answer?: string;
  answerText?: string;
}
