import React, { useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import moment from "moment"

const SectionUpdates = props => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetch(
      "https://skepticalinquirer.org/wp-json/wp/v2/posts?_embed&categories=897&per_page=3"
    )
      .then(resp => resp.json())
      .then(data => setBlogs(data))
  })

  return (
    <>
      <div className="home-header">
        <h1>
          <strong id="updates-header">Updates</strong>
        </h1>
        <hr />
      </div>
      <div className="row page-row">
        <div className="col-12 col-lg-10 col-xl-8">
          {blogs.map(blog => (
            <div className="update-row row">
              <div
                className="update-img img-fit"
                style={{
                  backgroundImage:
                    "url(" +
                    blog["_embedded"]["wp:featuredmedia"][0]["media_details"][
                      "sizes"
                    ]["full"]["source_url"] +
                    ")",
                }}
              ></div>
              <div className="update-desc">
                <h4 className="update-title">
                  <a href={blog.link} target="_blank">
                    {blog.title.rendered}
                  </a>
                </h4>
                <p className="update-date">{moment(blog.date).format("LL")}</p>
                {parse(blog.excerpt.rendered)}
              </div>
            </div>
          ))}
          <a
            href="https://skepticalinquirer.org/category/csicon/"
            className="btn green-button"
            id="updates-btn"
            target="_blank"
          >
            See All Articles
          </a>
        </div>
      </div>
    </>
  )
}

export default SectionUpdates
