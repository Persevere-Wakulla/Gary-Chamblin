import mongoose from 'mongoose';


const commentSchema = mongoose.Schema({
    _id:false,
        email: {
            type: String,
            required: true
        },
        comment: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: () => new Date(),
            required: true,
           immutable: true
        }
          
      
});

const userSchema = mongoose.Schema({
    image: {
        type: String,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    zipCode: {
        type: Number,
    },
    phone: {
        type: String,
    },
    favorites: {
        type: [
            mongoose.SchemaTypes.ObjectId
        ],
        ref: 'recipes',
    },
    recipesCreated: {
        type: [
            mongoose.SchemaTypes.ObjectId
        ],
        ref: 'recipes'
    
    },
    comments: [commentSchema]

});

export const User = mongoose.model('users', userSchema)