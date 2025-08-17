import { User } from './definitions';
import fs from 'fs/promises';
import path from 'path';

// Get the path to the users.json file
const usersFilePath = path.join(process.cwd(), 'users.json');

// Function to read all users from the JSON file
async function readUsers(): Promise<User[]> {
  try {
    const data = await fs.readFile(usersFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // If the file doesn't exist or is empty, return an empty array
    return [];
  }
}

// Function to write all users to the JSON file
async function writeUsers(users: User[]): Promise<void> {
  await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2));
}

// Get a single user by email
export async function getUser(email: string): Promise<User | undefined> {
  const users = await readUsers();
  console.log('Searching for user in users.json:', email);
  return users.find((user) => user.email === email);
}

// Create a new user and save to the file
export async function createUser(user: User): Promise<void> {
  const users = await readUsers();
  users.push(user);
  await writeUsers(users);
  console.log('User created and saved to users.json:', user);
}
