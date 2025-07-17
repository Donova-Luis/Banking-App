import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Container,
  Grid,
  Paper,
  Box,
  Divider,
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SendIcon from '@mui/icons-material/Send';
import AddCardIcon from '@mui/icons-material/AddCard';

// --- Mock Data (replace with API calls) ---
const mockUser = {
  firstName: 'Donova',
  accountNumber: 'ACC123456789',
  accountBalance: 5250.75,
};

const mockTransactions = [
  { id: 1, type: 'deposit', description: 'Paycheck from work', amount: 2500.00, date: '2024-07-15' },
  { id: 2, type: 'transfer', description: 'Sent to Jane Doe', amount: -150.50, date: '2024-07-14' },
  { id: 3, type: 'withdrawal', description: 'Groceries Store', amount: -85.25, date: '2024-07-12' },
  { id: 4, type: 'deposit', description: 'Online sale refund', amount: 35.00, date: '2024-07-11' },
];
// --- End of Mock Data ---


/**
 * Main Dashboard Component
 * This component is now a "dumb" component that just displays data.
 * It receives user data and a logout handler from its parent.
 */
const Dashboard = ({ user, handleLogout }) => {
  // State for form inputs
  const [depositAmount, setDepositAmount] = useState('');
  const [sendAmount, setSendAmount] = useState('');
  const [recipientAccount, setRecipientAccount] = useState('');

  const handleDeposit = (e) => {
    e.preventDefault();
    // In a real app, you would call your API here
    alert(`Deposited $${depositAmount}`);
    setDepositAmount('');
  };

  const handleSendMoney = (e) => {
    e.preventDefault();
    // In a real app, you would call your API here
    alert(`Sent $${sendAmount} to account ${recipientAccount}`);
    setSendAmount('');
    setRecipientAccount('');
  };

  return (
    <Box sx={{ backgroundColor: '#f4f6f8', minHeight: '100vh' }}>
      {/* AppBar with Logout */}
      <AppBar position="static" color="primary" elevation={1}>
        <Toolbar>
          <AccountBalanceWalletIcon sx={{ mr: 2 }} />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Donova Bank
          </Typography>
          <Typography sx={{ mr: 2 }}>
            Welcome, {user?.firstName || 'Guest'}
          </Typography>
          <IconButton color="inherit" aria-label="Logout" onClick={handleLogout}>
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Main Container */}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>

          {/* Account Summary Panel */}
          <Grid item xs={12}>
            <Paper sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h6" color="text.secondary">
                Total Balance
              </Typography>
              <Typography component="p" variant="h4" sx={{ fontWeight: 'bold', my: 1 }}>
                ${user?.accountBalance?.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) || '0.00'}
              </Typography>
              <Typography color="text.secondary">
                Account Number: {user?.accountNumber || 'N/A'}
              </Typography>
            </Paper>
          </Grid>

          {/* Deposit Panel */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h6" gutterBottom>Deposit Funds</Typography>
              <Divider sx={{ mb: 2 }} />
              <Box component="form" onSubmit={handleDeposit} noValidate>
                <TextField
                  label="Amount to Deposit"
                  type="number"
                  fullWidth
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(e.target.value)}
                  InputProps={{ startAdornment: <Typography sx={{ mr: 1 }}>$</Typography> }}
                  sx={{ mb: 2 }}
                />
                <Button type="submit" variant="contained" fullWidth startIcon={<AddCardIcon />}>
                  Deposit
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* Send Money Panel */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h6" gutterBottom>Send Money</Typography>
              <Divider sx={{ mb: 2 }} />
              <Box component="form" onSubmit={handleSendMoney} noValidate>
                <TextField
                  label="Recipient's Account Number"
                  fullWidth
                  value={recipientAccount}
                  onChange={(e) => setRecipientAccount(e.target.value)}
                  sx={{ mb: 2 }}
                />
                <TextField
                  label="Amount to Send"
                  type="number"
                  fullWidth
                  value={sendAmount}
                  onChange={(e) => setSendAmount(e.target.value)}
                  InputProps={{ startAdornment: <Typography sx={{ mr: 1 }}>$</Typography> }}
                  sx={{ mb: 2 }}
                />
                <Button type="submit" variant="contained" fullWidth startIcon={<SendIcon />}>
                  Send Money
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* Transaction History Panel */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h6" gutterBottom>Transaction History</Typography>
              <Divider sx={{ mb: 1 }} />
              <List>
                {mockTransactions.map((tx) => (
                  <ListItem key={tx.id} divider>
                    <ListItemIcon>
                      <Avatar sx={{ 
                        bgcolor: tx.amount > 0 ? 'success.light' : 'error.light',
                        color: tx.amount > 0 ? 'success.dark' : 'error.dark'
                      }}>
                        {tx.amount > 0 ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
                      </Avatar>
                    </ListItemIcon>
                    <ListItemText
                      primary={tx.description}
                      secondary={new Date(tx.date).toLocaleDateString()}
                    />
                    <Typography 
                      variant="body1" 
                      sx={{ fontWeight: 'bold', color: tx.amount > 0 ? 'success.dark' : 'error.dark' }}
                    >
                      {tx.amount > 0 ? '+' : ''}${Math.abs(tx.amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};


/**
 * Parent Component (DashboardPage)
 * This component manages state and logic, like fetching user data and handling logout.
 * It passes the necessary data down to the Dashboard component.
 */
const DashboardPage = () => {
    const navigate = useNavigate();
    // In a real app, user data would come from an API call after login
    // or from a global state management library (like Context or Redux).
    const [user, setUser] = useState(mockUser);

    const handleLogout = () => {
        // Clear user session (e.g., remove auth token from localStorage)
        localStorage.removeItem('authToken');
        console.log("User logged out.");
        // Redirect to the login page
        navigate('/login');
    };

    // You could have a useEffect here to fetch user data if it wasn't available
    // useEffect(() => {
    //   const fetchUserData = async () => {
    //     // const data = await api.getUser();
    //     // setUser(data);
    //   };
    //   fetchUserData();
    // }, []);

    if (!user) {
        return <Typography>Loading...</Typography>; // Or a loading spinner
    }

    return <Dashboard user={user} handleLogout={handleLogout} />;
};

/**
 * App Component
 * This is the main entry point that includes the Router provider.
 * This fixes the "useNavigate() may be used only in the context of a <Router>" error.
 */
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* A placeholder for the login page to make navigation work */}
        <Route path="/login" element={<Typography variant="h4" align="center" sx={{mt: 5}}>Login Page</Typography>} />
        
        {/* The main route for the dashboard */}
        <Route path="/" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;