import Web3 from "web3";
import {useTranslation} from 'react-i18next'
import {Layout} from 'antd';
import {ContentS, HeaderS} from "./styles";
import {LanguageSelect} from "../LanguageSelect";

var web3 = new Web3('https://bsc-dataseed.binance.org/');

export function Greetings() {

    let {t} = useTranslation();

    console.log(web3);
    return (
        <Layout>
            <HeaderS>
                <LanguageSelect/>
            </HeaderS>
            <ContentS>{t('title')}</ContentS>
        </Layout>
    )
}
 
