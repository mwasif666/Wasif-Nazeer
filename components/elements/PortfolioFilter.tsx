"use client";
import Isotope from "isotope-layout";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

export default function PortfolioFilter() {
  // Isotope
  const isotope = useRef<Isotope | null>(null);
  const [filterKey, setFilterKey] = useState<string>("*");

  useEffect(() => {
    const timeout = setTimeout(() => {
      isotope.current = new Isotope(".masonry-active", {
        itemSelector: ".filter-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".filter-item",
        },
      });
    }, 1000);

    // Cleanup on unmount
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (isotope.current) {
      isotope.current.arrange({
        filter: filterKey === "*" ? "*" : `.${filterKey}`,
      });
    }
  }, [filterKey]);

  const handleFilterKeyChange = useCallback(
    (key: string) => () => {
      setFilterKey(key);
    },
    []
  );

  const activeBtn = (value: string) =>
    value === filterKey
      ? "active btn btn-md btn-filter mb-2 me-2 text-uppercase"
      : "btn btn-md btn-filter mb-2 me-2 text-uppercase";

  return (
    <>
      <div className="container">
        <div className="text-start">
          <div className="button-group filter-button-group filter-menu-active">
            <button
              className={activeBtn("*")}
              onClick={handleFilterKeyChange("*")}
            >
              All Projects
            </button>
            <button
              className={activeBtn("brand")}
              onClick={handleFilterKeyChange("brand")}
            >
              Branding
            </button>
            <button
              className={activeBtn("webdesign")}
              onClick={handleFilterKeyChange("webdesign")}
            >
              Web Design
            </button>
            <button
              className={activeBtn("ui")}
              onClick={handleFilterKeyChange("ui")}
            >
              UI/UX
            </button>
            <button
              className={activeBtn("app")}
              onClick={handleFilterKeyChange("app")}
            >
              App Dev
            </button>
          </div>
        </div>
        <div className="row masonry-active justify-content-between mt-6">
          <div className="grid-sizer" />
          <div className="filter-item col-lg-4 col-12 ui">
            <div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
              <Link href="	">
                <img
                  className="rounded-3 w-100 zoom-img"
                  src="/assets/imgs/projects/projects-1/img-1.png"
                  alt="infinia"
                />
              </Link>
              <div className="d-flex align-items-center mt-4">
                <Link href="#" className="project-card-content">
                  <h3 className="fw-semibold">Photo App UI/UX</h3>
                  <p>Bokeh network</p>
                </Link>
                <Link
                  href="#"
                  className="project-card-icon icon-shape ms-auto icon-md rounded-circle"
                >
                  <i className="ri-arrow-right-up-line" />
                </Link>
              </div>
            </div>
          </div>
          <div className="filter-item col-lg-4 col-12 dataanalysis brand">
            <div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
              <Link href="#">
                <img
                  className="rounded-3 w-100 zoom-img"
                  src="/assets/imgs/GProject/21.jpg"
                  alt="infinia"
                />
              </Link>
              <div className="d-flex align-items-center mt-4">
                <Link href="#" className="project-card-content">
                  <h3 className="fw-semibold">Design Post</h3>
                  <p>Silly18</p>
                </Link>
                <Link
                  href="#"
                  className="project-card-icon icon-shape ms-auto icon-md rounded-circle"
                >
                  <i className="ri-arrow-right-up-line" />
                </Link>
              </div>
            </div>
          </div>
          <div className="filter-item col-lg-4 col-12 dataanalysis brand">
            <div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
              <Link href="#">
                <img
                  className="rounded-3 w-100 zoom-img"
                  src="/assets/imgs/GProject/6.jpg"
                  alt="infinia"
                />
              </Link>
              <div className="d-flex align-items-center mt-4">
                <Link href="#" className="project-card-content">
                  <h3 className="fw-semibold">Design Brand</h3>
                  <p>Wara</p>
                </Link>
                <Link
                  href="#"
                  className="project-card-icon icon-shape ms-auto icon-md rounded-circle"
                >
                  <i className="ri-arrow-right-up-line" />
                </Link>
              </div>
            </div>
          </div>
          <div className="filter-item col-lg-4 col-12 dataanalysis brand">
            <div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
              <Link href="#">
                <img
                  className="rounded-3 w-100 zoom-img"
                  src="/assets/imgs/GProject/19.jpg"
                  alt="infinia"
                />
              </Link>
              <div className="d-flex align-items-center mt-4">
                <Link href="#" className="project-card-content">
                  <h3 className="fw-semibold">Design Consultation</h3>
                  <p>enny</p>
                </Link>
                <Link
                  href="#"
                  className="project-card-icon icon-shape ms-auto icon-md rounded-circle"
                >
                  <i className="ri-arrow-right-up-line" />
                </Link>
              </div>
            </div>
          </div>
          <div className="filter-item col-lg-4 col-12 app dataanalysis">
            <div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
              <Link href="#">
                <img
                  className="rounded-3 w-100 zoom-img"
                  src="/assets/imgs/projects/projects-1/img-2.png"
                  alt="infinia"
                />
              </Link>
              <div className="d-flex align-items-center mt-4">
                <Link href="#" className="project-card-content">
                  <h3 className="fw-semibold">Mobile App Design</h3>
                  <p>Tech Innovators Inc.</p>
                </Link>
                <Link
                  href="#"
                  className="project-card-icon icon-shape ms-auto icon-md rounded-circle"
                >
                  <i className="ri-arrow-right-up-line" />
                </Link>
              </div>
            </div>
          </div>
          <div className="filter-item col-lg-4 col-12 ui">
            <div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
              <Link href="#">
                <img
                  className="rounded-3 w-100 zoom-img"
                  src="/assets/imgs/projects/projects-1/img-3.png"
                  alt="infinia"
                />
              </Link>
              <div className="d-flex align-items-center mt-4">
                <Link href="#" className="project-card-content">
                  <h3 className="fw-semibold">Interaction Design</h3>
                  <p>HealthTrack Solutions</p>
                </Link>
                <Link
                  href="#"
                  className="project-card-icon icon-shape ms-auto icon-md rounded-circle"
                >
                  <i className="ri-arrow-right-up-line" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
