import React from 'react';

const PlanCoordinationSchedulePlan44fz = ({
    window
}) => ({
    history,
    match: {
        url,
        params: {id},
    },
}) => (
    <eaist-plan-coordination-schedule-plan-44fz
        entity-id={id}
        ref={
        element => {
            if (element) {
                element.onClose = () => history.push(url.split('44fz')[0]);
                element.onOpenLot = id => window.open(`/index.html#/schedule/lots/${id}`);
            }
        }
     } />
);

export default PlanCoordinationSchedulePlan44fz;
