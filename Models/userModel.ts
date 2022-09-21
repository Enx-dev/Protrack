import mongoose, { ObjectId } from "mongoose";

interface IUser {
  name: {
    firstName: string;
    lastName: string;
  };
  email: string;
  tel: string;
  country: string;
  teams: any[];
}

const userSchema = new mongoose.Schema<IUser>({
  name: {
    firstName: String,
    lastName: String,
  },
  email: { type: String, required: true },
  tel: String,
  country: String,
  teams: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teams",
    },
  ],
});

interface TeamI {
  _id: ObjectId;
  members: any[];
  creator: ObjectId;
  projects: [
    {
      _id: ObjectId;
      name: string;
      tasks: [
        {
          _id: ObjectId;
          name: string;
          status: "pending" | "active" | "completed";
          assignedTo: ObjectId;
          dateCreated: Date;
        }
      ];
    }
  ];
  dateFormed: Date;
}

const teamSchema = new mongoose.Schema<TeamI>({
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  projects: [
    {
      name: String,
      tasks: [
        {
          name: String,
          statues: String,
          assignedto: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
          dateCreated: Date,
        },
      ],
    },
  ],
  dateFormed: Date,
});

export const UserModel =
  mongoose.models.Users || mongoose.model("Users", userSchema);

export const TeamModel =
  mongoose.models.TeamModel || mongoose.model("Teams", teamSchema);
