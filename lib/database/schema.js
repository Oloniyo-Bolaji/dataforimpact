import {
  integer,
  uuid,
  text,
  pgTable,
  varchar,
  timestamp,
  boolean,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const suscribersTable = pgTable("suscribers", {
  id: uuid("id").primaryKey().defaultRandom().notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  isSubscribed: boolean("is_subscribed").default(true).notNull(),
  unsubscribeToken: text("unsubscribe_token").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
