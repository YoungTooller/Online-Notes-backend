import mongoose from 'mongoose';

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a title'],
        trim: true,
        maxlength: [100, 'Title cannot be more than 100 characters']
    },
    content: {
        type: String,
        required: [true, 'Please provide note content']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    tags: {
        type: [String],
        default: [],
        validate: {
            validator: function(tags) {
                return tags.every(tag => tag.length <= 20);
            },
            message: 'Each tag must be 20 characters or less'
        }
    },
    isPinned: {
        type: Boolean,
        default: false
    }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

NoteSchema.pre('save', function(next) {
    this.updatedAt = new Date();
    next();
});

NoteSchema.virtual('shortContent').get(function() {
    return this.content.length > 100 
        ? this.content.substring(0, 100) + '...' 
        : this.content;
});

export default mongoose.model('Note', NoteSchema);