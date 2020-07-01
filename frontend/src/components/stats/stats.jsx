import React from 'react';

class Stats extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
          <table className='stats-table card-styling'>
            <tr className='stats-headers'>
                <th>Challenges</th>
                <th>My Score</th>
                <th>Challenge Winner</th>
            </tr>
            <tr className='challenge'>
                <td>Friends</td>
                <td>67%</td>
                <td>Zohaib - 92%</td>
            </tr>
            <tr className='challenge'>
                <td>Bob The Builder</td>
                <td>72%</td>
                <td>Isaac - 89%</td>
            </tr>
            <tr className='challenge'>
                <td>Animals and their lovers</td>
                <td>22%</td>
                <td>Danny - 96%</td>
            </tr>
            <tr className='challenge'>
                <td>c4</td>
                <td>t</td>
                <td>Danny - 96%</td>
            </tr>
            <tr className='challenge'>
                <td>Animals and their lovers</td>
                <td>22%</td>
                <td>Danny - 96%</td>
            </tr>
            <tr className='challenge'>
                <td>Animals and their lovers</td>
                <td>22%</td>
                <td>Danny - 96%</td>
            </tr>
            {/* < className="stat-card-one">  */}
              {/* <ul className="challenge-selector">

              </ul>
            </col>
            <div className="stat-card-two">
              <ul className='selected-user-score'>

              </ul>
            </div>
            <div className="stat-card-three">
              <ul className="selected-leader-board">

              </ul>
            </div> */}
          </table>
        );
    }
};

export default Stats;