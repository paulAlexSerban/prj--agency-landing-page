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