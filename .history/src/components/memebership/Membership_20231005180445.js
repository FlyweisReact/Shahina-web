/** @format */

import React, { useEffect, useState } from "react";
import { getSubscription } from "../../Repository/Api";
import MembershipCard from "./MembershipCard";

const Membership = () => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    getSubscription(setResponse);
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function ShipHandler(query) {
    const TotolData = response?.filter((i) =>
      i?.plan?.toLowerCase().includes(query?.toLowerCase())
    );
    return TotolData;
  }

  return (
    <section className="bg-primary MemberShip">
      <h1 className="text-5xl font-light text-secondary text-center py-14 box-border">
        Membership
      </h1>
      <div className="flex items-start px-10 gap-2 py-10 justify-center Cont">
        <MembershipCard
          medal="/Image/72.png"
          price={`$${ShipHandler(`silver`)?.[0]?.price}`}
          type={ShipHandler(`silver`)?.[0]?.plan}
          require={`${
            ShipHandler(`silver`)?.[0]?.month
          } MONTH COMMITMENT REQUIRED`}
          bg={"silver"}
          list={ShipHandler(`silver`)?.[0]?.details}
        />
        <MembershipCard
          medal="/Image/73.png"
          price={`$${ShipHandler(`gold`)?.[0]?.price}`}
          type={ShipHandler(`gold`)?.[0]?.plan}
          require={`${
            ShipHandler(`gold`)?.[0]?.month
          } MONTH COMMITMENT REQUIRED`}
          bg={"gold"}
          list={ShipHandler(`gold`)?.[0]?.details}
        />
        <MembershipCard
          medal="/Image/74.png"
         
          bg={"platinum"}
          list={[
            "15% OFF in retail products",
            "Includes your choice of one of the following treatments each month",
          ]}
          subList={[
            "Microneedling + extractions",
            "RF Skin Tightening full face + neck",
            "Red Carpet Facial ( JetPeel Facial + Skin Tightening )",
            "DMK Enzyme therapy ( enzyme 2 & 3 Added )",
            "IPL + Extractions + Jetpeel Facial",
            "StretchMark Treatment",
            "Body Contouring 1 Area + Cellulite Treatment",
            "Perfect Derma Peel",
            "Laser Hair Removal ( face, underarms, full arms, full legs, bikini )",
            "RevePEEL Pigment removing chemical Peel",
            "Aquagold Microneedling",
          ]}
        />
        <MembershipCard
          medal="/Image/75.png"
          price={"$399"}
          type={"DIAMOND"}
          bg={"diamond"}
          list={[
            "20% OFF in retail products",
            "Includes your choice of one of the following treatments each month",
          ]}
          subList={[
            "RF Microneedling",
            "Laser hair removal ( face, neck, underarms, brazilian bikini, full legs, full arms, abdomen & back )",
          ]}
        />
      </div>
    </section>
  );
};

export default Membership;
