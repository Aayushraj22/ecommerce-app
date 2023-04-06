import React from 'react'

const BlogCard = (props) => {
  return (
  <>
  <div className="card m-2" style={{width: '20rem'}}>
    <a href={props.url} target="_blank" rel='noreferrer'>
      <img src={props.url} className="card-img-top img-fluid" alt="imagesection" />
    </a>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.desc} </p>
      <a href="/" className="btn btn-primary" target='_blank'>Read more</a>
    </div>
</div>
  </>
  )
}

export default BlogCard