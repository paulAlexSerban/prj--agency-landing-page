/**
 * content from ./content/landing and ./content/fragments should be rendered here
 */

export default async function getStaticProps() {
  return {
    props: {
      pageProperties: {
        templateType: ""
      },
      content: {
        main: {}
      },
    },
  };
}


const navList = [
  { href: "despre_noi", label: "despre noi" },
  { href: "servicii", label: "servicii" },
  { href: "produse", label: "produse" },
  { href: "beneficii", label: "beneficii" },
  { href: "contact", label: "contact" },
];

const spotlight_1 = {
  position: "bottom",
  image_src: "images/pic02.jpg",
  content: {
    heading: "heading - lorem",
    subheading: "subheading - lorem",
    paragraphs: [],
  },
};

const spotlight_2 = {
  position: "right",
  image_src: "images/pic03.jpg",
  content: {
    heading: "heading - lorem",
    paragraphs: [],
  },
};

const spotlight_3 = {
  position: "left",
  image_src: "images/pic04.jpg",
  content: {
    heading: "heading - lorem",
    paragraphs: [],
  },
};
