export type Post = {
    id?: string;
    title: string;
    content: string;
    grade?: string
    published?: boolean;
    authorId?: string;
    note: string[]
  };