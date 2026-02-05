import { Client } from "@notionhq/client";

export const notionDatabaseId = process.env.NOTION_DATABASE_ID;

export const notionClient = process.env.NOTION_API_KEY
  ? new Client({ auth: process.env.NOTION_API_KEY })
  : null;

export function ensureNotionReady() {
  if (!process.env.NOTION_API_KEY) {
    throw new Error("NOTION_API_KEY is missing");
  }
  if (!process.env.NOTION_DATABASE_ID) {
    throw new Error("NOTION_DATABASE_ID is missing");
  }
}

