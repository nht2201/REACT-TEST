import React from 'react';
class AddComponent extends React.Component {
    state = {
        title: '',
        salary: '',
        when:'',
        wife:'',
    }
    handleChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleChangeTitleJob2 = (event) => {
        this.setState({
            when: event.target.value
        })
    }
    handleChangeTitleJob3 = (event) => {
        this.setState({
            wife: event.target.value
        })
    }
    handleChangeLastName = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        if (!this.state.title || !this.state.salary) {
            alert('N/a')
            return;
        }
        console.log('>>> check data input: ', this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary,
            when: this.state.when,
            wife: this.state.wife
        })
        this.setState({
            title: '',
            salary: '',
            when: '',
            wife: '',
        })
    }
    render() {
        return (
            <form>
                 <label htmlFor="fname"> Jobname </label><br />
                <input
                    type="text"
                    value={this.state.title}
                    onChange={(event) => this.handleChangeTitleJob(event)}
                />
                <br />
                <label htmlFor="fname">Salary</label><br />
                <input
                    type="text"
                    value={this.state.when}
                    onChange={(event) => this.handleChangeTitleJob2(event)}
                />
                <br />
                <label htmlFor="fname">Position</label><br />
                <input
                    type="text"
                    value={this.state.wife}
                    onChange={(event) => this.handleChangeTitleJob3(event)}
                />
                <br />
                <label htmlFor="lname">Health</label><br />
                <input
                    type="text"
                    value={this.state.salary}
                    onChange={(event) => this.handleChangeLastName(event)}

                /><br /><br />
                

                <br /><br />
                <input type="submit"
                    onClick={(event) => this.handleSubmit(event)}
                />
            </form>
        )
    }
}
export default AddComponent;