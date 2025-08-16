import { Client, Databases } from "appwrite";
import conf from "./config";

// Initialize Appwrite client
const client = new Client()
  .setEndpoint(conf.appwrite_url)
  .setProject(conf.project_id);

// Export Databases instance
export const databases = new Databases(client);
