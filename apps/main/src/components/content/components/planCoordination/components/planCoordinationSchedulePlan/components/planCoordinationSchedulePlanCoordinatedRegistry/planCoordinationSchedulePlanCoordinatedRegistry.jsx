import React from 'react';

const PlanCoordinationSchedulePlanCoordinatedRegistry = ({
    window
}) => ({
    match: {path}
}) => (
    <eaist-plan-coordination-schedule-plan-coordinated-registry
        ref={
        element => {
            if (element) {
                element.onOpen44fz = id => window.open(`${path}/44fz/${id}`);
                element.onOpen223fz = id => window.open(`${path}/223fz/${id}`);
            }
        }
     } />
);

export default PlanCoordinationSchedulePlanCoordinatedRegistry;
