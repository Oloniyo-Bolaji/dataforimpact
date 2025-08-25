import { Resend } from "resend";
import { Newsletter } from "@/emails/Newsletter";
import { NextResponse } from "next/server";
import { db } from "@/lib/database";
import { suscribersTable } from "@/lib/database/schema";
import { eq } from "drizzle-orm";
import { client } from "@/src/sanity/client";
import { getLatestReadyNewsletter } from "@/src/sanity/queries";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const newsletter = await client.fetch(
      getLatestReadyNewsletter,
      {},
      options
    );
    const subscribers = await db.select().from(suscribersTable);

    if (!subscribers || subscribers.length === 0) {
      return NextResponse.json(
        { error: "No subscribers found" },
        { status: 404 }
      );
    }

    for (const sub of subscribers) {
      await resend.emails.send({
        from: "Your Newsletter <onboarding@resend.dev>", // Change to your verified domain later
        to: sub.email,
        subject: newsletter.subject,
        react: Newsletter({
          subject: newsletter.subject,
          body: newsletter.body,
          unsubscribeUrl: `https://yourdomain.com/unsubscribe/${sub.unsubscribe_token}`, //change the yourdomain.com after buying domain
        }),
      });
    }

    return NextResponse.json({
      success: true,
      message: "Newsletter sent successfully!",
    });
  } catch (error) {
    console.error("Error sending newsletter:", error);
    return NextResponse.json(
      { error: "Failed to send newsletter" },
      { status: 500 }
    );
  }
}
