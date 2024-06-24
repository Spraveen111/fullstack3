import mongoose from "mongoose";

export async function main() {
  const uri =
    

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = mongoose.connection;
    const colllection = db.collection("user_details");
    console.log("Mongo Connected");
    return colllection;


    
  } catch (error) {
    console.log(error);
  }
}
