import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      variant="outlined"
      startIcon={<ArrowBackIcon />}
      onClick={() => navigate(-1)}
      sx={{
        color: '#065F46',
        borderColor: '#065F46',
        width: '120px',
        '&:hover': {
          backgroundColor: '#065F46',
          color: '#fff',
        },
      }}
    >
      Back
    </Button>
  );
};

export default BackButton;
