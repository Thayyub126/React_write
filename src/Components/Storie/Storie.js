import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
function Storie() {
  let navigate = useNavigate();
  const [indexing, setIndexing] = useState(false);
  const [pageTitle, setPageTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [metaKeywords, setMetaKeywords] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic here
    // You would typically send this data to a server or use it in some other way
    console.log({
      indexing,
      pageTitle,
      metaDescription,
      metaKeywords,
      selectedFile,
    });
  };
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const navigateToNewStoriePage = () => {
    navigate("/newstorie"); // Adjust the path as needed
  };
  const [authorName, setAuthorName] = useState("");
  const [bio, setBio] = useState("");
  const [blogName, setBlogName] = useState("");
  const [domain, setDomain] = useState("");

  const handleUpdate = () => {
    // You would handle the update logic here, such as sending data to an API
    console.log({ authorName, bio, blogName, domain });
  };
  return (
    <>
      <section className="stories-sec py-sm-5 py-4">
        <div className="container">
          <div className="story-info-in mx-auto">
            <ul
              className="nav nav-pills mb-lg-5 mb-md-4 mb-3"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  <i className="fa fa-plus-circle"></i> Stories
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  <i className="fa fa-search"></i> SEO
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  <i className="fa fa-user"></i> My Account
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                {/* Content for the 'Stories' tab */}
                <div className="row">
                  <div className="col-md-8 col-7">
                    <h4 className="story-title">Stories</h4>
                  </div>
                  <div className="col-md-4 col-5 story-btn">
                    <button
                      onClick={navigateToNewStoriePage}
                      className="btn btn-style"
                    >
                      <i className="fa fa-plus-circle"></i> New Story
                    </button>
                  </div>
                </div>
                <div className="row w3l-homeblock1">
                  <div className="col-12">
                    <div className="list-view list-view1 text-left">
                      <div className="grids5-info mt-4">
                        <a href="#blog-single" className="d-block zoom">
                          <img
                            src="assets/images/story-1.jpg"
                            alt=""
                            className="img-fluid radius-image news-image"
                          />
                        </a>
                        <div className="blog-info align-self">
                          <a href="#blog-single" className="blog-desc1">
                            New Story
                          </a>
                          <ul className="blog-meta story-sub-t mb-0">
                            <li className="meta-item blog-lesson">
                              <span className="meta-value">Updated:</span>
                            </li>
                            <li className="meta-item blog-lesson">
                              <span className="meta-value">Sep 13, 2023 </span>
                            </li>
                            <li className="meta-item blog-students">
                              <span className="meta-value"> 6min read</span>
                            </li>
                          </ul>
                          <ul className="blog-meta">
                            <li className="meta-item blog-lesson">
                              <span className="meta-value">Created: </span>
                            </li>
                            <li className="meta-item blog-lesson">
                              <span className="meta-value">Sep 13, 2023 </span>
                            </li>
                            <li className="meta-item blog-students">
                              <span className="meta-value"> 6min read</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mt-4">
                    <div className="list-view list-view1 text-left">
                      <div className="grids5-info mt-4">
                        <a href="#blog-single" className="d-block zoom">
                          <img
                            src="assets/images/story-2.jpg"
                            alt=""
                            className="img-fluid radius-image news-image"
                          />
                        </a>
                        <div className="blog-info align-self">
                          <a href="#blog-single" className="blog-desc1">
                            A story about how this editor Works
                          </a>
                          <ul className="blog-meta story-sub-t mb-0">
                            <li className="meta-item blog-lesson">
                              <span className="meta-value">Updated:</span>
                            </li>
                            <li className="meta-item blog-lesson">
                              <span className="meta-value">Sep 13, 2023 </span>
                            </li>
                            <li className="meta-item blog-students">
                              <span className="meta-value"> 6min read</span>
                            </li>
                          </ul>
                          <ul className="blog-meta">
                            <li className="meta-item blog-lesson">
                              <span className="meta-value">Created: </span>
                            </li>
                            <li className="meta-item blog-lesson">
                              <span className="meta-value">Sep 13, 2023 </span>
                            </li>
                            <li className="meta-item blog-students">
                              <span className="meta-value"> 6min read</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="list-view list-view1 text-left">
                      <div className="grids5-info mt-4">
                        <a href="#blog-single" className="d-block zoom">
                          <img
                            src="assets/images/story-3.jpg"
                            alt=""
                            className="img-fluid radius-image news-image"
                          />
                        </a>
                        <div className="blog-info align-self">
                          <a href="#blog-single" className="blog-desc1">
                            Write your own story
                          </a>
                          <ul className="blog-meta story-sub-t mb-0">
                            <li className="meta-item blog-lesson">
                              <span className="meta-value">Updated:</span>
                            </li>
                            <li className="meta-item blog-lesson">
                              <span className="meta-value">Sep 13, 2023 </span>
                            </li>
                            <li className="meta-item blog-students">
                              <span className="meta-value"> 6min read</span>
                            </li>
                          </ul>
                          <ul className="blog-meta">
                            <li className="meta-item blog-lesson">
                              <span className="meta-value">Created: </span>
                            </li>
                            <li className="meta-item blog-lesson">
                              <span className="meta-value">Sep 13, 2023 </span>
                            </li>
                            <li className="meta-item blog-students">
                              <span className="meta-value"> 6min read</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Content for the 'SEO' tab */}
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div className="seoonefrm-info">
                  <div className="seo-content">
                    <form onSubmit={handleFormSubmit}>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="anime"
                          name="hobby"
                          checked={indexing}
                          onChange={(e) => setIndexing(e.target.checked)}
                        />
                        <label className="form-check-label" htmlFor="anime">
                          Block search engine indexing
                        </label>
                      </div>
                      <div className="form-gd">
                        <label htmlFor="fname">Page title</label>
                        <input
                          type="text"
                          id="fname"
                          name="pageTitle"
                          placeholder="add your page title here"
                          value={pageTitle}
                          onChange={(e) => setPageTitle(e.target.value)}
                        />
                      </div>
                      <div className="form-gd">
                        <label htmlFor="fdes">Meta description</label>
                        <input
                          type="text"
                          id="fmeta"
                          name="metaDescription"
                          placeholder="add a meta description to rank better on search"
                          value={metaDescription}
                          onChange={(e) => setMetaDescription(e.target.value)}
                        />
                      </div>
                      <div className="form-gd">
                        <label htmlFor="fkeyword">Meta keywords</label>
                        <input
                          type="text"
                          id="keyword"
                          name="metaKeywords"
                          placeholder="add keywords separated by comma."
                          value={metaKeywords}
                          onChange={(e) => setMetaKeywords(e.target.value)}
                        />
                      </div>
                      <div className="upload-container mt-4">
                        <h6>Opengraph Image</h6>
                        <div className="upload-btn-wrapper">
                          <button type="button" className="btn choosefile">
                            Choose file
                          </button>
                          <input
                            type="file"
                            name="myfile"
                            onChange={handleFileChange}
                          />
                          <span>
                            {selectedFile
                              ? selectedFile.name
                              : "No file chosen"}
                          </span>
                        </div>

                        <button type="submit" className="update-btn btn mt-4">
                          Update
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                {/* Content for the 'SEO' tab */}
              </div>
              {/* Content for the 'My Account' tab */}
              <div
                className="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                <div className="seoonefrm-info">
                  <div className="seo-content">
                    <div className="form-gd">
                      <label htmlFor="fname">Author name</label>
                      <input
                        type="text"
                        id="fname"
                        value={authorName}
                        onChange={(e) => setAuthorName(e.target.value)}
                        placeholder="A name that everyone will see"
                      />
                    </div>
                    <div className="form-gd">
                      <label htmlFor="fdes">Bio</label>
                      <input
                        type="text"
                        id="fmeta"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        placeholder="Tell everyone a little about yourself"
                      />
                    </div>
                    <div className="form-gd">
                      <label htmlFor="fkeyword">Blog/Publication name</label>
                      <input
                        type="text"
                        id="keyword"
                        value={blogName}
                        onChange={(e) => setBlogName(e.target.value)}
                        placeholder="Catchy names are the best"
                      />
                    </div>
                    <div className="upload-container mt-4">
                      <h6>Connect your domain</h6>
                      <div className="dropdown-container">
                        <select
                          className="domain-dropdown"
                          value={domain}
                          onChange={(e) => setDomain(e.target.value)}
                        >
                          <option value="">Select your domain</option>
                          <option value="domain1">domain1.com</option>
                          <option value="domain2">domain2.com</option>
                          <option value="domain3">domain3.net</option>
                          <option value="domain4">domain4.org</option>
                        </select>
                      </div>
                      <button
                        onClick={handleUpdate}
                        className="update-btn btn mt-4"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
                {/* Content for the 'My Account' tab */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Storie;
