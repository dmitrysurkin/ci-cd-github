import React from 'react';

const PlanCoordinationSchedulePlan223fz = ({
    window
}) => ({
    history,
    match: {
        url,
        params: {id},
    },
}) => (
    <eaist-plan-coordination-schedule-plan-223fz
        entity-id={id}
        ref={
        element => {
            if (element) {
                element.onClose = () => history.push(url.split('223fz')[0]);
                element.onOpenLot = id => window.open(`/index.html#/schedule/lots/${id}`);
            }
        }
    } />
);

export default PlanCoordinationSchedulePlan223fz;
