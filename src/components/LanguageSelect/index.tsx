import {Menu, Dropdown} from 'antd';
import {ButtonS, Item} from "./styles";
import {
    GlobalOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next'


export function LanguageSelect() {

    let {i18n} = useTranslation()

    function changeLanguage(index: string) {
        i18n.changeLanguage(index)
    }

    const menu = (
        <Menu items={[
            {
                key: '1',
                label: (
                    <Item onClick={() => {
                        changeLanguage('zh')
                    }}>
                        中文
                    </Item>
                ),
            },
            {
                key: '2',
                label: (
                    <Item onClick={() => {
                        changeLanguage('en')
                    }}>
                        English
                    </Item>
                ),
            },
        ]}
        />
    );


    return (<div>
        <Dropdown overlay={menu} arrow={{pointAtCenter: true}}>
            <ButtonS type="link">
                <GlobalOutlined/>
            </ButtonS>
        </Dropdown>
    </div>)
}
