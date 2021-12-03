-- CreateTable
CREATE TABLE "encrypted_name" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "encrypted_name_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "encrypted_name_id_key" ON "encrypted_name"("id");
