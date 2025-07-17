# Donova Bank - Banking Dashboard

A clean, modern banking dashboard built with React and Material-UI that provides essential banking functionality including account management, fund transfers, and transaction history.

## Features

- **Account Balance Display**: Clear view of current account balance and account number
- **Deposit Funds**: Simple form to add money to account
- **Send Money**: Transfer funds to other accounts
- **Transaction History**: Complete transaction history with visual indicators
- **Responsive Design**: Mobile-friendly interface using Material-UI
- **Modern UI**: Clean, intuitive dashboard design

## Technology Stack

- **React 18** - Frontend framework
- **Material-UI (MUI)** - UI component library and icons
- **JavaScript ES6+** - Modern JavaScript features

## Project Structure

```
banking-app/
├── public/
│   ├── index.html          # Main HTML template
│   ├── manifest.json       # Web app manifest
│   └── favicon.ico         # App favicon
├── src/
│   ├── App.js              # Main dashboard component
│   └── index.js            # React entry point
├── package.json            # Project dependencies and scripts
└── README.md              # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd banking-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Dashboard Features

### Account Summary
- Displays current balance: **$5,250.75**
- Shows account number: **ACC123456789**
- Welcome message for user "Donova"

### Banking Operations
1. **Deposit Funds**
   - Enter amount to deposit
   - Form validation
   - Success confirmation

2. **Send Money**
   - Enter recipient account number
   - Enter transfer amount
   - Form validation for both fields
   - Success confirmation

### Transaction History
- **Visual Indicators**: Green arrows for deposits, red for withdrawals
- **Transaction Details**: Description, date, and formatted amounts
- **Sample Data**: Includes paycheck, transfers, groceries, and refunds

## Mock Data

The application uses sample data for demonstration:

```javascript
// User Information
{
  firstName: 'Donova',
  accountNumber: 'ACC123456789',
  accountBalance: 5250.75
}

// Sample Transactions
- Paycheck from work: +$2,500.00
- Sent to Jane Doe: -$150.50
- Groceries Store: -$85.25
- Online sale refund: +$35.00
```

## Application Architecture

### Single Component Design
- **Simplified Structure**: All functionality in one `App` component
- **State Management**: Local React state for form inputs
- **Material-UI Integration**: Consistent design system throughout
- **Responsive Layout**: Grid system adapts to different screen sizes

### Key React Patterns Used
- Functional components with hooks
- Controlled form inputs
- Event handlers for user interactions
- Conditional rendering and data mapping

## Security Considerations

⚠️ **Important**: This is a demonstration dashboard with mock data. In a production environment, you would need:

- User authentication
- Secure API endpoints
- Data encryption
- Input validation and sanitization
- Session management
- Audit logging

## Customization

### Easy Modifications
1. **User Data**: Update `mockUser` object in `App.js`
2. **Transactions**: Modify `mockTransactions` array
3. **Styling**: Adjust Material-UI theme in `src/index.js`
4. **Bank Name**: Change "Donova Bank" throughout the application

### Adding Features
- Account statements
- Bill payments
- Budget tracking
- Investment portfolio
- Customer support

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Note**: This is a demonstration banking dashboard and should not be used for actual financial transactions without proper security implementations.
