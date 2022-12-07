import { StarOutlined } from "@ant-design/icons";
import { Progress } from "antd";
import "../../assests/css/progressCircle.css";

function ProgressCircle(props) {
  const { evaluate } = props;
  return (
    <div className="flex gap-4 items-center">
      <div
        style={{
          width: 170,
        }}
      >
        <div className="flex gap-2 items-center">
          <Progress
            percent={90}
            size="small"
            strokeColor="orange"
            showInfo={false}
          />
          <StarOutlined className="text-yellow-600 font-bold" />
        </div>
        <div className="flex gap-2 items-center">
          <Progress
            percent={30}
            size="small"
            strokeColor="orange"
            showInfo={false}
          />
          <StarOutlined className="text-yellow-600 font-bold" />
        </div>
        <div className="flex gap-2 items-center">
          <Progress
            percent={50}
            size="small"
            strokeColor="orange"
            showInfo={false}
          />
          <StarOutlined className="text-yellow-600 font-bold" />
        </div>
        <div className="flex gap-2 items-center">
          <Progress
            percent={70}
            size="small"
            strokeColor="orange"
            showInfo={false}
          />
          <StarOutlined className="text-yellow-600 font-bold" />
        </div>
      </div>
      <Progress
        type="circle"
        status="active"
        strokeColor={{
          "0%": "#108ee9",
          "100%": "#87d068",
        }}
        percent={evaluate * 10}
        size="small"
      />
      {/* <h1 className="text-center ">{}</h1> */}
    </div>
  );
}

export default ProgressCircle;
