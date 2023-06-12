import PropTypes from "prop-types";
import { Card, CardBody, Avatar } from "@material-tailwind/react";

function EventCard({img, eventYear, events}) {
  return (
    <div className=" ">
    <Card color="transparent" shadow={false} className="grid">
      <button className="">
        <Avatar 
        src={img}
        alt={eventYear}
        size="xl"  
        className="h-60 w-60 p-2 rounded-lg mt-6 border-2 border-zinc-900 hover:border-sky-500" 
        />
        </button>
      <CardBody>
      <a href={events} target={"_blank"} rel="noreferrer"  className="font-bold cursor-pointer text-lg mt-4 text-white">
        {eventYear} 
      </a>
      </CardBody>
    </Card>
    </div>
  );  
}

EventCard.propTypes = {
  img: PropTypes.string.isRequired,
  eventYear: PropTypes.string.isRequired,
}; 

EventCard.displayName = "/src/components/event_card.jsx";

export default EventCard;    
