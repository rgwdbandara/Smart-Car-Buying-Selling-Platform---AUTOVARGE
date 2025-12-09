CREATE TABLE "cars" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"make" varchar NOT NULL,
	"model" varchar NOT NULL,
	"year" integer NOT NULL,
	"price" numeric NOT NULL,
	"mileage" integer NOT NULL,
	"color" varchar NOT NULL,
	"fuelType" varchar NOT NULL,
	"transmission" varchar NOT NULL,
	"bodyType" varchar NOT NULL,
	"seats" integer,
	"description" text NOT NULL,
	"status" varchar DEFAULT 'AVAILABLE',
	"featured" boolean DEFAULT false,
	"images" jsonb NOT NULL,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "dealershipInfo" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar DEFAULT 'Vehiql Motors',
	"address" varchar DEFAULT '69 Car Street, Autoville, CA 69420',
	"phone" varchar DEFAULT '+1 (555) 123-4567',
	"email" varchar DEFAULT 'contact@vehiql.com',
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "testDriveBookings" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"carId" uuid NOT NULL,
	"userId" uuid NOT NULL,
	"bookingDate" timestamp NOT NULL,
	"startTime" varchar NOT NULL,
	"endTime" varchar NOT NULL,
	"status" varchar DEFAULT 'PENDING',
	"notes" text,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "userSavedCars" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"userId" uuid NOT NULL,
	"carId" uuid NOT NULL,
	"savedAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"clerkUserId" varchar NOT NULL,
	"email" varchar NOT NULL,
	"name" varchar,
	"imageUrl" varchar,
	"phone" varchar,
	"role" varchar DEFAULT 'USER',
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now(),
	CONSTRAINT "users_clerkUserId_unique" UNIQUE("clerkUserId"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "workingHours" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"dealershipId" uuid NOT NULL,
	"dayOfWeek" varchar NOT NULL,
	"openTime" varchar NOT NULL,
	"closeTime" varchar NOT NULL,
	"isOpen" boolean DEFAULT true,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "testDriveBookings" ADD CONSTRAINT "testDriveBookings_carId_cars_id_fk" FOREIGN KEY ("carId") REFERENCES "public"."cars"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "testDriveBookings" ADD CONSTRAINT "testDriveBookings_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "userSavedCars" ADD CONSTRAINT "userSavedCars_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "userSavedCars" ADD CONSTRAINT "userSavedCars_carId_cars_id_fk" FOREIGN KEY ("carId") REFERENCES "public"."cars"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "workingHours" ADD CONSTRAINT "workingHours_dealershipId_dealershipInfo_id_fk" FOREIGN KEY ("dealershipId") REFERENCES "public"."dealershipInfo"("id") ON DELETE no action ON UPDATE no action;