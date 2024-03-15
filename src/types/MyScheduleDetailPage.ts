export interface TotalScheduleTitleProps {
  localName?: string;
  startDay: string;
  endDay: string;
}

export interface TotalScheduleImageList {
  imageURL: string;
  localName?: string;
  className: string;
}

export interface TotalScheduleTopicProps {
  count: number;
  children: string;
}

export interface TotalScheduleViewProps {
  selectBookmark: {
    id: string;
    collectionId: string;
    collectionName: string;
    created: string;
    updated: string;
    title: string;
    username: string;
    main: string;
    place: [string];
    hotel: [string];
    start_date: string;
    end_date: string;
    places: JSON;
    hotels: JSON;
  }[];
}
