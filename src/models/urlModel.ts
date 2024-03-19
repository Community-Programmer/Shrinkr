import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
  {
    originalUrl: {
      type: String,
      required: true,
    },
    shortUrlId: {
      type: String,
      required: true,
      unique: true,
    },
    shortUrl: {
      type: String,
      required: true,
      unique: true
    },
    QrData:{
      type: String,
      required: true,
    },
    timestamp: [
      {
        type: Date,
        default: Date.now,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.URL || mongoose.model("URL", urlSchema);
