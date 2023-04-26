import React from "react";
import Transfer from "../frames/Transfer";
import { RecoilRoot } from "recoil";

function Test() {
  return (
    <div>
      <RecoilRoot>
        <Transfer />
      </RecoilRoot>
    </div>
  );
}

export default Test;
