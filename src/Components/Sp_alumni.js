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
            src="./images/login-bg1.jpg"
            alt="img-blur-shadow"
            className=" h-full w-full"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            Cozy 5 Stars Apartment
          </Typography>
          <Typography>
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to "Naviglio" where you can enjoy the main night life in
            Barcelona.
          </Typography>
        </CardBody>
      </Card>
      </div>
      <div className="py-8 pl-8 ">
      <Card className=" w-96">
        <CardHeader color="black" className="relative h-56 p-3">
          <img
            src="./images/login-bg2.jpg"
            alt="img-blur-shadow"
            className=" h-full w-full"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            Cozy 5 Stars Apartment
          </Typography>
          <Typography>
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to "Naviglio" where you can enjoy the main night life in
            Barcelona.
          </Typography>
        </CardBody>
      </Card>
      </div>
      <div className="py-8 pl-8 ">
      <Card className=" w-96">
        <CardHeader color="black" className="relative h-56 py-3">
          <img
            src="./images/login-bg3.jpg"
            alt="img-blur-shadow"
            className=" h-full w-full"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            Cozy 5 Stars Apartment
          </Typography>
          <Typography>
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to "Naviglio" where you can enjoy the main night life in
            Barcelona.
          </Typography>
        </CardBody>
      </Card>
      </div>
      </div>
      
          </div>
    );
  }

  export default Sp_alumni