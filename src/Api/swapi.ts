// src/api/swapi.ts
import axiosClient from './axiosClient';
import type { Person } from '../types/person';

export interface PeopleResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Person[];
}

export const fetchPeopleAxios = async (page: number): Promise<PeopleResponse> => {
  const response = await axiosClient.get<PeopleResponse>(`people/?page=${page}`);
  return response.data;
};
