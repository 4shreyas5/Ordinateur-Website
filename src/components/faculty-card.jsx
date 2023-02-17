import PropTypes from "prop-types";
import { Card, Typography, CardHeader, CardBody } from "@material-tailwind/react";

function FacultyCard({img, name, position}) {
  return (
    <div className=" ">
    <Card color="transparent"  shadow={false} className="">
      <CardHeader className="">
        <img
        src={img}
        alt={name}
        size="xl" 
        className="rounded-lg h-64 w-64 mt-6 hover:scale-110 transition duration-300 ease-in-out border-4 border-white" 
        />
      </CardHeader>
      <CardBody>
      <Typography  color="black" className="text-center font-bold cursor-pointer text-lg mt-4 text-white">
        {name}
      </Typography>
      <Typography color="black" className="text-center text-sm text-white">
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
