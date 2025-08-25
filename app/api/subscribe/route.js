import { NextResponse } from "next/server";
import { db } from "@/lib/database";
import { suscribersTable } from "@/lib/database/schema";
import { eq } from "drizzle-orm";
import crypto from "crypto";

export async function POST(req) {
  try {
    const { email } = await req.json();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // If exists & was unsubscribed, flip back to subscribed (keep token)
    const existing = await db
      .select()
      .from(suscribersTable)
      .where(eq(suscribersTable.email, email));
    if (existing.length) {
      await db
        .update(suscribersTable)
        .set({ isSubscribed: true })
        .where(eq(suscribersTable.email, email));
      return NextResponse.json({ message: "You're back to being a suscriber 🎉" });
    }

    const token = crypto.randomBytes(20).toString("hex");
    await db.insert(suscribersTable).values({ email, unsubscribeToken: token });

    return NextResponse.json({ message: "Subscribed ✅" });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
