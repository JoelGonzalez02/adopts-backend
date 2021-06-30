import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
    name: String,
    imgUrl: String,
    age: Number,
    location: String,
})

export default mongoose.model('cards', cardSchema)