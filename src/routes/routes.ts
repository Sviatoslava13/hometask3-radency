import { Router } from "express";
import { validatorNote } from "middlewares/validator";
import { schemaNote } from "schemas/schemas";
import {
  createNote,
  deleteNoteId,
  getAllNotes,
  getNotesId,
  getStatsNotes,
  updateNotes,
} from "services/services";
const router = Router();

router.post("/", validatorNote(schemaNote), createNote);
router.delete("/:id", deleteNoteId);
router.patch("/:id", updateNotes);
router.get("/", getAllNotes);
router.get("/:id", getNotesId);
router.get("/stats", getAllNotes);

export default router;
