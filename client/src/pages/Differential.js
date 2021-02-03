import React, { useState } from 'react';

const Differential = () =>
{
    const [teams, setTeams] = useState('');
    const [ques, setQues] = useState('');
    const handleChange = (e) =>
    {
        switch(e.target.name)
        {
            case "teams":
                setTeams(e.target.value);
                break;
            case "ques":
                setQues(e.target.value);
                break;
            default:
                console.log("");
                break;
        }
    };
    const Table = () =>
    {
        let team_array = [];
        let ques_array = [];
        let i = teams;
        let j = ques;
        while (i > 0) {
            team_array.push(`Team #${i}`);
            i--;
        }
        while(j > 0)
        {
            ques_array.push(`Ques #${j}`);
            j--;
        }
        console.log(team_array);
        return (
            <table>
            <tr>
                Teams
                {ques_array.map(
                    q => <td>{q}</td>
                )}
            </tr>
                {team_array.map(
                    t => <tr><td>{t}</td></tr>
                )}
            </table>
        )
    }
    return (
        <div>
            Score Card for Differential Round
            <br />
            <form>
                <input placeholder = "No. of teams" onChange = {handleChange} name = "teams" />
                <input placeholder = "No. of Questions" onChange = {handleChange} name = "ques" />
            </form>
            <Table />
        </div>
    )
};

export default Differential;
