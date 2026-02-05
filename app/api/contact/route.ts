import { NextResponse } from "next/server";
import { ensureNotionReady, notionClient, notionDatabaseId } from "@/lib/notion";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  organization?: string;
  message?: string;
  source?: string;
};

const isValidEmail = (value: string) => /\S+@\S+\.\S+/.test(value);

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as ContactPayload;

    if (!data.name || !data.email || !data.message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    if (!isValidEmail(data.email)) {
      return NextResponse.json({ error: "Invalid email." }, { status: 400 });
    }

    ensureNotionReady();

    await notionClient?.pages.create({
      parent: { database_id: notionDatabaseId as string },
      properties: {
        Name: {
          title: [{ text: { content: data.name } }]
        },
        Email: {
          email: data.email
        },
        Phone: {
          rich_text: [{ text: { content: data.phone || "" } }]
        },
        Organization: {
          rich_text: [{ text: { content: data.organization || "" } }]
        },
        Message: {
          rich_text: [{ text: { content: data.message } }]
        },
        Source: {
          select: { name: data.source || "Website" }
        },
        Status: {
          select: { name: "New" }
        },
        Priority: {
          select: { name: "Normal" }
        },
        "Internal Notes": {
          rich_text: [{ text: { content: "" } }]
        },
        "Received At": {
          date: { start: new Date().toISOString() }
        }
      }
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: "Unable to submit." }, { status: 500 });
  }
}
