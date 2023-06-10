import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
 
function Wings(){
    const wings = [
        {WingName: "Technical Wing",
         WingDescription: "The Technical Wing takes responsibility of producing posters, animated gifs, and videos that make the best use of their creative ideas. If you possess any software skills, you will undoubtedly have the chance to improve them."
        },
        {WingName: "Editorial Wing",
        WingDescription: "The Editorial Wing curates promotional content, write-ups and reports for events, social media posts and blogs. They also handle the editing and publishing of Bitwise, the Computer Science Magazine."
         },
        {WingName: "PR and Marketing Wing",
        WingDescription: "The Wing is in charge of managing the society's presence across multiple social media platforms to curate cutting-edge material and increase engagement by using a variety of creative techniques to promote our events and activities both online and offline."
        },
        {WingName: "Operations Wing",
        WingDescription: "The Operations Wing deals with the planning and coordination of online and offline events.It makes sure that everything runs smoothly by being involved atevery level of the process,including event planning, management and organisation."
 },
        {WingName: "Internship Wing",
        WingDescription: "The Internship Wing collaborates to achieve the shared objective of offering sorted internship opportunities for Computer Science students. During events, they work with PR & Marketing to bring more sponsors." },
        {WingName: "Research and Development Wing",
         WingDescription: "This Wing is in charge of enlightening society's citizens about technology and helping them comprehend various technological fields and collaborates with different organisations to conduct funded competitions."  
         },
    ]

    return(
        <div className="ml-6 mr-24 text-white text-center">
            <div className="underline underline-offset-4 text-center mt-4 mb-4 text-3xl">
                <b>Wings</b>
            </div>
            
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-20 gap-y-6">
                {wings.map((wing) => (
                    <div className='group w-96 bg-zinc-900 rounded-md '>
                         <Card className="w-96 group-hover:border-solid group-hover:border-2 group-hover:rounded-md group-hover:border-sky-500  ">
      <CardHeader
        variant="gradient"
        color="blue"
        className="grid h-20 place-items-center group-hover:bg-sky-500 rounded my-2"
      >
        <Typography variant="h3" className="text-2xl group-hover:text-white text-sky-500" >
         <b> {wing.WingName} </b>
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4 mb-4 mx-2">
        {wing.WingDescription}
      </CardBody>
    </Card>
                    </div>
                ))}
            </div>
            
          </div>
    )

}

export default Wings