import PropTypes from "prop-types";
import { Card, Typography, CardBody, Avatar } from "@material-tailwind/react";

function FacultyCard({img, name, position,profile}) {
  return (
    <div className=" ">
    <Card color="transparent"  shadow={false} className="grid">
        <Avatar
        src={img} 
        alt={name}
        size="xl" 
        className="h-48 w-48 p-2 rounded-full mt-6 border-4 border-zinc-900 hover:scale-110 transition duration-300 ease-in-out" 
        />
      <CardBody className="text-center mt-2">
      <a href={profile} target={"_blank"}  className="font-bold cursor-pointer text-lg mt-20 text-white mr-14">
        {name} 
      </a>
      <Typography variant="h5"  color="white" className="text-sm text-gray-600 mr-14">
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
