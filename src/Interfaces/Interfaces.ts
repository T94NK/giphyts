export interface ImageObject {
  fixed_width: {
    url: string;
  };
}
export interface GIFObject {
  type: string;
  id: string;
  images: ImageObject;
}
