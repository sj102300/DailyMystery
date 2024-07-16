declare interface Suspect {
    suspectNumber: number;
    suspectName: string;
    suspectGender: string;
    suspectImageUrl: string;
    suspectAge: number;
    suspectOccupation: string;
    suspectInfo: string;
}

export interface responseDTO<T>{
    statusCode: number;
    message: string;
    data: T;
}