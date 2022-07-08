import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const [dataDetail, setDataDetail] = useState(null);
  const params = useParams();
  // const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${params.id}`
        );
        setDataDetail(response.data.forms);
        console.log(response.data.forms);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [params]);

  return (
    <div className="app-contaner">
      <div>
        <img src="" alt={dataDetail.name} />
        <h3>{dataDetail.name}</h3>
      </div>
    </div>
  );
};

export default Detail;
