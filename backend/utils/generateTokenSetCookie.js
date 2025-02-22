import jwt from "jsonwebtoken";
export const generateTokenSetCookie = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.cookie("authtoken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict", // prevents csrf attack
    masAge: 7 * 24 * 60 * 60 * 1000,
  });
};


