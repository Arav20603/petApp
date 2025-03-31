import Pet from "../../models/petCategory.js";

// Create a new pet category
export const createPet = async (req, res) => {
    const { name, desc } = req.body;

    try {
        const newPet = new Pet({ name, desc });
        await newPet.save();
        res.status(201).json(newPet);
    } catch (error) {
        res.status(400).json({ message: "Error creating pet category" });
    }
};

// Get all pet categories
export const getPets = async (req, res) => {
    try {
        const pets = await Pet.find();
        res.status(200).json(pets);
    } catch (error) {
        res.status(500).json({ message: "Error fetching pet categories" });
    }
};
