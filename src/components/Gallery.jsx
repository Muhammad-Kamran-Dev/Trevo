import Card from "./card";

export default function Gallery() {
  const data = [
    {
      id: 1,
      title: "The 400 Blows",
      imgSrc: "/img/tour/img1.png",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
    mollitia, molestiae quas vel sint commodi repudiandae consequuntur.`,
      link: {
        text: "Learn More",
        href: `/profile/1`,
      },
    },
    {
      id: 2,
      title: "The 400 Blows",
      imgSrc: "/img/tour/img2.png",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
    mollitia, molestiae quas vel sint commodi repudiandae consequuntur.`,
      link: {
        text: "Learn More",
        href: `/profile/2`,
      },
    },
    {
      id: 3,
      title: "The 400 Blows",
      imgSrc: "/img/tour/img3.png",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
    mollitia, molestiae quas vel sint commodi repudiandae consequuntur.`,
      link: {
        text: "Learn More",
        href: `/profile/3`,
      },
    },
    {
      id: 4,
      title: "The 400 Blows",
      imgSrc: "/img/tour/img1.png",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
    mollitia, molestiae quas vel sint commodi repudiandae consequuntur.`,
      link: {
        text: "Learn More",
        href: `/profile/4`,
      },
    },
    {
      id: 5,
      title: "The 400 Blows",
      imgSrc: "/img/tour/img2.png",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
    mollitia, molestiae quas vel sint commodi repudiandae consequuntur.`,
      link: {
        text: "Learn More",
        href: `/profile/5`,
      },
    },
    {
      id: 6,
      title: "The 400 Blows",
      imgSrc: "/img/tour/img3.png",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
    mollitia, molestiae quas vel sint commodi repudiandae consequuntur.`,
      link: {
        text: "Learn New ",
        href: `/profile/6`,
      },
    },
  ];
  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4">
        {data.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            imgSrc={item.imgSrc}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}
