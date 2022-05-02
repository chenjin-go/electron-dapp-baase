import styled from 'styled-components'
import {Layout} from "antd";

const { Header, Content } = Layout;

export const HeaderS = styled(Header)`
  background: white;
  height: 50px;
  padding: 0 0 0 0;
`;

export const ContentS = styled(Content)`
  height: 100%;
  width: 100%;
`;