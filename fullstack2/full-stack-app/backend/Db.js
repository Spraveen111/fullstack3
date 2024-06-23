import mongoose from "mongoose";

export async function main() {
  const uri =
    "mongodb+srv://praveencan111:2br9evIzOS0NGLOz@vegitablescluster.z4uwiqi.mongodb.net/Vegitables?retryWrites=true&w=majority";

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
