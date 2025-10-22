import jwt, { SignOptions } from "jsonwebtoken";

export const generateToken = (
  jwtPayload: { email: string; id: string },
  secret: string,
  expiresIn: string
) => {
  return jwt.sign(jwtPayload, secret, { expiresIn } as SignOptions);
};

export type TJwtPayload = {
    email: string;
    id: string;
    iat: number;
    exp: number;
}

export const verifyToken = (token: string, secret: string) => {
  try {
    return jwt.verify(token, secret) as TJwtPayload;
  } catch {
    return null;
  }
};
