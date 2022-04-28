
import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';
class MyComponent extends React.Component {
    //key:value
    state = {
        arrJobs: [
            { id: 'abcJob1', title: 'Developers', when: 'Manager', wife:'30 tuổi', salary: '50000' },
            { id: 'abcJob2', title: 'Testers', when: 'Staff', wife:'40 tuổi', salary: '40000' },
            { id: 'abcJob3', title: 'Project managers', when: 'deputy', wife:'27 tuổi', salary: '1000' }
        ]
    }

    addNewJob = (job) => {
        console.log('check job from parent: ', job)
        // let currenJobs = this.state.arrJobs;
        // currenJobs.push(job)

        this.setState({
            arrJobs: [...this.state.arrJobs, job]
            // arrJobs: currenJobs
        })

    }

    deleteAJob = (job) => {
        let currenJobs = this.state.arrJobs;
        currenJobs = currenJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currenJobs
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('>>> run didupdate:',' prev state:', prevState,' current state:', this.state)
    }

    componentDidMount() {
        console.log('>>> rung component did mount');
    }

    /* 
    JSX => return block
    fragment
    */
    //re-render
    render() {
        console.log('>>> call render: ', this.state)
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />

                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />


            </>
        )
    }
}
export default MyComponent;