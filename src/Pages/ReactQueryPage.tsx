// src/pages/ReactQueryPage.tsx
import { useState } from 'react';
import { usePeopleQuery } from '../hooks/usePeopleQuery';
import People from '../components/People/People';
import Pagination from '../components/Pagination/Pagination';
import BackButton from '../components/Button/BackButton';

const ReactQueryPage = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = usePeopleQuery(page);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <BackButton/>
      <People people={data?.results || []} />
      <Pagination page={page} count={Math.ceil((data?.count || 1) / 10)} onChange={(_, val) => setPage(val)} />
    </>
  );
};

export default ReactQueryPage;
