import fetch from 'isomorphic-fetch'

export default class Home extends React.Component {

    state = {
        username: null,
        user: null
    }

    handleSumit = e => {
        e.preventDefault()

        const {username} = this.state

        fetch('https://api.github.com/users/${username}')
        .then(res => res.json())
        .then(user => this.setState({user}))
        .catch(err => console.error(err))
    }


      
    render() {
        const {user} = this.state


        return (
            <div>
                {user && (
                    <div>
                        <img src={user.avatar_url} alt={user.login} width={50} />
                        <h3>{user.name}</h3>
                        <p>{user.company}</p>
                    </div>
                )}
                <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Type GitHub username..." 
                    onChange={e => this.setState({username: e.target.value})}
                    />
                    <button type="submit">Go!</button>
                </form>
            </div>
        )
    }
}