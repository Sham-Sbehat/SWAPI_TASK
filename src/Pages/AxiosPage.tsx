// src/pages/AxiosPage.tsx
import { useEffect, useState } from 'react';
import { fetchPeopleAxios } from '../Api/swapi';
import People from '../components/People/People';
import Pagination from '../components/Pagination/Pagination';
import type { Person } from '../types/person';
import BackButton from '../components/Button/BackButton';


const AxiosPage = () => {
  const [page, setPage] = useState(1);
  const [people, setPeople] = useState<Person[]>([]);
  const [total, setTotal] = useState(1);

  useEffect(() => {
    fetchPeopleAxios(page).then((res) => {
      setPeople(res.results);
      setTotal(Math.ceil(res.count / 10));
    });
  }, [page]);

  return (
    <>
      <BackButton/>
      <People people={people} />
      <Pagination page={page} count={total} onChange={(_, val) => setPage(val)} />
    </>
  );
};

export default AxiosPage;
