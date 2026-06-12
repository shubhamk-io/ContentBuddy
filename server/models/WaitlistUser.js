import mongoose from "mongoose";

const waitlistUserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      minlength: [2, "Full name must be at least 2 characters"],
      maxlength: [120, "Full name must be less than 120 characters"]
    },
    email: {
      type: String,
      required: [true, "Email address is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email address"]
    },
    joinedAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    collection: "waitlist_users",
    versionKey: false
  }
);

waitlistUserSchema.index({ email: 1 }, { unique: true });

const WaitlistUser = mongoose.model("WaitlistUser", waitlistUserSchema);

export default WaitlistUser;
