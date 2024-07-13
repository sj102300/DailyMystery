import SuspectInfor from "./component/SuspectInfor";

export default function SuspectNumber() {
    return (
        <div className="z-10 flex items-center justify-around w-full py-32 h-dvh">
            <SuspectInfor />
            <div className="w-3/5 h-full rounded-[20px] bg-white p-3 gap-3"></div>
        </div>
    );
}
