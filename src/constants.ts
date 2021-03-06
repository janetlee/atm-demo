const INITIAL_ACCOUNT_BALANCE = 2000;
const WITHDRAWAL_INCREMENT_AMOUNT = 20;
const MAX_WITHDRAWAL_AMOUNT = INITIAL_ACCOUNT_BALANCE % WITHDRAWAL_INCREMENT_AMOUNT === 0 ? INITIAL_ACCOUNT_BALANCE: Math.floor(INITIAL_ACCOUNT_BALANCE / WITHDRAWAL_INCREMENT_AMOUNT);

export { INITIAL_ACCOUNT_BALANCE, WITHDRAWAL_INCREMENT_AMOUNT, MAX_WITHDRAWAL_AMOUNT }