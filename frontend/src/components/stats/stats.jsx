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
                <td>test data</td>
                <td>test data</td>
            </tr>
            <tr className='challenge'>
                <td>c5</td>
                <td>test data</td>
                <td>test data</td>
            </tr>
            <tr className='challenge'>
                <td>c6</td>
                <td>test data</td>
                <td>test data</td>
            </tr>
            <tr className='challenge'>
                <td>c7</td>
                <td>test data</td>
                <td>test data</td>
            </tr>
            <tr className='challenge'>
                <td>c8</td>
                <td>test data</td>
                <td>test data</td>
            </tr>

          </table>
        );
    }
};

export default Stats;