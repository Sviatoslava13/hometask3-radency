import { CategoryStatictic, Note, NoteAdd } from "../interface/interface";
import { data } from "data/data";
import { formatCreatedDate, formatDates } from "helpers/helpers";
import * as uuid from "uuid";
const store: { data: Note[] } = {
  data,
};

export const getNotes = async () => {
  return store.data;
};
export const getNotesById = async (notesId: string) => {
  const notes = await getNotes();
  return notes.find((note: any) => note.id === notesId);
};

export const addNote = async (body: NoteAdd) => {
  const notes = await getNotes();
  const newNote: Note = {
    ...body,
    id: uuid.v4(),
    created: formatCreatedDate(),
    dates: formatDates(body.content),
    archived: false,
  };
  store.data = [...notes, newNote];
  return newNote;
};

export const removeNote = async (noteId: string) => {
  const notes = await getNotes();

  const note = notes.find((note) => note.id === noteId);

  store.data = notes.filter((note) => note.id !== noteId);
  return note;
};

export const updateNote = async (notes: NoteAdd, id: string) => {
  const note = await getNotes();

  const noteId = note.find((item) => item.id === id);

  if (noteId) {
    noteId.name = notes?.name || noteId.name;
    noteId.category = notes?.category || noteId.category;
    noteId.content = notes?.content || noteId.content;
    noteId.dates = formatDates(noteId.content);
  }

  return noteId;
};

export const getStats = (notes: Note[]) => {
  const categoryStatictic = notes.reduce<CategoryStatictic[]>((acc, note) => {
    const category = acc.find((cat) => cat.name === note.category);
    if (!category) {
      return [
        ...acc,
        {
          name: note.category,
          active: note.archived ? 0 : 1,
          archived: note.archived ? 1 : 0,
        },
      ];
    }

    note.archived ? (category.archived += 1) : (category.active += 1);
    return acc;
  }, []);

  return categoryStatictic;
};
