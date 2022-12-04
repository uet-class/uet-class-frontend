import {useParams} from "react-router";

const Test = () => {
    let { id } = useParams();
    return <div style={{ fontSize: "50px" }}>
        Now showing post {id}
    </div>;
}

export default Test;