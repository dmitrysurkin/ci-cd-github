import React from 'react';

const PlanCoordinationSchedulePlanCoordinationRegistry = ({
    window
}) => ({
    match: {path}
}) => (
    <eaist-plan-coordination-schedule-plan-coordination-registry
        ref={
        element => {
            if (element) {
                element.onOpen44fz = id => window.open(`${path}/44fz/${id}`);
                element.onOpen223fz = id => window.open(`${path}/223fz/${id}`);
            }
        }
     } />
);

export default PlanCoordinationSchedulePlanCoordinationRegistry;
