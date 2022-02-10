const EducationalDescription = ({ topic }) => {
    return (
        <>
          <h2>{topic.title}</h2>
          <h3>{topic.name}</h3>
          <p>{topic.description}</p>
        </>
    )
}

export default EducationalDescription;