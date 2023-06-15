import React from "react";
import styled from "styled-components";

import Text from "../atoms/fontsText/Text";
import Screen from "../atoms/screendimensions/Screen";
import Promotion from "../organism/Promotion";

let icon = require("../../../assets/account/promo.png");

const PromotionWrapper = styled(Screen)``;

const PromotionScreen = () => {
  return (
    <PromotionWrapper>
      <Promotion saveUp={true} input promoIcon={icon} />
      <Text type="bold" color="secondary-600" size={28}>
        PROMOTION
      </Text>
    </PromotionWrapper>
  );
};

export default PromotionScreen;
