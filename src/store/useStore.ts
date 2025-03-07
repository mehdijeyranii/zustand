import { create } from "zustand";

interface CounterState {
  count: number;
  increase: () => void;
  decrease: () => void;
}

const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () =>
    set((state) => ({ count: state.count > 0 ? state.count - 1 : 0 })),
}));

export default useCounterStore;
