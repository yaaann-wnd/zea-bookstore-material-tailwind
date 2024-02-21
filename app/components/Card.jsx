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
import Image from "next/image";

export default function BookCard({
  title,
  author,
  price,
  desc,
  category,
  image,
  priority
}) {
  return (
    <Card>
      <CardHeader shadow={false} floated={false} className="h-80">
        <Image
          src={image}
          width={500}
          height={500}
          alt="card-image"
          className="h-full w-full object-contain"
          priority={priority}
        />
      </CardHeader>
      <CardBody>
        <Typography color="blue-gray" className="font-medium mb-[-3px] text-xl">
          {title}
        </Typography>
        <Typography
          color="blue-gray"
          variant="small"
          className="font-normal opacity-70 mb-2"
        >
          {author}
        </Typography>
        <Chip value={category} />
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75 mt-2"
        >
          <span className="line-clamp-3 mb-3 leading-snug">{desc}</span>
        </Typography>
        <Typography className="font-medium text-lg">{price}</Typography>
      </CardBody>
      <CardFooter className="pt-0 flex justify-between">
        <Button>Lihat detail</Button>
        <Ellipsis />
      </CardFooter>
    </Card>
  );
}
