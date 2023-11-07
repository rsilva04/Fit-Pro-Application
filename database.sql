CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "programs" (
    "id" SERIAL PRIMARY KEY,
    "3day" BOOLEAN,
    "4day" BOOLEAN,
    "5day" BOOLEAN,
    "user_id" VARCHAR (80)
);

CREATE TABLE "comments" (
    "id" SERIAL PRIMARY KEY,
    "comments" VARCHAR (1000),
    "user_id" VARCHAR (80)

    ALTER TABLE "comments"
ADD "completed_at" timestamp default now();

ALTER TABLE "comments"
ADD "workout_type" VARCHAR (255);
);

