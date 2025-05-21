import asyncHandler from 'express-async-handler';
import Note from '../models/note.js'

// GET /api/notes
export const getNotes = asyncHandler(async (req, res) => {
    const { search, tags, isPinned } = req.query;
    
    const query = { user: req.user._id };
    
    if (search) {
        query.$or = [
            { title: { $regex: search, $options: 'i' } },
            { content: { $regex: search, $options: 'i' } }
        ];
    }
    
    if (tags) {
        query.tags = { $in: tags.split(',') };
    }
    
    if (isPinned) {
        query.isPinned = isPinned === 'true';
    }
    
    const notes = await Note.find(query)
        .sort({ isPinned: -1, updatedAt: -1 });
    
    res.json(notes);
});

// GET /api/notes/:id
export const getNoteById = asyncHandler(async (req, res) => {
    const note = await Note.findOne({
        _id: req.params.id,
        user: req.user._id
    });
    
    if (!note) {
        res.status(404);
        throw new Error('Note not found');
    }
    
    res.json(note);
});


// POST /api/notes
export const createNote = asyncHandler(async (req, res) => {
    const { title, content, tags, isPinned } = req.body;
    
    if (!title || !content) {
        res.status(400);
        throw new Error('Please provide title and content');
    }
    
    const note = await Note.create({
        user: req.user._id,
        title,
        content,
        tags: tags || [],
        isPinned: isPinned || false
    });
    
    res.status(201).json(note);
});

// PUT /api/notes/:id
export const updateNote = asyncHandler(async (req, res) => {
    const { title, content, tags, isPinned } = req.body;
    
    const note = await Note.findOne({
        _id: req.params.id,
        user: req.user._id
    });
    
    if (!note) {
        res.status(404);
        throw new Error('Note not found');
    }
    
    note.title = title || note.title;
    note.content = content || note.content;
    note.tags = tags || note.tags;
    note.isPinned = isPinned !== undefined ? isPinned : note.isPinned;
    
    const updatedNote = await note.save();
    res.json(updatedNote);
});


// DELETE /api/notes/:id
export const deleteNote = asyncHandler(async (req, res) => {
    const note = await Note.findOneAndDelete({
        _id: req.params.id,
        user: req.user._id
    });
    
    if (!note) {
        res.status(404);
        throw new Error('Note not found');
    }
    
    res.json({ id: req.params.id });
});

// PATCH /api/notes/:id/pin
export const togglePinNote = asyncHandler(async (req, res) => {
    const note = await Note.findOne({
        _id: req.params.id,
        user: req.user._id
    });
    
    if (!note) {
        res.status(404);
        throw new Error('Note not found');
    }
    
    note.isPinned = !note.isPinned;
    await note.save();
    
    res.json(note);
});