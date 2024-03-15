import DefaultImage from '@/components/DefaultImage';

interface TripPlaceImageProps {
  image?: string;
}

function TripPlaceImage({ image }: TripPlaceImageProps) {
  return (
    <div className="object-fit flex h-[3.75rem] w-[3.75rem] items-center justify-center overflow-hidden rounded-[0.6081rem] bg-[#EFF2F6]">
      {image ? <img src={image} /> : <DefaultImage />}
    </div>
  );
}

export default TripPlaceImage;
