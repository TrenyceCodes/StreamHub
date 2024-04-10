import mongoose from "mongoose";

export const mongoConnection = async () => {
    const databaseConnect = await mongoose.connect(process.env.MONGODB_DB as string);

    try {
        if (databaseConnect) {
            console.log("Successfully connected to MongoDB");
        }
    } catch (error) {
        return console.error("Problem connecting to mongodb", error);
    }
}