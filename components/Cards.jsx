export default function Cards(props) {
  return (
    <article className="card">
      <div className="main-image-container">
        <img src={props.entry.img.src} alt={props.entry.img.alt} className="main-image" />
      </div>

      <div className="card-content">
        <div className="card-subheading">
          <img src="/imgs/marker.png" />
          <span className="country">{props.entry.country}</span>
          <a href={props.entry.googleMapsLink}>View on Google Maps</a>
        </div>

        <h1 className="title">{props.entry.title}</h1>
        <p className="date">{props.entry.dates}</p>
        <p className="description">{props.entry.text}</p>
      </div>
    </article>
  )
}
