import mongoose from 'mongoose';

export async function connect() {
    try {
        await mongoose.connect('mongodb+srv://Paim:Gabyluiz28*@cluster0.npcwa.mongodb.net/ts-app-tutorial?retryWrites=true&w=majority', {
            useNewUrlParser: true
        });
        console.log('>>> Database connected');
    }
    catch {
        console.log('Error');
    }
}
