import MenuWrapper from "../../components/product/MenuWrapper";
import Campaigns from "../../components/Campaigns";
import Carousel from "../../components/Carousel";
import About from "../../components/ui/About";
import Reservation from "@/components/Reservation";



const Index = () => {
  return (
    <div>
<Carousel/>
<Campaigns/>
<MenuWrapper/>
<About/>
<Reservation/>
    </div>
  );
};

export default Index;