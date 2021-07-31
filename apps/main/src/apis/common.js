import Axios from 'axios';

export const NewCount = request => () => request.get('/common/api/notifications/userNotification/countNew');
export const SetCurrentYear = request => year => request.get(`/common/api/core/security/authentication/setCurrentYear/${year}`);
export const SetCurrentCustomer = request => year => request.get(`/common/api/core/security/authentication/setCurrentCustomer/${year}`);

export default {
    NewCount: NewCount(Axios),
    SetCurrentYear: SetCurrentYear(Axios),
    SetCurrentCustomer: SetCurrentCustomer(Axios),
};
