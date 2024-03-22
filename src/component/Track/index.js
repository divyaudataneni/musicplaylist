const Track = props => {
  const {track, onDeleteTrack} = props
  const {id, imageUrl, name, duration, genre} = track

  const onDelete = () => {
    onDeleteTrack(id)
  }

  return (
    <li>
      <div className="track-cont">
        <div className="track-div">
          <img src={imageUrl} alt="track" className="track-img" />
          <div>
            <p>{name}</p>
            <p>{genre}</p>
          </div>
        </div>
        <div className="track-div">
          <p>{duration}</p>
          <button
            type="button"
            data-testid="delete"
            className="btn"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  )
}

export default Track
