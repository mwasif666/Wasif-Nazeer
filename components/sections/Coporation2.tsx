import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function Coporation2() {
  return (
    <>
      <section id="aboutus" className="section-coporation">
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-8">
              <div className="rounded-3 border border-1 position-relative overflow-hidden">
                <div className="box-linear-animation">
                  <div className="p-lg-8 p-md-6 p-3">
                    <div className="d-flex align-items-center">
                      <svg
                        className="text-primary-2 me-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width={5}
                        height={6}
                        viewBox="0 0 5 6"
                        fill="none"
                      >
                        <circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
                      </svg>
                      <span className="text-linear-4 d-flex align-items-center">
                        {" "}
                        Cooperation{" "}
                      </span>
                    </div>
                    <h3 className="fw-medium">
                      More than +110{" "}
                      <span className="text-300">
                        companies <br />
                      </span>{" "}
                      trusted <span className="text-300">worldwide_</span>
                    </h3>
                    <div
                      className="my-5 border border-1 rounded-2 p-3"
                      style={{
                        backgroundColor: "white",
                      }}
                    >
                      {/* Carausel Scroll */}
                      <Marquee className="carouselTicker carouselTicker-left position-relative z-1">
                        <ul className="carouselTicker__list m-0">
                          <li className="carouselTicker__item">
                            <img
                              src="https://rootsbmd.com/wp-content/uploads/2023/04/Roots-Logo-Asterik-PNG-purple-01.png"
                              alt=""
                            />
                          </li>
                          <li className="carouselTicker__item">
                            <img
                              src="https://snjglobalservices.com/wp-content/uploads/2022/03/SNJ-3-e1730238607719.png"
                              alt=""
                            />
                          </li>
                          <li className="carouselTicker__item">
                            <img
                              src="https://webwiretech.com/wp-content/uploads/2024/06/screencapture-prac-snjglobalservices-portfolio-2024-05-01-15_11_08.png"
                              alt=""
                            />
                          </li>
                          <li className="carouselTicker__item">
                            <img
                              src="https://cdn-ilbfbad.nitrocdn.com/VLoaoIWNgbiYMynYNkdWJfoPeAZAjuxg/assets/images/optimized/rev-49dbf65/extensia.cloud/wp-content/uploads/2024/05/logo.png"
                              alt=""
                            />
                          </li>
                          <li className="carouselTicker__item">
                            <img
                              src="assets/imgs/home-page-2/hero-1/trafex.png"
                              alt=""
                            />
                          </li>
                          <li className="list-inline-item">
                            <img
                              src="https://trustmarq.com/wp-content/uploads/2018/11/Trustmarq_Logo.jpg"
                              alt=""
                            />
                          </li>
                          <li className="carouselTicker__item">
                            <img
                              src="https://www-static.parkpoint24.de/wp-content/uploads/2025/02/image_2025-02-14_120919895-removebg-preview.png"
                              alt=""
                            />
                          </li>
                        </ul>
                      </Marquee>
                      <Marquee
                        className="carouselTicker carouselTicker-right position-relative z-1 mt-3"
                        direction="right"
                      >
                        <ul className="carouselTicker__list m-0">
                          <li className="carouselTicker__item">
                            <img
                              src="assets/imgs/home-page-2/hero-1/images.png"
                              alt=""
                            />
                          </li>
                          <li className="carouselTicker__item">
                            <img
                              src="https://bridgeprecisiontools.com/wp-content/uploads/2020/09/cropped-cropped-sdfsdfsdfs-1536x706.webp"
                              alt=""
                            />
                          </li>
                          <li className="carouselTicker__item">
                            <img
                              src="https://vampiretools.com/wp-content/uploads/2024/10/Asset-3-300x116-1.png"
                              alt=""
                            />
                          </li>
                          <li className="carouselTicker__item">
                            <img
                              src="https://www.waterlinkpak.com/wp-content/uploads/2021/02/waterlink-logo-for-web-01.png"
                              alt=""
                            />
                          </li>
                          {/* <li className="carouselTicker__item">
                            <img
                              src=""
                              alt=""
                            />
                          </li> */}
                          <li className="carouselTicker__item">
                            <img
                              src="assets/imgs/home-page-2/hero-1/tri.png"
                              alt=""
                            />
                          </li>
                        </ul>
                      </Marquee>
                    </div>
                    <div className="d-flex flex-column flex-md-row align-items-center gap-3">
                      <div>
                        <div className="circle-1 position-relative z-0">
                          <div className="circle-2 position-absolute top-50 start-50 translate-middle z-1">
                            <div className="position-absolute top-50 start-50 translate-middle z-2">
                              <img
                                className="w-100 h-100 rounded-circle"
                                src="assets/imgs/home-page-2/hero-1/people.png"
                                alt="zelio"
                              />
                              <svg
                                className="text-primary-2 position-absolute bottom-0 end-0"
                                xmlns="http://www.w3.org/2000/svg"
                                width={9}
                                height={9}
                                viewBox="0 0 5 6"
                                fill="none"
                              >
                                <circle
                                  cx="2.5"
                                  cy={3}
                                  r="2.5"
                                  fill="#A8FF53"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-column gap-2">
                        <Link
                          target="_blank"
                          href="https://join.skype.com/invite/t3g5rpPHCIpq"
                        >
                          <i className="ri-skype-fill" />
                          <span className="text-300">
                            [skype]{" "}
                            <span className="text-secondary-2">
                              Muhammad Wasif
                            </span>
                          </span>
                        </Link>
                        <Link href="tel:+923013769247">
                          <i className="ri-phone-fill" />
                          <span className="text-300">
                            [phone]{" "}
                            <span className="text-secondary-2">
                              +92 301 3769247
                            </span>
                          </span>
                        </Link>
                        <Link href="mailto:info@innovationpixel.com">
                          <i className="ri-mail-fill" />
                          <span className="text-300">
                            [email]{" "}
                            <span className="text-secondary-2">
                              info@innovationpixel.com
                            </span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="position-absolute d-none d-md-block decorate">
                    <div className="rotateme">
                      <div className="circle-1-1" />
                      <div className="circle-1-2 position-absolute top-50 start-50 translate-middle">
                        <svg
                          className="mb-5 position-absolute bottom-0 start-0"
                          xmlns="http://www.w3.org/2000/svg"
                          width={9}
                          height={9}
                          viewBox="0 0 9 9"
                          fill="none"
                        >
                          <circle cx="4.5" cy="4.5" r="4.5" fill="#636366" />
                        </svg>
                      </div>
                      <div className="circle-1-3 position-absolute top-50 start-50 translate-middle ">
                        <svg
                          className="mb-3 position-absolute bottom-0 end-0"
                          xmlns="http://www.w3.org/2000/svg"
                          width={9}
                          height={9}
                          viewBox="0 0 9 9"
                          fill="none"
                        >
                          <circle cx="4.5" cy="4.5" r="4.5" fill="#636366" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 pt-lg-0 pt-5">
              <div className="bg-3 rounded-3 border border-1 p-md-6 p-3 position-relative h-100 overflow-hidden">
                <div className="d-flex align-items-center">
                  <svg
                    className="text-primary-2 me-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width={5}
                    height={6}
                    viewBox="0 0 5 6"
                    fill="none"
                  >
                    <circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
                  </svg>
                  <span className="text-linear-4 d-flex align-items-center">
                    {" "}
                    Development Wrap-up{" "}
                  </span>
                </div>
                <div className="h-100 position-relative">
                  <ul className="ps-3 d-flex flex-column justify-content-around h-100 position-relative">
                    <li className="position-relative z-1">
                      <div className="d-flex align-items-center gap-2">
                        <p className="text-300 text-nowrap">15 Mar:</p>
                        <span className="text-dark">
                          SPRY PUBLISHERS{" "}
                          <Link
                            href="https://www.sprypublishers.com/"
                            target="_blank"
                          >
                            <br />
                            [link]
                          </Link>
                        </span>
                      </div>
                    </li>
                    <li className="position-relative z-1">
                      <div className="d-flex align-items-center gap-2">
                        <p className="text-300 text-nowrap">07 Mar:</p>
                        <span className="text-dark">
                          FLASH USDT VALUT{" "}
                          <Link
                            href="https://reactdeploy-topaz.vercel.app/"
                            target="_blank"
                          >
                            <br />
                            [link]
                          </Link>
                        </span>
                      </div>
                    </li>
                    <li className="position-relative z-1">
                      <div className="d-flex align-items-center gap-2">
                        <p className="text-300 text-nowrap">28 Feb:</p>
                        <span className="text-dark">
                          Tradexpk{" "}
                          <Link
                            href="https://www.tradexpk.com/"
                            target="_blank"
                          >
                            <br />
                            [link]
                          </Link>
                        </span>
                      </div>
                    </li>
                    <li className="position-relative z-1">
                      <div className="d-flex align-items-center gap-2">
                        <p className="text-300 text-nowrap">19 Feb:</p>
                        <span className="text-dark">
                          Vampiretools{" "}
                          <Link
                            href="https://vampiretools.com/"
                            target="_blank"
                          >
                            <br />
                            [link]
                          </Link>
                        </span>
                      </div>
                    </li>
                    <li className="position-relative z-1">
                      <div className="d-flex align-items-center gap-2">
                        <p className="text-300 text-nowrap">02 Feb:</p>
                        <span className="text-dark">
                          Tricontinuumsolutions{" "}
                          <Link
                            href="https://tricontinuumsolutions.com/"
                            target="_blank"
                          >
                            <br />
                            [link]
                          </Link>
                        </span>
                      </div>
                    </li>
                  </ul>
                  <div className="line-left position-absolute border-start z-0" />
                </div>
                <div className="bg-overlay position-absolute bottom-0 start-0 z-1 d-none" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
