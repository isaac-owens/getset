import React from 'react';

class Stats extends React.Component {

    componentDidMount() {
      this.props.fetchMyStats();
    }

    render(){
      let { userStats } = this.props;

        return (
          <table className='stats-table card-styling'>
            <thead>
              <tr className='stats-headers'>
                <th>Challenges</th>
                <th>My Score</th>
                <th>Challenge Winner</th>
              </tr>
            </thead>
            <tbody>
              {
              userStats.length !== 0  ?
              userStats.map((stat, idx) => {
                return(
                  <tr 
                  key={idx}
                  className='challenge'
                  >
                      <td>{stat.hunt_name}</td>
                      <td>{stat.user_score}%</td>
                      <td>{stat.winner} - {stat.winner_score}%</td>
                  </tr>
                )
              }) :
                <div></div>
                }
            </tbody>
          </table>
        );
    }
};

export default Stats;