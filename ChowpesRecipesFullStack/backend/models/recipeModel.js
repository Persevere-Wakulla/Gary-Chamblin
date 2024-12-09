import mongoose from 'mongoose';


const recipeSchema = mongoose.Schema({

        name: {
                type: String,
                required: true
        },
        caloriesPerServing: String,
        cookTimeMinutes: String,
        cuisine: String,
        difficulty: String,
        image: {
                type: String,
        },
        ingredients: [String],
        instructions: [String],
        mealType: [String],
        prepTimeMinutes: String,
        // rating: Number,
        // reviewCount: Number,
        servings: Number,
        tags: [String],
        userId: {
                type: mongoose.SchemaTypes.ObjectId,
                ref: 'users',
                required: true
        },
        createdAt: {
                type: Date,
                default: () => new Date(),
                required: true,
                immutable: true
        }
})

export const Recipe = mongoose.model('recipes', recipeSchema)