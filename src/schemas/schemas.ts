import * as yup from "yup";

export const schemaNote = yup.object().shape({
  name: yup
    .string()
    .required()
    .min(3, "Min length 3 characters")
    .max(50, "Max length 50 characters"),
  category: yup
    .string()
    .oneOf(
      ["Quote", "Idea", "Task", "Random Thought"],
      "The value must be one of this array: ['Quote', 'Idea', 'Task', 'Random Thought']"
    )
    .required(),
  content: yup
    .string()
    .required()
    .min(3, "Min length 3 characters")
    .max(200, "Max length 200 characters"),
});

export type NoteSchema = typeof schemaNote;
