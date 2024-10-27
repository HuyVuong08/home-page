import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFull } from '@fortawesome/free-solid-svg-icons';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectInfo = ({ project }) => {
  const { singleProjectData } = useContext(SingleProjectContext);
  return (
    <div className="block sm:flex gap-0 sm:gap-10 mt-14">
      <div className="w-full sm:w-1/3 text-left">
        {/* Single project client details */}
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
            {singleProjectData.ProjectInfo.ClientHeading}
          </p>
          <ul className="leading-loose">
            {project.ProjectInfo.CompanyInfo.map((info) => {
              return (
                <li
                  className="font-general-regular text-ternary-dark dark:text-ternary-light"
                  key={info.id}
                >
                  <span>{info.title}: </span>
                  <a
                    href={info.url}
                    target="_blank"
                    rel="noreferrer"
                    className={
                      info.title === 'Demo Website' ||
                      info.title === 'Phone' ||
                      info.title === 'Email' ||
                      info.title === 'GitHub'
                        ? 'hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300'
                        : ''
                    }
                    aria-label="Project Website and Phone"
                  >
                    {info.details}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Single project right section */}
      <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
        <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
          {project.ProjectInfo.ProjectDetailsHeading}
        </p>
        {project.ProjectInfo.ProjectDetails.map((details) => {
          return (
            <React.Fragment key={details.id}>
              <p className="font-general-regular text-primary-dark dark:text-primary-light text-xl font-bold mb-7">
                {details.heading}
              </p>
              {details.heading === 'Descriptions' ? (
                <p className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light">
                  {details.details}
                </p>
              ) : (
                <ul>
                  {details.details.map((item, index) => {
                    return (
                      	<li
                        	key={index}
                        	className="list-group-item font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
                      	>
                        <span style={{ fontSize: '0.25em', marginRight: '10px', marginLeft: '16px' }}>
                          	<FontAwesomeIcon icon={faSquareFull} />
                        </span>
                        <strong>{item.heading}:</strong> {item.details}
                      </li>
                    );
                  })}
                </ul>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectInfo;
