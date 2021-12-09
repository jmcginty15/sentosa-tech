import JobDescription from './JobDescription';
import './JobCard.css';

const JobCard = ({ job }) => {
    return (
        <div className="JobCard">
            <h3 className="JobCard-title">{job.title}</h3>
            <h4>Summary</h4>
            <p>{job.summary}</p>
            {job.description.map(description => <JobDescription description={description} level={1} key={description.name} />)}
        </div>
    )
}

export default JobCard;
