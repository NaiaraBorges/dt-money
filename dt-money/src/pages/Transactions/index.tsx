import { CalendarBlank, TagSimple } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
  HeaderTransactions,
  TransactionCardList,
  CardTransaction,
} from "./styles";

export function Transactions() {

  const { transactions } = useContext(TransactionsContext);

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <HeaderTransactions>
          <span>Transações</span>
          <span>
            {transactions.length > 1
              ? `${transactions.length} itens`
              : `${transactions.length} item`}
          </span>
        </HeaderTransactions>

        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighLight variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter.format(transaction.price)}
                  </PriceHighLight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>

        <TransactionCardList>
          {transactions.map((transaction) => (
            <CardTransaction key={transaction.id}>
              <header>
                <span>{transaction.description}</span>
                <PriceHighLight variant={transaction.type}>
                  {transaction.type === 'outcome' && '- '}
                  {priceFormatter.format(transaction.price)}
                </PriceHighLight>
              </header>
              <footer>
                <div>
                  <TagSimple size={16} />
                  {transaction.category}
                </div>
                <div>
                  <CalendarBlank size={16} />
                  {dateFormatter.format(new Date(transaction.createdAt))}
                </div>
              </footer>
            </CardTransaction>
          ))}
        </TransactionCardList>
      </TransactionsContainer>
    </div>
  );
}
