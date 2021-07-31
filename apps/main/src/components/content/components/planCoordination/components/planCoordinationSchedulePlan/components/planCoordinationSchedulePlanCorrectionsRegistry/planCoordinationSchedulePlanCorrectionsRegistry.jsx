import React from 'react';

const PlanCoordinationSchedulePlanCorrectionsRegistry = ({
    window
}) => ({
    match: {path}
}) => (
    <eaist-plan-coordination-schedule-plan-corrections-registry
        ref={
        element => {
            if (element) {
                element.onOpen44fz = id => window.open(`${path}/44fz/${id}`);
                element.onOpen223fz = id => window.open(`${path}/223fz/${id}`);
            }
        }
     } />
);

export default PlanCoordinationSchedulePlanCorrectionsRegistry;
