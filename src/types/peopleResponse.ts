// src/types/peopleResponse.ts
import type { Person } from './person';

export interface PeopleResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Person[];
}
