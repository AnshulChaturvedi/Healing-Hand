import { Schema, model } from "mongoose";
import { hash, compare } from "bcryptjs";
import { sign } from "jsonwebtoken";


const userSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: [true, "first name is required"],
      maxlength: 32,
    },
    lastName: {
      type: String,
      trim: true,
      required: [true, "last name is required"],
      maxlength: 32,
    },
    email: {
      type: String,
      trim: true,
      required: [true, "e-mail is required"],
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please add a valid email",
      ],
    },
    password: {
      type: String,
      trim: true,
      required: [true, "password is required"],
      minlength: [6, "password must have at least (6) caracters"],
    },

    role: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

//encrypting password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await hash(this.password, 10);
});

// compare user password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await compare(enteredPassword, this.password);
};

// return a JWT token
userSchema.methods.getJwtToken = function () {
  return sign({ id: this.id }, process.env.JWT_SECRET, {
    expiresIn: 3600,
  });
};

export default model("User", userSchema);