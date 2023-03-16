import PropTypes from "prop-types";
import { Card, Typography, CardHeader, CardBody, Avatar } from "@material-tailwind/react";

function FacultyCard({img, name, position,profile}) {
  return (
    <div className=" ">
    <Card color="transparent"  shadow={false} className="grid">
        <Avatar
        src={img}
        alt={name}
        size="xl" 
        className="h-48 w-48 p-2 rounded-full mt-6 border-4 border-zinc-900 shadow shadow-2xl hover:shadow-gray-800 hover:scale-110 transition duration-300 ease-in-out" 
        />
      <CardBody>
      <a href={profile} target={"_blank"} color="black" className="font-bold cursor-pointer text-lg mt-4 ">
        {name}
      </a>
      <Typography variant="h5"  color="black" className="text-sm">
        {position}
      </Typography>
      </CardBody>
    </Card>
    </div>
  );  
}


FacultyCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string,

}; 

FacultyCard.displayName = "/src/components/faculty-card.jsx";

export default FacultyCard;    
