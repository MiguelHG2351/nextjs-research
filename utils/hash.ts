import { compare, hash } from 'bcrypt';

const HASH = parseInt(process.env.PASSWORD_HASH!) || 10;

export async function hashPassword(password: string) {
  const passwordHash = await hash(password, HASH)
  return passwordHash;
}

export async function isPasswordValid(password: string, hashedPassword: string) {
  const isValid = await compare(password, hashedPassword);

  return isValid
}