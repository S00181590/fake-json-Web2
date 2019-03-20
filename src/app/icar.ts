export interface ICar {

    make: string;
    model: string;
    year: string;
    imageURL: string;
    quality: IcarQuality[];
    
}

interface IcarQuality
{
    name: string;
    rating: string;
}
