import React from 'react';

const Sidebar = ({
    E2Sidebar,
    Tab
}) => ({
    history,
    location
}) => {
    return (
        <E2Sidebar
            selected={location.pathname}
            root="/module/nsi/static"
            onSelect={history.push}>
            <Tab
                title="Классификатор товаров, работ и услуг">
            </Tab>
            <Tab
                title="Справочник КПГЗ / СПГЗ"
                value="/referenceKpgzSpgz">
                <Tab
                    title="КПГЗ"
                    value="/kpgz/" />
                <Tab
                    title="СПГЗ"
                    value="/spgz/" />
                <Tab
                    title="Справочник инновационной продукции"
                    value="/innovativeProductions" >
                    <Tab
                        title="Группы СПГЗ"
                        value="/groups/" />
                    <Tab
                        title="СПГЗ"
                        value="/search/" />
                </Tab>
                <Tab
                    title="СПГЗ требующие нормирования"
                    value="/spgzNeedNormalized" />
                <Tab
                    title="Перекодировочная таблица ЕИС"
                    value="/emiasconvertion" />
                <Tab
                    title="Характеристики"
                    value="/characteristic" />
                <Tab
                    title="Товары"
                    value="/nsiGoods/" />
                <Tab
                    title="КТРУ"
                    value="/ktru/" />
                <Tab
                    title="Перекодировочная таблица СПГЗ/КТРУ"
                    value="/ktruConversion" />
                <Tab
                    title="Запрещенные КПГЗ"
                    value="/bannedKpgz/" />                
            </Tab>
            <Tab
                title="Участники"
                value="/participants">
                <Tab
                    title="Заказчики"
                    value="/participantCustomer/" />
                <Tab
                    title="Поставщики"
                    value="/participantSupplier/" />
                <Tab
                    title="Уполномоченные органы или учреждения"
                    value="/participantAuthority/" />
                <Tab
                    title="Специализированные организации"
                    value="/participantSpecial/" />
                <Tab
                    title="Контрольные органы в сфере закупок"
                    value="/participantController/" />
                <Tab
                    title="Регулирующие органы исполнительной власти"
                    value="/participantRegulator/" />
                <Tab
                    title="Эксперты"
                    value="/participantExpert/" />
                <Tab
                    title="ГРБС"
                    value="/participantGrbs/" />
            </Tab>
            <Tab
                title="Справочники"
                value="/reference">
                <Tab
                    title="Торговая площадка"
                    value="/tradingPlatform"/>
                <Tab
                    title="Тип учреждений"
                    value="/institutionType"/>
                <Tab
                    title="Показатели рейтинга эффективности заказчиков"
                    value="/customerRating"/>
                <Tab
                    title="Периодичность поставки"
                    value="/periodicity"/>
                <Tab
                    title="Амортизация групп"
                    value="/amortizationGroup"/>
                <Tab
                    title="Причины изменения планов"
                    value="/changeReason"/>
                <Tab
                    title="Справочник выходных и праздничных дней"
                    value="/holidayException"/>
                <Tab
                    title="Рубрикатор НПСИ"
                    value="/documentRubricator"/>
                <Tab
                    title="Справочник докумуентов НПСИ"
                    value="/referenceDocument"/>
                <Tab
                    title="Справочник внешних ресурсов НПСИ"
                    value="/externalResource"/>
                <Tab
                    title="Справочник должностей"
                    value="/position"/>
                <Tab
                    title="Справочник типов регулирующих документов"
                    value="/normativSource"/>
                <Tab
                    title="Справочник признаков лотов"
                    value="/lotAttribute"/>
                <Tab
                    title="Справочник причин отказов"
                    value="/rejectReason"/>
                <Tab
                    title="Справочник ЕСЛП"
                    value="/eslp"/>
                <Tab
                    title="Государственные программы"
                    value="/governmentProgram"/>
                <Tab
                    title="Справочник ОКПД2, относящихся к Лекарственным препаратам"
                    value="/okpd2drugs"/>
                <Tab
                    title="Справочник источников финансирования АИС СИ"
                    value="/aisSiEaistFund"/>
                <Tab
                    title="Справочник адресообразующих элементов"
                    value="/addressDictionary"/>
                <Tab
                    title="Внешние системы заказчика"
                    value="/customerSystem"/>
                <Tab
                    title="Справочник видов документов"
                    value="/npaDocumentTypeReference"/>
                <Tab
                    title="Справочник настроек возможности неиспользования типовой документации для 223-ФЗ"
                    value="/typicalDocumentationSetting"/>
            </Tab>
            <Tab
                title="Классификаторы"
                value="/classifier">
                <Tab
                    title="КОСГУ"
                    value="/kosgu"/>
                <Tab
                    title="ОКАТО"
                    value="/okato"/>
                <Tab
                    title="ОКВЭД-2"
                    value="/okved/"/>
                <Tab
                    title="ОКДП"
                    value="/okdp"/>
                <Tab
                    title="ОКЕИ"
                    value="/okei"/>
                <Tab
                    title="ОКВ"
                    value="/okv/"/>
                <Tab
                    title="ОКОГУ"
                    value="/okogu"/>
                <Tab
                    title="ОКОПФ"
                    value="/okopf"/>
                <Tab
                    title="ОКПД"
                    value="/okpd/"/>
                <Tab
                    title="ОКПД-2"
                    value="/okpd2/"/>
                <Tab
                    title="ОКСМ"
                    value="/oksm"/>
                <Tab
                    title="ОКТМО"
                    value="/oktmo"/>
                <Tab
                    title="ОКФС"
                    value="/okfs"/>
                <Tab
                    title="МЭР"
                    value="/merCode"/>
            </Tab>
            <Tab
                title="Настройки"
                value="/nsi-settings">
                <Tab
                    title="Реестр исключений закупок у СМП, СОНО"
                    value="/exceptionRegistrySmp">
                    <Tab
                        title="КПГЗ"
                        value="/kpgz"/>
                    <Tab
                        title="СПГЗ"
                        value="/spgz"/>
                    <Tab
                        title="Организации"
                        value="/participant"/>
                </Tab>
                <Tab
                    title="Настройки согласования закупок"
                    value="/purchaseAgreement"/>
                <Tab
                    title="КПГЗ, предусматривающие превышение аванса над исполнением контрактов"
                    value="/prepaymentExcess"/>
                <Tab
                    title="Перечень КПГЗ/СПГЗ по строительным работам"
                    value="/buildingSubjects"/>
            </Tab>
        </E2Sidebar>
    );
};

export default Sidebar;
