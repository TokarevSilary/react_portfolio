function ProjectList ({props}) {
    return( 
    <>
        <div className='list_photo'>
            {props.map((element, index) => (
              <img
                key={index}
                src={element.img}
                alt={element.category}
              />
            ))}
        </div>
    </>
    )
}

export default ProjectList; 