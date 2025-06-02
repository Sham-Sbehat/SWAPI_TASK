import {
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import {
  StyledTable,
  StyledTableHead,
  StyledTableRow,
} from "./People.styles";
import type { Person } from "../../types/person"; // ✅ using global type

interface Props {
  people: Person[];
}

export default function PeopleTable({ people }: Props) {
  return (
    <TableContainer component={Paper} sx={{ marginTop: 4 }}>
      <StyledTable>
        <StyledTableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Height (cm)</TableCell>
            <TableCell>Mass (kg)</TableCell>
            <TableCell>Birth Year</TableCell>
            <TableCell>Gender</TableCell>
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {people.map((person, index) => (
            <StyledTableRow key={index}>
              <TableCell>{person.name}</TableCell>
              <TableCell>{person.height}</TableCell>
              <TableCell>{person.mass}</TableCell>
              <TableCell>{person.birth_year}</TableCell>
              <TableCell>{person.gender}</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
}
