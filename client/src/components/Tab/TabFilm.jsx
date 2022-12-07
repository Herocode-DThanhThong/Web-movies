import { Tabs } from "antd";
import EpisodeList from "../Episodes/EpisodeList";
import VideoList from "../Video/VideoDetailPage/VideoList";
const { TabPane } = Tabs;
function TabFilm(props) {
  const { filmDetail } = props;
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab={<p className="text-white font-bold">Chọn tập</p>} key="1">
        <EpisodeList filmDetail={filmDetail} />
      </TabPane>
      <TabPane
        tab={<p className="text-white font-bold">Nội dung đặc sắc</p>}
        key="2"
      >
        <VideoList filmDetail={filmDetail} />
      </TabPane>
    </Tabs>
  );
}

export default TabFilm;
