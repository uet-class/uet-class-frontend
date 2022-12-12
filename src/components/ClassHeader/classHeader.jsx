import "./classHeader.css";
import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import ClassService from "../../services/class.service";

export default function ClassHeader(props) {
  let classId = localStorage.getItem("classID");
  const [classInfo, setClassInfo] = useState();

  useEffect(() => {
    const fetchData = async () => {
      await ClassService.memberClass(classId).then((info) => {
        setClassInfo(info.data.message)
      });
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [classId]);

  return (
    <div>
      <div className="wrappedHeader">
        <div className="className">{classInfo?.ClassName}</div>
        <div className="classCode">
          <Typography
            // className={"login-info"}
            fontSize={17}
            fontWeight={500}
            // marginTop={5}
            maxWidth={'100%'}
            padding
            noWrap 
          >
            {classInfo?.Description}
          </Typography>
        </div>
      </div>
      {props.children}
    </div>
  );
}
