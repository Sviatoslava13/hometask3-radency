import express from "express";
import {
  addNote,
  getNotes,
  getNotesById,
  getStats,
  removeNote,
  updateNote,
} from "repositories/repositories";

export const getAllNotes = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const notes = await getNotes();
    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        notes,
      },
    });
  } catch (error) {
    res.status(404).json(error);
  }
};

export const getNotesId = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const notes = await getNotesById(id);
    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        notes,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "error",
      code: 404,
      message: "Not found",
    });
  }
};

export const createNote = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const note = await addNote(req.body);
    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        note,
      },
    });
  } catch (error) {
    return res.status(404).json({
      status: "error",
      code: 404,
      message: "Not found",
    });
  }
};
export const deleteNoteId = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const note = await removeNote(id);
    return res.status(200).json({
      status: "success",
      code: 200,
      message: "note deleted",
      data: {
        note,
      },
    });
  } catch (error) {
    return res.status(404).json({
      status: "error",
      code: 404,
      message: "Not found",
    });
  }
};
export const updateNotes = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const note = await updateNote(req.body, id);
    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        note,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "error",
      code: 404,
      message: "Not found",
    });
  }
};

export const getStatsNotes = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const notes = await getNotes();
    const stats = getStats(notes);
    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        stats,
      },
    });
  } catch (error) {
    res.status(404).json(error);
  }
};
