import JobCard from './JobCard';
import jobs from './jobListings';
import './Jobs.css';

const Jobs = () => {
    return (
        <div className="Jobs">
            <h1>Job Opportunities</h1>
            <div className="Jobs-info">
                We are always looking for great folks. Our open positions are listed below. To apply for a position, please send your resume to <a className="Jobs-link" href="mailto:becky@sentosatech.com">Becky Fields</a>.
            </div>
            <div className="Jobs-list">
                {jobs.map(job => <JobCard job={job} key={job.id} />)}
            </div>
        </div>
    )
}

export default Jobs;
