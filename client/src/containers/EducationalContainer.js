import React, { useState, useEffect } from 'react';
import EducationalDescription from '../components/EducationalDescription';

const EducationalContainer = ({ topicID }) => {

    const [topic, setTopic] = useState([]);

    useEffect(() => {
        fetchTopic()
    }, []);

    const fetchTopic = () => {
        fetch('http://localhost:5000/api/topics')
            .then(response => response.json())
            .then(topics => {
                const foundTopic = topics.find((t) => {
                    return t._id === topicID
                })

                setTopic(foundTopic)
            });
    }

    return (
        <EducationalDescription
            topic={topic}
        />
    )
}


export default EducationalContainer;
