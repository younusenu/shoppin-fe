import Link from 'next/link';
import { Container, Typography, Button } from '@mui/material';

export default function Home() {
  return (
    <Container style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h3">Apple Watch Studio</Typography>
      <Typography variant="h5" style={{ marginTop: '20px' }}>
        Customize your Apple Watch
      </Typography>
      <Link href="/customize" passHref>
        <Button variant="contained" color="primary" style={{ marginTop: '30px' }}>
          Start Customizing
        </Button>
      </Link>
    </Container>
  );
}
