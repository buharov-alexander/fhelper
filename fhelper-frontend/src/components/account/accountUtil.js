import {
  CASH,
  BANK_ACCOUNT,
  DEPOSIT,
  BROKER_ACCOUNT,
} from 'constants/accountTypes';
import {
  wallet,
  walletWhite,
  safeBox,
  safeBoxWhite,
  creditCard,
  creditCardWhite,
  analytics,
  analyticsWhite,
  box,
  boxWhite,
} from 'constants/images';
import {
  USD,
  EUR,
} from 'constants/valutaCodes';

export const getAccountIcon = ({ accountType, active }) => {
  switch (accountType) {
    case CASH:
      return active ? walletWhite : wallet;
    case BANK_ACCOUNT:
      return active ? creditCardWhite : creditCard;
    case DEPOSIT:
      return active ? safeBoxWhite : safeBox;
    case BROKER_ACCOUNT:
      return active ? analyticsWhite : analytics;
    default:
      return active ? boxWhite : box;
  }
};

export const getAccountType = (accountType) => {
  switch (accountType) {
    case CASH:
      return 'Cash';
    case BANK_ACCOUNT:
      return 'Bank account';
    case DEPOSIT:
      return 'Deposit';
    case BROKER_ACCOUNT:
      return 'Broker account';
    default:
      return 'Common account';
  }
};

export const getValutaSymbol = (valuta) => {
  switch (valuta) {
    case USD:
      return '\u0024';
    case EUR:
      return '\u20AC';
    default:
      return '\u20bd';
  }
};
