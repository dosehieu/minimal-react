// ----------------------------------------------------------------------
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Box } from '@mui/material';

Scaler.propTypes = {
  children: PropTypes.object,
  scaleSize: PropTypes.number,
};

export default function Scaler({ children, scaleSize = 1.09 }) {
  const [isScale, setIsScale] = useState(false);
  return (
    <Box sx={{ ...(isScale && { transform: `scale(${scaleSize})`, transition: '200ms' }) }} onMouseEnter={() => setIsScale(true)} onMouseLeave={() => setIsScale(false)}>
      {children}
    </Box>
  );
}
