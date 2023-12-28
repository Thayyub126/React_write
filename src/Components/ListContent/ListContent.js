// ListContent.js
import React from "react";

function ListContent() {
  return (
    <section className="list-content py-5 pt-0" id="lists">
      <div className="container">
        <div className="list-content-inf">
          <div className="row list-grid-inf">
            <div className="col-lg-5 list-left-info">
              <h4 className="pe-xl-5 me-xl-5">
                The 200 Year
                <label className="fontitalicw3">data promise</label>
              </h4>
            </div>
            <div className="col-lg-7 list-right-info mt-lg-0 mt-md-3 mt-2">
              <p>
                With the 200-year promise, writers are guaranteed that their
                content will live on, published on IPFS or Arweave based on
                their choice. Especially with Arweave, the content stays live
                indefinitely, irrespective of the existence of write.link. This
                ensures that the writer's legacy and thoughts are preserved for
                generations.
              </p>
            </div>
          </div>

          <div className="row list-grid-inf mt-lg-5 mt-4">
            <div className="col-lg-5 list-left-info">
              <h4>
                Data Ownership{" "}
                <label className="fontitalicw3">
                  Your Write it, You own it.
                </label>
              </h4>
            </div>
            <div className="col-lg-7 list-right-info mt-lg-0 mt-md-3 mt-2">
              <p>
                You always own your intellectual property, mailing list, and
                revenue. With full editorial control and no gatekeepers, you can
                do the work you most believe in.
              </p>
            </div>
          </div>

          <div className="row list-grid-inf mt-lg-5 mt-4">
            <div className="col-lg-5 list-left-info">
              <h4>
                Content Monetization
                <label className="fontitalicw3">Earn from your writing</label>
              </h4>
            </div>
            <div className="col-lg-7 list-right-info mt-lg-0 mt-md-3 mt-2">
              <p>
                Writers need to be rewarded for their efforts and creativity.
                Centralized platforms often take a significant cut of earnings
                or place restrictions on monetization methods. Write.link
                provides you diverse monetization streams with maximum
                transparency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ListContent;
