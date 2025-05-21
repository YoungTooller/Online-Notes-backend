import express from 'express';
import {
    getNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote,
    togglePinNote
} from '../controllers/notesController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.route('/')
    .get(protect, getNotes)
    .post(protect, createNote);

router.route('/:id')
    .get(protect, getNoteById)
    .put(protect, updateNote)
    .delete(protect, deleteNote);

router.route('/:id/pin')
    .patch(protect, togglePinNote);

export default router;