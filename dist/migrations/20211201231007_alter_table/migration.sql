/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `encrypted_name` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "encrypted_name_id_key" ON "encrypted_name"("id");
