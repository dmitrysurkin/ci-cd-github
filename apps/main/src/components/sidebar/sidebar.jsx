import React from 'react';

const _Sidebar = ({
    Sidebar,
    Tab,
}) => ({
    year,
    history,
    location,
}) => {
    return (
        <Sidebar
            data-test-id="Сайдбар"
            selected={location.pathname}
            root="/module/arm-grbs/static"
            onSelect={history.push}>
            <Tab
                title="Финансирование"
                value="/finance">
            </Tab>
            <Tab
                title="Планирование"
                value="/plan-coordination">
                {year < 2020 && (
                    <Tab
                        title="Планы закупок"
                        value="/purchase-plan">
                        <Tab
                            title="Согласованные"
                            value="/coordinated">
                        </Tab> 
                    </Tab>
                )}
                <Tab
                    title="Планы-графики"
                    value="/schedule-plan">
                    <Tab
                        title="На согласовании"
                        value="/coordination">
                    </Tab> 
                    <Tab
                        title="К корректировке"
                        value="/corrections">
                    </Tab> 
                    <Tab
                        title="Согласованные"
                        value="/coordinated">
                    </Tab> 
                </Tab>
                <Tab
                    title="Лоты"
                    value="/lot-coordination">
                    <Tab
                        title="На согласовании"
                        value="/coordination">
                    </Tab> 
                    <Tab
                        title="Выданы замечания"
                        value="/corrections">
                    </Tab> 
                    <Tab
                        title="Согласованные"
                        value="/coordinated">
                    </Tab>  
                    <Tab
                        title="Отклоненные"
                        value="/rejected">
                    </Tab>  
                </Tab>
            </Tab>
            <Tab
                title="Закупки"
                value="/purchases">
                <Tab
                    title="Заседания РГ ГРБС"
                    value="/meetings-rg-grbs"/>
                <Tab
                    title="Заявки"
                    value="/bids"/>
                <Tab
                    title="Исправление замечаний"
                    value="/correction-remarks"/>
            </Tab>
            <Tab
                title="Отраслевое согласование"
                value="/sector-agreement">
            </Tab>
            <Tab
                title="Контракты и договоры"
                value="/contract-coordination">
                <Tab
                    title="Заключение контрактов"
                    value="/coordination"/>
                <Tab
                    title="Дополнительные соглашения"
                    value="/additionalAgreements"/>
                <Tab
                    title="Согласованные"
                    value="/agreed"/>
            </Tab>
            <Tab
                title="Заявки"
                value="/bids">
                <Tab
                    title="Заявки на МРГ"
                    value="/rg-mrg-coordination"/>
                <Tab
                    title="Заявки на экспертизу НМЦ"
                    value="/nmc-examination-claims"/>
                <Tab
                    title="Отраслевое согласование"
                    value="/lots-oiv-coordination"/>
                <Tab
                    title="Заявки 1 уровня"
                    value="/first-level"/>
                <Tab
                    title="Заявки 2 уровня"
                    value="/second-level"/>
            </Tab>
            <Tab
                title="Настройки"
                value="/settings">
                <Tab
                    title="Общие"
                    value="/general"/>
                <Tab
                    title="44-ФЗ"
                    value="/44fz"/>
                <Tab
                    title="223-ФЗ"
                    value="/223fz">
                    <Tab
                        title="Настройки согласования"
                        value="/agreement"/>
                    <Tab
                        title="Настройки централизации"
                        value="/centralization"/>
                </Tab>
            </Tab>
        </Sidebar>
    );
};

export default _Sidebar;
