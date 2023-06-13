import React from "react";
import styled from "styled-components";

import Text from "../atoms/fontsText/Text";
import Screen from "../atoms/screendimensions/Screen";

const PromotionWrapper = styled(Screen)``;

const PromotionScreen = () => {
  return (
    <PromotionWrapper>
      <Text type="bold" color="secondary-600" size={28}>
        PROMOTION
      </Text>
    </PromotionWrapper>
  );
};

export default PromotionScreen;
