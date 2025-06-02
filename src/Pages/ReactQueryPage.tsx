import { useEffect, useState } from 'react';
import { usePeopleQuery } from '../hooks/usePeopleQuery';
import People from '../components/People/People';
import Pagination from '../components/Pagination/Pagination';
import BackButton from '../components/Button/BackButton';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setPeople } from '../store/peopleSlice';

const ReactQueryPage = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = usePeopleQuery(page);
  const dispatch = useAppDispatch();
  const people = useAppSelector((state) => state.people.people);
  const count = useAppSelector((state) => state.people.count);

  useEffect(() => {
    if (data) {
      dispatch(setPeople(data));
    }
  }, [data, dispatch]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <BackButton />
      <People people={people} />
      <Pagination
        page={page}
        count={Math.ceil(count / 10)}
        onChange={(_, val) => setPage(val)}
      />
    </>
  );
};

export default ReactQueryPage;
