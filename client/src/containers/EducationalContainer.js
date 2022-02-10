import React, { useEffect } from 'react';
import EducationalDescription from '../components/EducationalDescription';

const EducationalContainer = () => {

    const [topics, setTopics] = useState([]);

    useEffect(() => {
        fetchTopics()
    }, []);

    const fetchTopics = () => {
        fetch('http://localhost:5000/api/topics')
          .then(response => response.json())
          .then(topics => setTopics(topics));
    }

    return (
        <EducationalDescription
        topics={topics}
        />
    )
}


export default EducationalContainer;
