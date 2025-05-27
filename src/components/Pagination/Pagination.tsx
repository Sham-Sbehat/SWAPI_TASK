// src/components/Pagination/Pagination.tsx
import { Pagination as MuiPagination } from '@mui/material';
import { StyledPaginationWrapper } from './Pagination.styles';

type Props = {
  page: number;
  count: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
};

const Pagination = ({ page, count, onChange }: Props) => {
  return (
    <StyledPaginationWrapper>
      <MuiPagination count={count} page={page} onChange={onChange} />
    </StyledPaginationWrapper>
  );
};

export default Pagination;
