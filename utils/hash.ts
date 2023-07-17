import { compare, hashSync, genSaltSync } from 'bcrypt';

const SALT = parseInt(process.env.PASSWORD_SALT!) || 10;

export async function hashPassword(password: string) {
  const salt = genSaltSync(SALT)
  const passwordHash = hashSync(password, salt)

  return passwordHash;
}

export async function isPasswordValid(password: string, hashedPassword: string) {
  const isValid = await compare(password, hashedPassword);

  return isValid
}