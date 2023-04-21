import { useEffect, useState } from "react";
// for work_images
import justincase from "../assets/images/work_images/small/JustInCase.jpeg";
import justincaseBIG from "../assets/images/work_images/Just in Case.jpg";
import backofficePortalBIG from "../assets/images/work_images/BackofficePortal.jpg";
import beParentBIG from "../assets/images/work_images/BeParent.jpg";
import beParent from "../assets/images/work_images/small/BeParent.jpeg";
import backofficePortal from "../assets/images/work_images/small/BackofficePortal.jpeg";
// works small images

//  icon use as img here
import IconUI from "../assets/images/icons/iconUI.svg";
import IconUX from "../assets/images/icons/iconUX.svg";
// contact image
import iconPhone from "../assets/images/contact/phone-call 1.png";
import iconEmail from "../assets/images/contact/email 1.png";
import iconMap from "../assets/images/contact/map 1.png";
import { CgNotes } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { FiCodesandbox } from "react-icons/fi";
import { RiContactsBookLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const AllData = () => {
  const [check, setCheck] = useState(false);
  const [local, setLocal] = useState(localStorage.getItem("theme"));
  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  // dark and light theme controls
  useEffect(() => {
    const themeValue = localStorage?.getItem("theme");

    if (!themeValue) {
      setCheck(false);
      localStorage.setItem("theme", "light");
    } else {
      themeValue === "dark" && setCheck(true);
      themeValue === "light" && setCheck(false);
    }

    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, []);

  // Create and light theme function
  const handleTheme = (value) => {
    if (value === "light") {
      setCheck(false);
      localStorage.setItem("theme", "light");
      setLocal("light");
    } else {
      setCheck(true);
      localStorage.setItem("theme", "dark");
      setLocal("dark");
    }
    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };

  // fillter portfilo data
  const handleData = (text) => {
    if (text === "All") {
      setData(workItems);
    } else {
      const findData = workItems.filter((item) => item.tag === text);
      setData(findData);
    }
  };

  // find items for portfilo  modal open
  const handleModelData = (id) => {
    const find = workItems.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  // Active navlinks function
  function NavLink({
    to,
    className,
    activeClassName,
    inactiveClassName,
    ...rest
  }) {
    let location = useLocation();
    let isActive = location.pathname === to;
    let allClassNames =
      className + (isActive ? `${activeClassName}` : `${inactiveClassName}`);
    return <Link className={allClassNames} to={to} {...rest} />;
  }

  // Elements for protfilo section
  const workItems = [
    {
      id: "1",
      tag: "Professional",
      project: "WebApp",
      title: "Just In Case",
      img: justincaseBIG,
      imgSmall: justincase,
      bg: "#FFF0F0",
      client: "Fidelidade",
      langages: "Figma",
      link: "https://www.figma.com/proto/PBM2ULmWuNNQ6Afrsofhud/Just-in-Case?page-id=0%3A1&node-id=1-13536&viewport=1886%2C180%2C0.07&scaling=min-zoom&starting-point-node-id=1%3A13536&show-proto-sidebar=1",
      linkText: "JustInCase Prototype",
      descriptionTitle: "Simplify the traveller's journey and insurance contracting",
      description1: "This project was carried out with the aim of improving the web app and desktop versions of Just in Case, an on-demand insurance product from Fidelidade. The objective was to review the entire website experience in order to simplify the traveler's journey and the process of purchasing travel insurance. ",
      description2: "To achieve this goal, a study of other similar products was conducted to identify areas that needed improvement, taking into account the inputs already shared by the business. In summary, the process of purchasing insurance was simplified to just three steps: simulation, personal information, and confirmation, making the journey simpler and more straightforward.",
      description3: "",
    },
    {
      id: "2",
      tag: "Academic",
      project: "BeParent",
      title: "BeParent",
      img: beParentBIG,
      imgSmall: beParent,
      bg: "#FFF3FC",
      client: "School Project",
      langages: "Figma",
      link: "https://www.figma.com/proto/qz0XglQyIIIK9UZIEEJEt8/BeParent-prototype?embed_host=share&kind=&node-id=483-676",
      linkText: "BeParent Prototype",
      descriptionTitle: "Manage the daily life of children with the help of their family and professionals.",
      description1: "The BeParent project was developed as part of a postgraduate program in UX/UI. It is a mobile application designed for parents/caregivers of children between the ages of 5 and 12, childhood health professionals (psychologists and pediatricians), and the children themselves.",
      description2: "The project aims to address the challenge of managing children's free time and day-to-day tasks for parents/families.",
      description3: "To solve this problem, we conducted interviews, defined personas, utilized research methods such as card sorting, designed wireframes, created mockups, and conducted user testing.",
    },
    {
      id: "3",
      tag: "Professional",
      project: "Backoffice Portal",
      title: "Backoffice Portal",
      img: backofficePortalBIG,
      imgSmall: backofficePortal,
      bg: "#FFF0F0",
      client: "Fidelidade",
      langages: "Figma",
      link: "https://www.figma.com/proto/BWA8P1zU3JIOct138FLQ4s/Portal-de-Backoffices?page-id=0%3A1&node-id=3-20069&viewport=304%2C-2229%2C0.12&scaling=min-zoom&starting-point-node-id=3%3A20069&show-proto-sidebar=1",
      linkText: "Backoffice Portal Prototype",
      descriptionTitle: "Aggregate all Fidelidade's Backoffices in a single and attractive platform",
      description1: "The Backoffices Portal project arose from the need to aggregate all Fidelidade's Backoffices in a single platform that is simple to use and attractive to employees. Initially, there was already a proposed site map made by the business, but after some research and review of it, a new information architecture was developed to make the user journey simpler.",
      description2: "Looking for a more modern presentation and layout, and following current UX/UI trends, we arrived at an image that is within the Company's standards, more modern and current. We conducted user tests to validate the new information architecture and the current journey.",
      description3: "",
    },
    
  ];
  const [data, setData] = useState(workItems);

  

  // Menu items for Homepage Two
  const menuItemTwo = [
    {
      id: "01",
      name: "About",
      link: "/home/about",
      icon: <FaRegUser />,
    },
    {
      id: "02",
      name: "Resume",
      link: "/home/resume",
      icon: <CgNotes />,
    },
    {
      id: "03",
      name: "Works",
      link: "/home/works",
      icon: <FiCodesandbox />,
    },
    {
      id: "05",
      name: "Contact",
      link: "/home/contact",
      icon: <RiContactsBookLine />,
    },
  ];

 

  // serviceArray items for about page
  const serviceArray = [
    {
      id: "1",
      icon: IconUX,
      title: "UX Design",
      des: "As a UX designer I ensure that the user's needs are met and that their experience is as seamless and enjoyable as possible.",
      color: "#DDA10C",
      bg: "#FEFAF0",
    },
    {
      id: "2",
      icon: IconUI,
      title: "UI Design",
      des: "As a UI Designer, I have worked on various projects that involve designing user interfaces for web and mobile applications.",
      color: "#D566FF",
      bg: "#FCF4FF",
    },
  ];

  // educationArray items for Resume page
  const educationArray = [
    {
      id: 1,
      date: "2014 - 2019",
      title: "MSC in Psychology",
      place: "Faculty of Psychology, University of Lisbon ",
      bg: "#FFF4F4",
    },

    {
      id: 2,
      date: "2020 - 2021",
      title: "Post-graduation in UX/UI Design",
      place: "IADE - European University",
      bg: "#FFF1FB",
    },
  ];
  // experiencesArray items for Resume page
  const experiencesArray = [

    {
      id: 1,
      date: "2022 - Present",
      title: "UX/UI Designer",
      place: "Fidelidade",
      bg: "#F2F4FF",
    },
    {
      id: 2,
      date: "2019 - 2021",
      title: "HR Consultant",
      place: "Randstad & Dixtior",
      bg: "#EEF5FA",
    },
  ];

  // Working Skills items for Resume page
  const lineArray = [
    {
      id: "01",
      color: "#FF6464",
      name: "Web Design",
      number: "90",
    },
    {
      id: "02",
      color: "#9272D4",
      name: "Communication",
      number: "85",
    },
    {
      id: "03",
      color: "#5185D4",
      name: "Problem Solving",
      number: "90",
    },
    {
      id: "03",
      color: "#CA56F2",
      name: "Empathy",
      number: "95",
    },
    {
      id: "04",
      color: "#9BE0E0",
      name: "Collaboration",
      number: "90",
    },
  ];

  // Personal information for contact pages
  const contactArray = [
    {
      id: "01",
      icon: iconPhone,
      title: "Phone ",
      item1: "+452 666 386",
      item2: "+452 666 386",
      bg: "#FCF4FF",
    },
    {
      id: "02",
      icon: iconEmail,
      title: "Email ",
      item1: "support@gmail.com",
      item2: "example@gmail.com",
      bg: "#EEFBFF",
    },
    {
      id: "03",
      icon: iconMap,
      title: "Address ",
      item1: "Maount View, Oval",
      item2: "Road, New York, USA",
      bg: "#F2F4FF",
    },
  ];

  return {
    handleTheme,
    check,
    local,
    handleData,
    data,
    singleData,
    handleModelData,
    isOpen,
    setIsOpen,
    NavLink,
    menuItemTwo,
    serviceArray,
    educationArray,
    experiencesArray,
    lineArray,
    contactArray,
  };
};

export default AllData;
