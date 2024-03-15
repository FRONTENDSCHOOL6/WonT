//$ import TripPlan from '@/components/TripPlan';
import HambugerButton from '@/components/TripSelect/HambugerButton';

interface TripPlanMenuProps {
  state: boolean;
  action: () => void;
  data: any;
}

function TripPlanMenu({ state, action, data }: TripPlanMenuProps) {
  return (
    <div className="modal absolute z-20 w-full rounded-b-3xl bg-[#E4F5FF]">
      {/* {state && <TripPlan data={data} background="bg-[#E4F5FF]" />} */}
      <HambugerButton onClick={action} />
    </div>
  );
}

export default TripPlanMenu;
