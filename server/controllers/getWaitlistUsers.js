

import md5 from "md5";
import WaitlistUser from "../models/WaitlistUser.js";

export const getWaitlistUsers = async (req, res) => {
  const users = await WaitlistUser.find()
    .sort({ joinedAt: -1 })
    .limit(8)
    .lean();

  const transformedUsers = users.map((user) => ({
    ...user,
    avatar: `https://www.gravatar.com/avatar/${md5(
      user.email.trim().toLowerCase()
    )}?d=identicon`
  }));

  res.json({
    success: true,
    count: await WaitlistUser.countDocuments(),
    users: transformedUsers
  });
};