import type { Note } from "./notes";

export interface Patient {
  id: number;
  fullname: string;
  notes: Note[];
}
