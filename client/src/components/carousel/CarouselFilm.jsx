import { Carousel } from "antd";
const contentStyle = {
  height: "100%",
  backgroundPosition: "center",
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
};
function CarouselFilm(props) {
  const { listBanner } = props;

  const renderContent = () => {
    return listBanner.map((item, index) => (
      <div className="w-full h-[540px] px-2" key={index}>
        <div
          className="rounded-lg border-2 border-gray-800"
          style={{
            ...contentStyle,
            backgroundImage: `url(${item.image})`,
          }}
        >
          <img
            className="w-full h-full opacity-0"
            src={item.image}
            alt="error"
          />
        </div>
      </div>
    ));
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Carousel className="h-full" autoplay>
        {renderContent()}
      </Carousel>
      ,
    </div>
  );
}

export default CarouselFilm;
