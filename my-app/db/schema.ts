import { pgTable, text, varchar, uuid, integer, boolean, timestamp, decimal, jsonb } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// -------- ENUMS --------
export const userRole = ["USER", "ADMIN"] as const;
export const carStatus = ["AVAILABLE", "UNAVAILABLE", "SOLD"] as const;
export const dayOfWeek = ["MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"] as const;
export const bookingStatus = ["PENDING","CONFIRMED","COMPLETED","CANCELLED","NO_SHOW"] as const;

// -------- USER TABLE --------
export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  clerkUserId: varchar("clerkUserId").unique().notNull(),
  email: varchar("email").unique().notNull(),
  name: varchar("name"),
  imageUrl: varchar("imageUrl"),
  phone: varchar("phone"),
  role: varchar("role", { enum: userRole }).default("USER"),
  createdAt: timestamp("createdAt").defaultNow(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});

// USER RELATIONS
export const userRelations = relations(users, ({ many }) => ({
  savedCars: many(userSavedCars),
  testDrives: many(testDriveBookings),
}));

// -------- CARS TABLE --------
export const cars = pgTable("cars", {
  id: uuid("id").primaryKey().defaultRandom(),
  make: varchar("make").notNull(),
  model: varchar("model").notNull(),
  year: integer("year").notNull(),
  price: decimal("price").notNull(),
  mileage: integer("mileage").notNull(),
  color: varchar("color").notNull(),
  fuelType: varchar("fuelType").notNull(),
  transmission: varchar("transmission").notNull(),
  bodyType: varchar("bodyType").notNull(),
  seats: integer("seats"),
  description: text("description").notNull(),
  status: varchar("status", { enum: carStatus }).default("AVAILABLE"),
  featured: boolean("featured").default(false),
  images: jsonb("images").$type<string[]>().notNull(),
  createdAt: timestamp("createdAt").defaultNow(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});

// CAR RELATIONS
export const carRelations = relations(cars, ({ many }) => ({
  savedBy: many(userSavedCars),
  testDriveBookings: many(testDriveBookings),
}));

// -------- DEALERSHIP INFO --------
export const dealershipInfo = pgTable("dealershipInfo", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name").default("Vehiql Motors"),
  address: varchar("address").default("69 Car Street, Autoville, CA 69420"),
  phone: varchar("phone").default("+1 (555) 123-4567"),
  email: varchar("email").default("contact@vehiql.com"),
  createdAt: timestamp("createdAt").defaultNow(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});

// RELATION
export const dealershipRelations = relations(dealershipInfo, ({ many }) => ({
  workingHours: many(workingHours),
}));

// -------- WORKING HOURS --------
export const workingHours = pgTable("workingHours", {
  id: uuid("id").primaryKey().defaultRandom(),
  dealershipId: uuid("dealershipId").notNull().references(() => dealershipInfo.id),
  dayOfWeek: varchar("dayOfWeek", { enum: dayOfWeek }).notNull(),
  openTime: varchar("openTime").notNull(),
  closeTime: varchar("closeTime").notNull(),
  isOpen: boolean("isOpen").default(true),
  createdAt: timestamp("createdAt").defaultNow(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});

// -------- USER SAVED CAR --------
export const userSavedCars = pgTable("userSavedCars", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("userId").notNull().references(() => users.id),
  carId: uuid("carId").notNull().references(() => cars.id),
  savedAt: timestamp("savedAt").defaultNow(),
});

// -------- TEST DRIVE BOOKING --------
export const testDriveBookings = pgTable("testDriveBookings", {
  id: uuid("id").primaryKey().defaultRandom(),
  carId: uuid("carId").notNull().references(() => cars.id),
  userId: uuid("userId").notNull().references(() => users.id),
  bookingDate: timestamp("bookingDate").notNull(),
  startTime: varchar("startTime").notNull(),
  endTime: varchar("endTime").notNull(),
  status: varchar("status", { enum: bookingStatus }).default("PENDING"),
  notes: text("notes"),
  createdAt: timestamp("createdAt").defaultNow(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});
