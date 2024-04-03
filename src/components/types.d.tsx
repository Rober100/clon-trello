export type Board = {
  id: string;
  title: string;
  lists: List[];
};

export type List = {
  id: string;
  title: string;
  tasks: Task[];
};

export type Task = {
  id: string;
  title: string;
};
