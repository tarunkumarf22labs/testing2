export interface IvillaList {
    data:{
        id: number;
        attributes: {
            name: string;
            createdAt: string | null;
            updatedAt: string | null;
            publishedAt: string | null;
            isActive: boolean;
            areaInSqFt: number;
            bedRoomCount: number;
            bathRoomCount: number;
            floorCount: number;
            byliner: string;
            cancellationPolicy: string;
            isOnlineBookingPossible: boolean;
            canBookRoom: boolean;
            about: string;
            homeTruths: string;
            story: string;
            gettingThere:string ;
            validFrom: string;
            validTo: string;
        }
    }[],
    meta: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
    }
} 