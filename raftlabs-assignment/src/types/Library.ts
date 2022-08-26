export type Author = {
    email: string;
    firstname: string;
    lastname: string;
};

export type Book = {
    title: string;
    isbn: string;
    authors: string;
    description: string;
    authorsList?: string[];
};

export type Magazine = {
    title: string;
    isbn: string;
    authors: string;
    publishedAt: string;
    authorsList?: string[];
};

export type BookMagazine = {
    title: string;
    isbn: string;
    authors: string;
    description: string;
    publishedAt: string;
}
