import mongoose from "mongoose";

interface connectionI {
  isConnected: boolean | number;
}

const connection: connectionI = {
  isConnected: false,
};

async function connect() {
  if (connection.isConnected) {
    return;
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      return;
    }
    await mongoose.disconnect();
  }

  const db = await mongoose.connect(process.env.MONGODB_URI!);
  connection.isConnected = db.connections[0].readyState;
}

async function disconect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === "production") {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log("not disconnected");
    }
  }
}

const db = { connect, disconect };
export default db;
