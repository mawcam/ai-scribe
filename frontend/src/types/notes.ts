export interface Note {
  id: number;
  patientId: number;
  rawContent: string;
  processedContent: string;
  audioUrl?: string;
  createdAt: string;
}

export type NoteMetadata = Record<string, string>;

interface OasisFormSection {
  section: string;
  questions: OasisFormQuestion[];
}

interface OasisFormQuestion {
  question: string;
  answer?: string;
  answerText?: string;
}

export interface ParsedProcessedContent {
  patientMetadata: NoteMetadata;
  sections: OasisFormSection[];
}
