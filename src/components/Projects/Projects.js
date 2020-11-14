import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

import ProjectItem from './ProjectItem';

const Projects = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allMarkdownRemark(
        filter: { frontmatter: { posttype: { eq: "project" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              projectName
              description
              demoLink
              githubLink
              tags
            }
          }
        }
      }
    }
  `);

  const projects = data.allMarkdownRemark.edges;

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((item) => {
          const { id } = item.node;
          const {
            projectName,
            tags,
            description,
            demoLink,
            githubLink,
          } = item.node.frontmatter;
          return (
            <ProjectItem
              key={id}
              projectName={projectName}
              tags={tags}
              description={description}
              demoLink={demoLink}
              githubLink={githubLink}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
