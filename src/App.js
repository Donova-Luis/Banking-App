import React, { useState } from 'react';
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

// --- Mock Data ---
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

/**
 * Main Banking Dashboard Application
 */
const App = () => {
  // State for form inputs
  const [depositAmount, setDepositAmount] = useState('');
  const [sendAmount, setSendAmount] = useState('');
  const [recipientAccount, setRecipientAccount] = useState('');

  const handleDeposit = (e) => {
    e.preventDefault();
    if (depositAmount) {
      alert(`Deposited $${depositAmount}`);
      setDepositAmount('');
    }
  };

  const handleSendMoney = (e) => {
    e.preventDefault();
    if (sendAmount && recipientAccount) {
      alert(`Sent $${sendAmount} to account ${recipientAccount}`);
      setSendAmount('');
      setRecipientAccount('');
    }
  };

  const handleLogout = () => {
    alert('Logout functionality - would redirect to login page');
    console.log("User logged out.");
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
            Welcome, {mockUser.firstName}
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
                ${mockUser.accountBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </Typography>
              <Typography color="text.secondary">
                Account Number: {mockUser.accountNumber}
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
                  required
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
                  required
                />
                <TextField
                  label="Amount to Send"
                  type="number"
                  fullWidth
                  value={sendAmount}
                  onChange={(e) => setSendAmount(e.target.value)}
                  InputProps={{ startAdornment: <Typography sx={{ mr: 1 }}>$</Typography> }}
                  sx={{ mb: 2 }}
                  required
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

export default App;