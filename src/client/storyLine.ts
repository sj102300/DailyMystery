import { create } from "zustand";
interface StoryLine {
    storyLine: Array<string>;
    setStoryLine: (newArray: Array<string>) => void;
}

const useStoryLine = create<StoryLine>((set) => ({
    storyLine: [],
    setStoryLine: (newArray: Array<string>) => set({ storyLine: newArray }),
}));

export default useStoryLine;
