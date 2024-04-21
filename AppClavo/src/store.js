import { observable, action } from "mobx";

const store = observable({
  users: [
    {
      id: Math.random().toString(36).substr(2, 9),
      name: "Admin",
      email: "florezaldo@gmail.com",
      password: "admin",
      role: "user",
      balance: 0,
      credits: 2000000,
      debits: 0,
    },
    {
      id: Math.random().toString(36).substr(2, 9),
      name: "Usuario1",
      email: "usuario1@example.com",
      password: "password1",
      role: "user",
      balance: 0,
      credits: 200000,
      debits: 2000,
      wallet: {
        credit: 0,
        credits: [],
      },
    },
    {
      id: Math.random().toString(36).substr(2, 9),
      name: "Usuario2",
      email: "usuario2@example.com",
      password: "password2",
      role: "user",
      balance: 0,
      credits: 0,
      debits: 0,
      wallet: {
        credit: 0,
        credits: [],
      },
    },
  ],
  admin: {
    moneda: "COP",  // Moneda de la cuenta
    globalDebit: 1000000000,
    creditsGranted: 0,
    interestsEarned: 0,
    discrepancies: 0,
    balances: {
      positive: 0,
      negative: 0,
    },
  },
});
const setUsers = action((users) => {
  store.users = [...users, ...store.users];
});
export { store, setUsers };
