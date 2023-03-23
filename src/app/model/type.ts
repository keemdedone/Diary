export type Post = {
  title?: string;
  text?: string;
  date?: string;
};

export type Todo = {
  todo: DropDrag[];
  done: DropDrag[];
};

export type DropDrag = {
  value: string;
  role: string;
  canMove: boolean;
};
