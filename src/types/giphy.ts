export interface GiphyImage {
  url: string;
  width: string;
  height: string;
  size: string;
}

export interface GiphyImages {
  original: GiphyImage;
  fixed_height: GiphyImage;
  downsized_medium: GiphyImage;
}

export interface GiphyData {
  id: string;
  title: string;
  url: string;
  images: GiphyImages;
}

export interface GiphyApiResponse {
  data: GiphyData[];
  pagination: {
    total_count: number;
    count: number;
    offset: number;
  };
  meta: {
    status: number;
    msg: string;
    response_id: string;
  };
}
