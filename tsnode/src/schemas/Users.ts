import mongoose from 'mongoose';

interface UserInterface extends mongoose.Document {
  email?: string;
  firstName?: string;
  lastName?: string;
}

const UserSchema = new mongoose.Schema(
  {
    email: String,
    firstName: String,
    lastName: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<UserInterface>('User', UserSchema);
