export type Quizz = {
  title: string;
  questions: Question[];
  results: Result;
}

type Question = {
  id: number,
  question: string,
  options: Option[]
}

type Option = {
  id: number;
  name:string;
  alias:string;
  selected: boolean;
}

type Result = {
  A: string;
  B: string;
}
