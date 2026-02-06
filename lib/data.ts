import content from '@/data/content.json';

export type Album = {
  title: string;
  slug: string;
  year: string;
  cover: string;
  description: string;
  streamLink: string;
  buyLink: string;
};

export type TourDate = {
  date: string;
  venue: string;
  city: string;
  ticketLink: string;
};

export type SiteContent = {
  home: {
    streamLink: string;
    buyLink: string;
    latestReleaseTitle: string;
  };
  about: {
    bio: string;
    image: string;
  };
  discography: Album[];
  tour: TourDate[];
};

export const getSiteContent = (): SiteContent => {
  return content as SiteContent;
};

export const getAlbumBySlug = (slug: string): Album | undefined => {
  return (content as SiteContent).discography.find((album) => album.slug === slug);
};
