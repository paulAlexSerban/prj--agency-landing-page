import getStaticProps from "./Elements.model";
import GenericTemplate from "@/templates/Generic/Generic";
// import Navigation from "@/organisms/Navigation/Navigation";

// import SectionHeading from "@/atoms/SectionHeading/SectionHeading";
// import Paragraph from "@/atoms/Paragraph/Paragraph";

// import Content from "@/layouts/Content/Content";
// import LineUp from "@/layouts/LineUp/LineUp";

export { getStaticProps };
export default function Elements({ type }) {
  return (
    <GenericTemplate pageType={type}>
      {/* <Navigation />
      <Content>
        <SectionHeading level="2" mainText="Section Heading element" subheading="Subheading text - lorem" hasSeparator/>
        <hr/>
        <h3>Paragraph</h3>
        <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Sit amet purus gravida quis. Morbi tempus iaculis urna id volutpat lacus laoreet. Convallis tellus id interdum velit laoreet id donec ultrices. Velit euismod in pellentesque massa. Diam maecenas ultricies mi eget mauris pharetra et ultrices. Id porta nibh venenatis cras sed felis. Turpis egestas integer eget aliquet nibh praesent tristique. Tellus pellentesque eu tincidunt tortor. Ultrices eros in cursus turpis massa tincidunt dui ut ornare. Nisi porta lorem mollis aliquam ut porttitor leo. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Felis donec et odio pellentesque diam. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Suscipit adipiscing bibendum est ultricies integer." />
        <hr/>
        <h3>LineUp Layout - 3 columns</h3>
        <LineUp columns="3">
          <SectionHeading level="3" mainText="Section heading - level 3" subheading="subheading text" />
          <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Sit amet purus gravida quis. Morbi tempus iaculis urna id volutpat lacus laoreet. Convallis tellus id interdum velit laoreet id donec ultrices." />
          <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Sit amet purus gravida quis. Morbi tempus iaculis urna id volutpat lacus laoreet. Convallis tellus id interdum velit laoreet id donec ultrices." />
        </LineUp>
      </Content> */}
    </GenericTemplate>
  );
}
