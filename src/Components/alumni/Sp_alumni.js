import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
    
function Sp_alumni() {
    return (
      <div>  
      <div className="flex">
    <div className="py-8 pl-8 ">
      <Card className=" w-96">
        <CardHeader color="black" className="relative h-56 py-3">
          <img
            src="./images/Anshula_sachdeva.jpg"
            alt="img-blur-shadow"
            className=" h-full w-full rounded-lg border-4 border-zinc-500 p-2 "
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
          Anshula Sachdeva
          </Typography>
          <Typography>
            Lead Software Developer at BNY Mellon
          </Typography>
        </CardBody>
      </Card>
      </div>
      <div className="py-8 pl-8 ">
      <Card className=" w-96">
        <CardHeader color="black" className="relative h-56 p-3 ">
          <img
            src="./images/Priyanshi_Tyagi.jpg"
            alt="img-blur-shadow"
            className=" h-full w-full border-4 border-zinc-500 p-2 rounded-lg"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            Priyanshi Tyagi
          </Typography>
          <Typography>
          D. E. Shaw India Private Limited
          </Typography>
        </CardBody>
      </Card>
      </div>
      <div className="py-8 pl-8 ">
      <Card className=" w-96">
        <CardHeader color="black" className="relative h-56 py-3 ">
          <img
            src="./images/Shruti_Katyal.jpg"
            alt="img-blur-shadow"
            className=" h-full w-full border-4 border-zinc-500 p-2 rounded-lg"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            Shruti Katyal
          </Typography>
          <Typography>
          Software Development Engineer at Amazon
          
          </Typography>
        </CardBody>
      </Card>
      </div>
      </div>
      
          </div>
    );
  }

  export default Sp_alumni