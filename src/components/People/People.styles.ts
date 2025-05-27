// src/components/PeopleTable/PeopleTable.styles.ts
import { styled } from "@mui/material/styles";
import { Table, TableHead, TableRow } from "@mui/material";

export const StyledTable = styled(Table)(({ theme }) => ({
  minWidth: 650,
  backgroundColor: "#f9fafb",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: theme.shadows[3],
}));
export const StyledTableHead = styled(TableHead)(() => ({
  backgroundColor: "#065F46", 
  "& .MuiTableCell-head": {
    color: "#fff",
    fontWeight: 600,
    fontSize: "16px",
  },
}));


export const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#f1f5f9",
  },
  "&:hover": {
    backgroundColor: "#e2e8f0",
  },
}));
