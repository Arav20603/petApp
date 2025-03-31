import mongoose from "mongoose";
let Schema = mongoose.Schema

const petCategoryModel = new Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
    }
}, {
    timestamps: true
})

let petModel = mongoose.model('Pet', petCategoryModel)
export default petModel