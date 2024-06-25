import styled from "styled-components";
import { STYLE_VARS } from "../../shared/style-vars";

export default styled("div")`
  width: 100%;
  height: 500px;
  overflow: hidden;
  border: 2px solid ${STYLE_VARS.COLOR.LIGHT_GRAY};
  border-radius: 10px;
  box-shadow: ${STYLE_VARS.SHADOW.LIGHT};
`;
