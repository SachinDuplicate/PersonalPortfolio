import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Website Design",
    projects: 4,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Mobile App Design",
    projects:1,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "IOT projects",
    projects: 2,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "I help with excellent solution, I use process design to create digital products that help client business.",
  "",
];

export const workExp = [
  {
    place: "Robotics Association of Nepal, Lalitpur",
    tenure: "Current Employee",
    role: "Backend Developer",
    detail:
      "Programmed on platforms like websites, and IOT.",
  },
  {
    place: "IETT Technologies",
    tenure: "DotNet (3 months)",
    role: "Internship",
    detail:
      "Responsible for debugging, research and design of front-end.",
  },
  {
    place: "Final-Year Project",
    tenure: "Android Studio (Kotlin & XML)",
    role: "Student",
    detail:
      "Build a mobile application for calling and receiving phone calls with other phone features.",
  },
  {
    place: "AI project",
    tenure: "Anoconda (Python)",
    role: "Student",
    detail:
      "Build a book-recommendation system which results based on same auther, publisher, and name.",
  }
];


export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
