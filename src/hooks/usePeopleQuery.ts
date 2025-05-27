import { useQuery } from '@tanstack/react-query';
import type { PeopleResponse } from '../Api/swapi';

const fetchPeople = async (page: number): Promise<PeopleResponse> => {
  const res = await fetch(`https://swapi.dev/api/people/?page=${page}`);
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json();
};

export const usePeopleQuery = (page: number) => {
  return useQuery<PeopleResponse, Error>({
    queryKey: ['people', page],
    queryFn: () => fetchPeople(page),
    // لا تضف keepPreviousData لأنه غير موجود أو يسبب الخطأ في نسختك
  });
};
