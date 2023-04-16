import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Projects(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
  };

  return (
    <div
      className="project-box"
      style={{
        display: "flex",
        flexDirection: "row",
        background: "black",
        marginBottom: "100px",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "200%",
        }}
      >
        <div
          style={{
            background: "#666666",
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "80%",
              height: "80%",
              borderRadius: "2%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Slider className="slider" {...settings}>
              {props.video.map((v) => {
                return (
                  <div key={v} style={{ background: "green" }}>
                    <video
                      autoPlay
                      loop
                      muted
                      style={{ height: "100%", width: "100%" }}
                    >
                      <source src={v} type="video/mp4" />
                    </video>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            position: "relative",
          }}
        >
          <div
            style={{
              background:'lightgreen',
              //background: "#4169E1",
              height: "97%",
              width: "95%",
              position: "absolute",
              top: "0",
              right: "0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            {props.projectInfo.map((info) => (
              <div
                style={{
                  fontWeight: "500",
                  fontSize: "20px",
                  textAlign: "center",
                  color:'black',
                  padding:'15px'
                }}
              >
                {info}
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            height: "100%",
            width: "100%",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: "0",
              right: "0",
              background: "#FF7F94",
              height: "97%",
              width: "95%",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: "white",
                width: "40%",
                height: "90%",
                borderRadius: "5%",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  background: "black",
                  width: "90%",
                  height: "90%",
                  color: "white",
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  style={{ height: "100%", width: "100%" }}
                >
                  <source src={props.mobileVideo} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
