import { NextResponse } from "next/server";
import { db } from "@/lib/database";
import { suscribersTable } from "@/lib/database/schema";
import { eq } from "drizzle-orm";

export async function POST(req) {
  try {
    const { token } = await req.json();
    if (!token)
      return NextResponse.json({ error: "Missing token" }, { status: 400 });

    await db
      .update(suscribersTable)
      .set({ isSubscribed: false })
      .where(eq(suscribersTable.unsubscribeToken, token));

    return NextResponse.json({ message: "You have been unsubscribed" });
  } catch (e) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
