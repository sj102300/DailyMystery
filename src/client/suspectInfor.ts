import { create } from "zustand";

interface Suspect {
    suspectNumber: number;
    suspectName: string;
    suspectGender: string;
    suspectImageUrl: string;
    suspectAge: number;
    suspectOccupation: string;
    suspectInfo?: string;
    suspectSpeciality: string;
}
interface SuspectState {
    suspectArray: Array<Suspect>;
    setSuspectArray: (newArray: Array<Suspect>) => void;
}

const useSuspectStore = create<SuspectState>((set) => ({
    suspectArray: [],
    setSuspectArray: (newArray: Array<Suspect>) =>
        set({ suspectArray: newArray }),
}));

export default useSuspectStore;
