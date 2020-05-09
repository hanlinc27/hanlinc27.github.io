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
import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return <div>{Posts}</div>
}

export default BlogPage

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