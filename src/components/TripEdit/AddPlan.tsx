import TripPlaneIcon from '@/components/TripEdit/TripPlaneIcon';

interface AddPlanProps {
  text: string;
}

function AddPlan({ text }: AddPlanProps) {
  return (
    <div className="mx-5 mt-4 flex flex-col gap-[10px]">
      <div className="flex h-[52px] items-center gap-2 bg-white px-[10px]">
        <TripPlaneIcon />
        <p className="font-bold text-contentsPrimary">{text}를 추가해주세요.</p>
      </div>
    </div>
  );
}

export default AddPlan;
