export default function Cards(props) {
  return (
    <article className="card">
      <div className="main-image-container">
        <img src={props.mainImage} className="main-image" />
      </div>

      <div className="card-content">
        <div className="card-subheading">
          <img src="/imgs/marker.png" />
          <span className="country">{props.country}</span>
          <a href={props.mapsLink}>View on Google Maps</a>
        </div>

        <h1 className="title">{props.destination}</h1>
        <p className="date">{props.date}</p>
        <p className="description">{props.description}</p>
      </div>
    </article>
  )
}
