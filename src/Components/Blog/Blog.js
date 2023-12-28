// import React, { useState } from "react";

// const tabs = ["Tab1", "Tab2", "Tab3", "Tab4", "Tab5", "Tab6"];
// const images = [
//   "assets/images/blog-1.jpg",
//   "assets/images/blog-2.jpg",
//   "assets/images/blog-3.jpg",
//   "assets/images/blog-6.jpg",
//   "assets/images/blog-4.jpg",
//   "assets/images/blog-5.jpg",
// ];
// const title = [
//   "Content for Tab 1",
//   "Content for Tab 2",
//   "Content for Tab 3",
//   "Content for Tab 4",
//   "Content for Tab 5",
//   "Content for Tab 6",
// ];
// const author = ["Name 1", "Name 2", "Name 3", "Name 4", "Name 5", "Name 6"];

// const Tab = ({ label, onClick, isActive }) => (
//   <div className={`tab ${isActive ? "active" : ""}`} onClick={onClick}>
//     {label}
//   </div>
// );

// const Content = ({ image, contentTitle, authorName }) => (
//   <div className="content">
//     <img src={image} alt={contentTitle} />
//     <h3>{contentTitle}</h3>
//     <p>Author: {authorName}</p>
//   </div>
// );

// const VerticalTabs = () => {
//   const tabData = tabs.map((tab, index) => ({
//     id: index + 1,
//     label: tab,
//     image: images[index],
//     contentTitle: title[index],
//     authorName: author[index],
//   }));

//   const [activeTab, setActiveTab] = useState(tabData[0].id);

//   const handleTabClick = (id) => {
//     setActiveTab(id);
//   };

//   return (
//     <div className="app">
//       <div className="tabs">
//         {tabData.map((tab) => (
//           <Tab
//             key={tab.id}
//             label={tab.label}
//             onClick={() => handleTabClick(tab.id)}
//             isActive={activeTab === tab.id}
//           />
//         ))}
//       </div>
//       <Content
//         image={tabData.find((tab) => tab.id === activeTab).image}
//         contentTitle={tabData.find((tab) => tab.id === activeTab).contentTitle}
//         authorName={tabData.find((tab) => tab.id === activeTab).authorName}
//       />
//     </div>
//   );
// };

// export default VerticalTabs;
// import React, { useState } from "react";

// const tabs = ["Tab1", "Tab2", "Tab3", "Tab4", "Tab5", "Tab6"];
// const images = [
//   "assets/images/blog-1.jpg",
//   "assets/images/blog-2.jpg",
//   "assets/images/blog-3.jpg",
//   "assets/images/blog-6.jpg",
//   "assets/images/blog-4.jpg",
//   "assets/images/blog-5.jpg",
// ];
// const title = [
//   "Content for Tab 1",
//   "Content for Tab 2",
//   "Content for Tab 3",
//   "Content for Tab 4",
//   "Content for Tab 5",
//   "Content for Tab 6",
// ];
// const author = ["Name 1", "Name 2", "Name 3", "Name 4", "Name 5", "Name 6"];

// const Tab = ({ label, onClick, isActive }) => (
//   <div className={`tab ${isActive ? "active" : ""}`} onClick={onClick}>
//     {label}
//   </div>
// );

// const Content = ({ image, contentTitle, authorName }) => (
//   <div className="content">
//     <img src={image} alt={contentTitle} />
//     <h3>{contentTitle}</h3>
//     <p>Author: {authorName}</p>
//   </div>
// );

// const VerticalTabs = () => {
//   const tabData = tabs.map((tab, index) => ({
//     id: index + 1,
//     label: tab,
//     image: images[index],
//     contentTitle: title[index],
//     authorName: author[index],
//   }));

//   const [activeTab, setActiveTab] = useState(tabData[0].id);

//   const handleTabClick = (id) => {
//     setActiveTab(id);
//   };

//   const getRandomImages = () => {
//     const randomIndices = [];
//     while (randomIndices.length < 6) {
//       const randomIndex = Math.floor(Math.random() * images.length);
//       if (!randomIndices.includes(randomIndex)) {
//         randomIndices.push(randomIndex);
//       }
//     }
//     return randomIndices.map((index) => images[index]);
//   };

//   const randomImages = getRandomImages();

//   return (
//     <div className="app">
//       <div className="tabs">
//         {tabData.map((tab) => (
//           <Tab
//             key={tab.id}
//             label={tab.label}
//             onClick={() => handleTabClick(tab.id)}
//             isActive={activeTab === tab.id}
//           />
//         ))}
//       </div>

//       <div className="grid">
//         {randomImages.map((image, index) => (
//           <img key={index} src={image} alt={`Random Image ${index + 1}`} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VerticalTabs;

// import React, { useState } from "react";

// const tabs = [
//   "Featured",
//   "Motivation",
//   "Productivity",
//   "Development",
//   "Culture",
//   "Technology",
//   "Politics",
//   "Entertainment",
// ];
// const images = [
//   "assets/images/blog-1.jpg",
//   "assets/images/blog-2.jpg",
//   "assets/images/blog-3.jpg",
//   "assets/images/blog-6.jpg",
//   "assets/images/blog-4.jpg",
//   "assets/images/blog-5.jpg",
//   "assets/images/blog-2.jpg",
//   "assets/images/blog-3.jpg",
// ];
// const title = [
//   "Content for Tab 1",
//   "Content for Tab 2",
//   "Content for Tab 3",
//   "Content for Tab 4",
//   "Content for Tab 5",
//   "Content for Tab 6",
//   "Content for Tab 7",
//   "Content for Tab 8",
// ];
// const author = [
//   "Name 1",
//   "Name 2",
//   "Name 3",
//   "Name 4",
//   "Name 5",
//   "Name 6",
//   "Name 7",
//   "Name 8",
// ];

// const Tab = ({ label, onClick, isActive }) => (
//   <div className={`tab ${isActive ? "active" : ""}`} onClick={onClick}>
//     {label}
//   </div>
// );

// const Content = ({ image, contentTitle, authorName }) => (
//   <div className="content">
//     <img src={image} alt={contentTitle} />
//     <h3>{contentTitle}</h3>
//     <p>Author: {authorName}</p>
//   </div>
// );

// const VerticalTabs = () => {
//   const tabData = tabs.map((tab, index) => ({
//     id: index + 1,
//     label: tab,
//     image: images[index],
//     contentTitle: title[index],
//     authorName: author[index],
//   }));

//   const [activeTab, setActiveTab] = useState(tabData[0].id);

//   const handleTabClick = (id) => {
//     setActiveTab(id);
//   };

//   const getRandomImages = () => {
//     const randomIndices = [];
//     while (randomIndices.length < 6) {
//       const randomIndex = Math.floor(Math.random() * images.length);
//       if (!randomIndices.includes(randomIndex)) {
//         randomIndices.push(randomIndex);
//       }
//     }
//     return randomIndices.map((index) => images[index]);
//   };

//   const randomImages = getRandomImages();

//   return (
//     <section className="expolore-blogs py-lg-5 py-3 pb-0" id="blog">
//       <div className="container">
//         <div className="row mb-md-5 mb-4 blog-header">
//           <div className="col-12 blog-title">
//             <h3>
//               Explore <span className="fontitalicw3">Blogs</span>
//             </h3>
//             <p className="pe-xl-5">
//               {" "}
//               Explore Blogs that are Written using Write.link.
//             </p>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-md-3">
//             <div className="tabs">
//               {tabData.map((tab) => (
//                 <Tab
//                   key={tab.id}
//                   label={tab.label}
//                   onClick={() => handleTabClick(tab.id)}
//                   isActive={activeTab === tab.id}
//                 />
//               ))}
//             </div>
//           </div>

//           <div className="col-md-9 mt-md-0 mt-4">
//             <div className="row">
//               {randomImages.map((image, index) => (
//                 <div className="col-4 p-0 gd-box" key={index}>
//                   <img
//                     className="bloggdImage"
//                     src={image}
//                     alt={`Random Image ${index + 1}`}
//                   />
//                   <div className="content-details fadeIn-bottom">
//                     <div className="top-img-inf">
//                       <h6>Technology</h6>
//                       <div className="number-text">1</div>
//                     </div>
//                     <h3 className="content-title">
//                       The Next Big Web on The Sky
//                     </h3>
//                     <p className="content-text">James C</p>

//                     <div className="bottom-readmore">
//                       <h4 className="readmore">Read Now</h4>
//                       <span className="read-actionicon">
//                         <i className="fa fa-arrow-up"></i>
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VerticalTabs;

import React, { useState } from "react";

const tabs = [
  "Featured",
  "Motivation",
  "Productivity",
  "Development",
  "Culture",
  "Technology",
  "Politics",
  "Entertainment",
];
const images = [
  "assets/images/blog-1.jpg",
  "assets/images/blog-2.jpg",
  "assets/images/blog-3.jpg",
  "assets/images/blog-6.jpg",
  "assets/images/blog-4.jpg",
  "assets/images/blog-5.jpg",
  "assets/images/blog-2.jpg",
  "assets/images/blog-3.jpg",
];
const title = [
  "The Next Big Web on The Sky",
  "The Yellow Bus on The Water",
  "Virtual Reality, Big Cloud",
  "Share Khan Of The Jungle Book",
  "The Next Big Web on The Sky",
  "The Yellow Bus on The Water",
  "Virtual Reality, Big Cloud",
  "Share Khan Of The Jungle Book",
];
const author = [
  "James C",
  "Robert D",
  "Simba & waziri",
  "James C",
  "Robert D",
  "Simba & waziri",
  "James C",
  "Robert D",
];

const Tab = ({ label, onClick, isActive }) => (
  <div className={`tab ${isActive ? "active" : ""}`} onClick={onClick}>
    {label}
  </div>
);

const VerticalTabs = () => {
  const tabData = tabs.map((tab, index) => ({
    id: index + 1,
    label: tab,
    image: images[index],
    contentTitle: title[index],
    authorName: author[index],
  }));

  const [activeTab, setActiveTab] = useState(tabData[0].id);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  const getRandomImages = () => {
    const randomIndices = [];
    while (randomIndices.length < 6) {
      const randomIndex = Math.floor(Math.random() * images.length);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }
    return randomIndices.map((index) => images[index]);
  };

  const randomImages = getRandomImages();

  return (
    <section className="expolore-blogs py-lg-5 py-3 pb-0 mt-lg-5" id="blog">
      <div className="container">
        <div className="row mb-md-5 mb-4 blog-header">
          <div className="col-12 blog-title">
            <h3>
              Explore <span className="fontitalicw3">Blogs</span>
            </h3>
            <p className="pe-xl-5">
              {" "}
              Explore Blogs that are Written using Write.link.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="tabs">
              {tabData.map((tab) => (
                <Tab
                  key={tab.id}
                  label={tab.label}
                  onClick={() => handleTabClick(tab.id)}
                  isActive={activeTab === tab.id}
                />
              ))}
            </div>
          </div>

          <div className="col-md-9 mt-md-0 mt-4">
            <div className="row">
              {randomImages.map((image, index) => (
                <div className="col-lg-4 col-6 p-0 gd-box" key={index}>
                  <img
                    className="bloggdImage"
                    src={image}
                    alt={`Random Image ${index + 1}`}
                  />
                  <div className="content-details fadeIn-bottom">
                    <div className="top-img-inf">
                      <h6>{tabData[activeTab - 1].label}</h6>
                      <div className="number-text">{index + 1}</div>
                    </div>
                    <h3 className="content-title">
                      {tabData[activeTab - 1].contentTitle}
                    </h3>
                    <p className="content-text">
                      {tabData[activeTab - 1].authorName}
                    </p>

                    <div className="bottom-readmore">
                      <h4 className="readmore">Read Now</h4>
                      <span className="read-actionicon">
                        <i className="fa fa-arrow-up"></i>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerticalTabs;
