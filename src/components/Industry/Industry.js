import './Industry.css';

function Industry({name,description}){
  return(
    <div className="industry">
      <div>
        <h6>{name}</h6>
        <p>{description}</p>
      </div>
      
    </div>
  )
}

export default Industry;