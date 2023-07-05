import { CreateBook } from "../protocols/book";
import { CreateReview } from "../protocols/review";
import prisma from "../database/index";

export async function getBooks() {
  const result = await prisma.books.findMany();
  return result;
}

export async function getBook(id: number) {
  const result = await prisma.books.findFirst({
    where: {
      id
    }
  });
  return result;
}

export async function createBook(book: CreateBook) {
  const books = await prisma.books.create({
    data: book
  });

  return books;
}

export async function reviewBook(book: CreateReview) {
  const id = book.bookId;
  const data = {
    review: book.review,
    grade: book.grade
  }

  const result = await prisma.books.update({
    data: data,
    where: {
     id
    }
  });
  return result;
}; 