import PropTypes from "prop-types";
import { Card, Typography, CardHeader, CardBody, Avatar } from "@material-tailwind/react";

function EventCard({img, eventYear, events}) {
  return (
    <div className=" ">
    <Card color="transparent"  shadow={false} className="grid ">
        <Avatar 
        src={img}
        alt={eventYear}
        size="xl" 
        className="h-60 w-60 p-2 rounded-lg mt-6 border-4 border-zinc-900 shadow shadow-2xl hover:shadow-gray-700 hover:scale-110 transition duration-300 ease-in-out" 
        />
      <CardBody>
      <a href={events} target={"_blank"}  className="font-bold cursor-pointer text-lg mt-4 ">
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
//   events: PropTypes.string,

}; 

EventCard.displayName = "/src/components/event_card.jsx";

export default EventCard;    
