import React from 'react'

export default function SearchPlace({setCityName, onSearch}) {
  return (
    <>
       <div className="input-group mb-3 my-4">
        <input
          type="text"
          className="form-control"
          placeholder="Enter City Name"
          aria-label="Recipient’s username"
          aria-describedby="button-addon2"

          onChange={(event)=>setCityName(event.target.value)}
        />
        <button
          className="btn btn-info"
          type="button"
          id="button-addon2"
          onClick={onSearch}
        >
          View
        </button>
      </div>
    </>
  )
}
