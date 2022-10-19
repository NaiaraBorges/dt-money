import { HeaderContainer, HeaderContent, NewTransactionsButton } from "./styles";

import * as Dialog from '@radix-ui/react-dialog';

import logoimg from '../../assets/logo.svg';
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoimg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
          <NewTransactionsButton>Nova transação</NewTransactionsButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>

      </HeaderContent>
    </HeaderContainer>
  );
}