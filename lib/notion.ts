import { Client } from "@notionhq/client";

const notionToken = process.env.NOTION_TOKEN;

export const notionClient = notionToken ? new Client({ auth: notionToken }) : null;

export const notionDatabaseId = process.env.NOTION_DATABASE_ID;

export function ensureNotionReady() {
  if (!notionClient || !notionDatabaseId) {
    throw new Error("Notion credentials are not configured.");
  }
}
