import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { Columns, Container, Section } from 'react-bulma-components'

import Layout from '../components/layout'
import LinkedCard from '../components/shared/linked-card'
import LinkItemCard from '../components/links/link-item-card'
import SectionHeader from '../components/section-header'
import SEO from '../components/seo'

const LinkPosts = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout>
      <SEO
        description="Interesting finds from around the web"
        keywords={[`links`]}
        title="Links"
        url="/links"
      />
      <Section>
        <Container>
          <SectionHeader
            section="Links"
            tagline="Interesting finds from around the web"
          />
          <Columns multiline>
            {posts.map(({ node: post }) => (
              <Columns.Column
                tablet={{ size: 'half' }}
                desktop={{ size: 'one-third' }}
                widescreen={{ size: 'one-quarter' }}
              >
                <LinkedCard post={post} key={post.id} />
              </Columns.Column>
            ))}
          </Columns>
        </Container>
      </Section>
    </Layout>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query LinksQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "link-post" } } }
        ) {
          edges {
            node {
              id
              excerpt(pruneLength: 400)
              html
              frontmatter {
                title
                templateKey
                path
                date(formatString: "MMMM DD, YYYY")
                url
                image {
                  childImageSharp {
                    fluid(
                      maxWidth: 1000
                      maxHeight: 667
                      cropFocus: ATTENTION
                      traceSVG: {
                        turdSize: 10
                        background: "#fefefe"
                        color: "#eeeeee"
                      }
                    ) {
                      tracedSVG
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <LinkPosts data={data} {...props} />}
  />
)
