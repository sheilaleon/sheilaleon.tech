import React from 'react';

import Icon from '../../utils/Icon';

const ProjectItem = ({
  projectName,
  tags,
  description,
  demoLink,
  githubLink,
}) => (
  <div className="project">
    {demoLink != null ? (
      <h4>
        <a href={demoLink} rel="noopener noreferrer" target="_blank">
          {projectName}
        </a>
      </h4>
    ) : (
      <h4>{projectName}</h4>
    )}
    <p className="text-sm">{description}</p>
    <ul className="tags">
      {tags.map((tag, index) => (
        <li key={index}>{tag}</li>
      ))}
    </ul>
    <div className="preview">
      {githubLink != null ? (
        <a
          href={githubLink}
          rel="noopener noreferrer"
          target="_blank"
          className="preview preview-link"
        >
          <Icon name="code" />
          <span>View on GitHub</span>
        </a>
      ) : null}
      {demoLink != null ? (
        <a
          href={demoLink}
          rel="noopener noreferrer"
          target="_blank"
          className="preview preview-link"
        >
          <Icon name="external-link" />
          <span>View Project</span>
        </a>
      ) : null}
    </div>
  </div>
);

export default ProjectItem;
