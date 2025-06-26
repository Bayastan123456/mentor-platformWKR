/*
  Warnings:

  - Added the required column `receiverId` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `senderId` on the `Message` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "receiverId" INTEGER NOT NULL,
DROP COLUMN "senderId",
ADD COLUMN     "senderId" INTEGER NOT NULL;
