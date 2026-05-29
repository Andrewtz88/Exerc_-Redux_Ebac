import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Produto } from '../App';

interface CarrinhoState {
  itens: Produto[];
}

const initialState: CarrinhoState = {
  itens: [],
};

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produtoExiste = state.itens.find(item => item.id === action.payload.id);
      if (!produtoExiste) {
        state.itens.push(action.payload);
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(item => item.id !== action.payload);
    },
  },
});

export const { adicionar, remover } = carrinhoSlice.actions;
export default carrinhoSlice.reducer;