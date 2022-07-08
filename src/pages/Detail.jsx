import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const [dataDetail, setDataDetail] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

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
      {/* {dataDetail.map(el, i) =>{

      <div key={i}>
          <img />
          <h3>{el.name}</h3>
      </div>
      }} */}
    </div>
  );
};

export default Detail;
