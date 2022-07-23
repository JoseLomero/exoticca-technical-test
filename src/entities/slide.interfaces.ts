export interface RootObject {
    hero: Hero;
    slides: Slide[];
    topSales: TopSales;
}

export interface TopSales {
    type: string;
    title: string;
    icon: string;
    background: string;
    cards: Card[];
}

export interface Slide {
    name: string;
    description: string;
    slug: string;
    type: string;
    title: string;
    icon: string;
    background: string;
    cards: Card[];
    totalCampaigns?: number;
}

export interface Card {
    id: number;
    title: string;
    destination: string;
    images: DeviceImage[];
    days: number;
    url: string;
    map?: any;
    highlights?: any;
    includes?: any;
    priceDetail: PriceDetail;
    tags?: any;
    crafterDetail?: any;
    hasPrivateTour: boolean;
    hasSoloTraveller: boolean;
    headLine?: any;
    tagHeadLine: any[];
    isLandOnly: boolean;
    isValid: boolean;
}

export interface PriceDetail {
    fromPrice: number;
    fromPriceBeautify: string;
    discountSaved: number;
    oldPriceBeautify: string;
    pricingPercentage: number;
    pricePerNight: string;
}

export interface DeviceImage {
    desktop: string;
    tablet: string;
    mobile: string;
}

export interface Hero {
    image: Image[];
    title: string;
}

export interface Image {
    url: string;
    text: string;
}