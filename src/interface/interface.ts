export interface Note {
  id: string;
  name: string;
  created: string;
  category: string;
  content: string;
  dates: string;
  archived: boolean;
}
export interface NoteAdd {
  name: string;
  category: string;
  content: string;
}
export interface CategoryStatictic {
  name: string;
  active: number;
  archived: number;
}