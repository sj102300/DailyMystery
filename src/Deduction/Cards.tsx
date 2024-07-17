import { Suspect } from "..";

export default function SuspectsCard({ suspects, selected, setSelected }: {
    suspects: Suspect[];
    selected: number;
    setSelected: (suspectNumber: number) => void;
}) {

    return (
        <div className="flex justify-between w-11/12 h-full gap-4">
            {suspects.map((val: Suspect, idx: number) => (
                <div key={idx} className="relative flex-1 h-full border-2 cursor-pointer rounded-xl"
                    onClick={() => setSelected(val.suspectNumber)}>
                    <img
                        src={val.suspectImageUrl}
                        alt="image"
                        className="absolute top-0 left-0 object-cover h-full rounded-lg"
                    />
                    {
                        val.suspectNumber === selected ?
                            <div className="absolute flex justify-center items-center text-xl top-0 left-0 object-cover w-full h-full rounded-lg bg-black opacity-40">
                                {`${val.suspectName} ${val.suspectAge}세 ${val.suspectGender}`}
                            </div> :

                            <div className="absolute flex justify-center items-center text-xl bottom-0 left-0 object-cover w-full h-1/5 rounded-lg bg-black opacity-40">
                                {`${val.suspectName} ${val.suspectAge}세 ${val.suspectGender}`}
                            </div>
                    }

                </div>
            ))}
        </div>
    );
}
