import { create } from "zustand";

interface AsideFocus {
    focus: boolean;
    setFocusTrue: () => void;
    setFocusFalse: () => void;
}

const asideFocusStore = create<AsideFocus>((set) => ({
    focus: true,
    setFocusTrue: () => set({ focus: true }),
    setFocusFalse: () => set({ focus: false }),
}));

export default asideFocusStore;
