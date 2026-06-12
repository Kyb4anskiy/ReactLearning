type Film = {
  id: number;
  name: string;
  rating: number;
  ageLimit: string;
  year: number;
};

type Task = {
  id: number;
  name: string;
  compliteStatus: boolean;
};

type UserRole = "user" | "admin";

type User = {
  fio: string;
  role: UserRole;
};
