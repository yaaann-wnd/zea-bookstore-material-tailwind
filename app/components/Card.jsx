"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import Button from "./Button";
import Chip from "./Chip";
import Ellipsis from "./Ellipsis";

export default function BookCard() {
  return (
    <Card>
      <CardHeader shadow={false} floated={false} className="h-60">
        <img
          src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-1 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            Romance story
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            $95.00
          </Typography>
        </div>
        <Chip value="Horror" />
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75 mt-2"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 flex justify-between">
        <Button>Lihat detail</Button>
        <Ellipsis />
      </CardFooter>
    </Card>
  );
}
