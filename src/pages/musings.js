import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components';
import { breakpoints } from 'styles/variables';
import PostLink from "../components/post-link"
import 'styles/fonts.css';
import { Container } from 'components/container/Container';

const Wrapper = styled.div`
  padding: 30px 0;
// used to be 60px
  border-bottom: 1px solid #e5e5e5;

  @media (min-width: ${breakpoints.md}) {
    padding: 120px 0;
  }
`;

// import { Footer } from 'components/footer/Footer';
const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

    
  return <Container> <Wrapper>
      
    
    <div className = "landing-heading">  A delicate mix of musings, rambles, and (hopefully) insights. </div>
      <div className = "musings-subheading">"I remembered that the real world was wide, and that a varied field of hopes and fears, of sensations and excitements, awaited those who had the courage to go forth into it's expanse, to seek real knowledge of life amidst it's perils." 
      <br></br>- Jane Eyre (an all-time classic) </div>
  

    <div className = "landing-heading">{

    Posts
    }
   </div>
   <br></br>
   <br></br>
   </Wrapper>
   </Container>

}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`


// import React from 'react';
// import {Helmet} from "react-helmet";
// import {StaticQuery, graphql} from 'gatsby';

// import { Intro } from 'components/intro/Intro';

// const TitleAndDescription = ({data}) => {
//   const title = data.site.siteMetadata.title
//   const description = data.site.siteMetadata.description 
//   return (
//     <div> 
// <h2> {title}</h2>
// <p> {description}</p>
// </div>  
// )
// }



// const Heading = () => {
//   return(
//     <StaticQuery
//     query={graphql`
// query {
//   site{
//     siteMetaData{
//       title
//       description
//     }
//   }
// }
//     `}
//     render={data=> <TitleAndDescription data = {data}/>} 
//     />
//   )
// } 



// // tslint:disable no-default-export
// export default () => (
//   <>
//     <Helmet title="Musings" />
// <div> <Heading /> 
// </div>
//     <Intro>Blog Page</Intro>
//   </>
// );
