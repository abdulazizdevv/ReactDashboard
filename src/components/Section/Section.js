import Diagramma from "../../assets/images/graphic/cards/graph.png";
import data from "../Section/data";

export const Section = () => {
  return (
    <div className="bg-white all-frame ">
      <div className="d-flex ">
        <div className="p-3 w-100">
          <h5>Today’s trends</h5>
          <div>
            <div className="d-flex justify-content-between">
              <p className="text-secondary">as of 25 May 2019, 09:41 PM</p>
              <div className="d-flex gap-5">
                <p className="text-secondary">- Today</p>
                <p className="text-secondary">- Yesterday</p>
              </div>
            </div>
            <img
              style={{ width: "100%",height:"416px",  maxWidth: "858px" }}
              src={Diagramma}
              alt="diagram"
            />
          </div>
        </div>
        <div className=" h-25">
          {data.map((item) => {
            return (
              <div
                className="py-3 text-center ms-3"
                style={{
                  border: "1px solid #DFE0EB",
                  width: "355px",
                }}
              >
                <p className="mt-1">{item.name}</p>
                <h5>{item.id}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
