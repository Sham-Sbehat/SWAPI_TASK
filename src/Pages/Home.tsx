import { Button, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <StyledWrapper spacing={4}>
      <Typography variant="h3" textAlign="center" fontWeight={600}>
        Welcome to SWAPI Explorer
      </Typography>

      <GreenContainedButton onClick={() => navigate('/query')}>
        View with React Query
      </GreenContainedButton>

      <GreenOutlinedButton onClick={() => navigate('/axios')}>
        View with Axios
      </GreenOutlinedButton>
    </StyledWrapper>
  );
};

export default HomePage;

// ------------------- styled components -------------------

const StyledWrapper = styled(Stack)(() => ({
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '80px',
  padding: '30px',
  backgroundColor: '#F0FDF4',
  borderRadius: '20px',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
}));

const GreenContainedButton = styled(Button)(() => ({
  backgroundColor: '#065F46',
  color: '#fff',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  padding: '12px 28px',
  borderRadius: '50px',
  textTransform: 'none',
  boxShadow: '0 6px 16px rgba(6, 95, 70, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#047857',
    transform: 'scale(1.05)',
    boxShadow: '0 10px 24px rgba(6, 95, 70, 0.4)',
  },
}));

const GreenOutlinedButton = styled(Button)(() => ({
  borderColor: '#065F46',
  color: '#065F46',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  padding: '12px 28px',
  borderRadius: '50px',
  textTransform: 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#ECFDF5',
    borderColor: '#047857',
    color: '#047857',
    transform: 'scale(1.05)',
  },
}));
