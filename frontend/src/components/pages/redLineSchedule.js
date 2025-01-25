import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';


function RedLineSchedule() {
  const [redLine, setSchedule] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        'https://api-v3.mbta.com/schedules?filter%5Broute%5D=Red',
      );
      setSchedule(result.data.data);
    }
    fetchData();
  }, []);


  return (
    <div>
      {redLine.map(schedule => (
        <Card
        body
        outline
        color="success"
        className="mx-1 my-2"
        style={{ width: "30rem" }}
      >
        <Card.Body>
        <Card.Title>Red Line Schedule</Card.Title>
        <Card.Text>{schedule.attributes.arrival_time}{schedule.attributes.departure_time}</Card.Text>
        </Card.Body>
      </Card>
      ))}

    </div>
    );
}


export default RedLineSchedule;